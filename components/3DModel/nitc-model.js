import { AspectRatio, Spinner } from "@chakra-ui/react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import { degToRad } from "three/src/math/MathUtils";
import { loadGLTFModel } from "./lib/model";
import { ModelContainer } from "./nitc-model-loader";
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import Loader from "../common/loader";

const TWEEN = require("@tweenjs/tween.js");

 const TweenAnimation = (
  controls,
  camera,
  x,
  y,
  z,
  duration,
  easing,
  onComplete
) => {
  const target = { x: x, y: y, z: z };
  //controls.target = new THREE.Vector3(target.x,target.y,target.z);
  const tween = new TWEEN.Tween(controls.target)
    .to(target, duration)
    .easing(easing)
    .onComplete(() => {
      onComplete(controls);
    });
  tween.start();
};

const Button3D = (name, scene, x, y, z) => {
  const mesh = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );

  mesh.position.set(x, y, z);
  mesh.name = name;
  scene.add(mesh);

  setInterval(() => {
    mesh.rotateY(degToRad(8));
  }, 200);
};

function onMouseMove(event, mouse) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
const onAnimationComplete = (controls) => {
  controls.enabled = true;
  console.log("animation done");
};
function onMouseDown(event, scene, camera, raycaster, mouse, controls) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.name === "ECLCButton") {
      console.log(intersects[i].object.name, " clicked");
      controls.enabled = false;
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        2000,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete
      );
    } else if (intersects[i].object.name === "ARYABHATAButton") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        2000,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete
      );
    } else if (intersects[i].object.name === "MBButton") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        2000,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete
      );
    } else if (intersects[i].object.name === "CCCButton") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        2000,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete
      );
    } else if (intersects[i].object.name === "ArchieButton") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        2000,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete
      );
    }
  }
}
function restoreMaterial( obj ) {

  if ( materials[ obj.uuid ] ) {

    obj.material = materials[ obj.uuid ];
    delete materials[ obj.uuid ];

  }

}


const NITCModel3D = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);


  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  // Set inital camera position here
  const [initialCameraPosition] = useState(new THREE.Vector3(0, 47, 16));
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();
  // for raycasting mose coordinates
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  // for animating the model
  const clock = new THREE.Clock();
  const delta = clock.getDelta();
  const mixers = { mixer1: undefined };


  // Bloom
  const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
  bloomPass.threshold = 0;
  bloomPass.strength = 6.19;
  bloomPass.radius = 0.8;
  bloomPass.exposure = 1.0184;
  let bloomComposer = null;
  let renderScene = undefined;
  let finalComposer = undefined;
  const ENTIRE_SCENE = 0, BLOOM_SCENE = 1;
  let bloomLayer = new THREE.Layers();
	bloomLayer.set( BLOOM_SCENE );
  const darkMaterial = new THREE.MeshBasicMaterial( { color: "black" } );
	const materials = {};
  // Handling window resize
  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.physicallyCorrectLights = true
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setClearColor( 0xcccccc );
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default 
      renderScene = new RenderPass( scene, camera );
      bloomComposer = new EffectComposer( renderer );
			bloomComposer.renderToScreen = false;
			bloomComposer.addPass( renderScene );
			bloomComposer.addPass( bloomPass );
      

      const finalPass = new ShaderPass(
				new THREE.ShaderMaterial( {
					uniforms: {
						baseTexture: { value: null },
						bloomTexture: { value: bloomComposer.renderTarget2.texture }
					},
					//vertexShader: document.getElementById( 'vertexshader' ).textContent,
					//fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
					defines: {}
				} ), "baseTexture"
			);
			finalPass.needsSwap = true;

      finalComposer = new EffectComposer( renderer );
			finalComposer.addPass( renderScene );
			finalComposer.addPass( finalPass );



      function darkenNonBloomed( obj ) {

        if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {
      
          materials[ obj.uuid ] = obj.material;
          obj.material = darkMaterial;
      
        }
      
      }
      function renderBloom( mask ,bloomComposer1) {
      
        if ( mask === true ) {
          scene.traverse( darkenNonBloomed );
          bloomComposer1.render();
          scene.traverse( restoreMaterial );
      
        } else {
      
          camera.layers.set( BLOOM_SCENE );
          bloomComposer1.render();
          camera.layers.set( ENTIRE_SCENE );
      
        }
      
      }


      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // 640 -> 240
      // 8   -> 6
      const aspectRatio = scW / scH;
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.PerspectiveCamera(45, aspectRatio, 10, 10000);

      //camera.position.copy(initialCameraPosition)

      //camera.lookAt(target)
      setCamera(camera);

      // adding ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
      scene.add(ambientLight);
      // adding fog
      const fog = new THREE.FogExp2(0x21211F, 0.01);
      scene.fog = fog

      const controls = new MapControls(camera, renderer.domElement);
      //controls.autoRotate = true
      //controls.target = initialCameraPosition;
      TweenAnimation(controls, camera, initialCameraPosition.x,initialCameraPosition.y, initialCameraPosition.z, 0, TWEEN.Easing.Quartic.Out, onAnimationComplete);

      controls.maxDistance = 52.5;
      controls.minDistance = 23.5;

      controls.minPolarAngle = degToRad(65);
      controls.maxPolarAngle = degToRad(65);
      //controls.noRotate = true
      controls.minAzimuthAngle = degToRad(0);
      controls.maxAzimuthAngle = degToRad(0);

      var minPan = new THREE.Vector3(-30, 0, -40);
      var maxPan = new THREE.Vector3(30, 0, 20);
      var _v = new THREE.Vector3();

      controls.addEventListener("change", function () {
        _v.copy(controls.target);
        controls.target.clamp(minPan, maxPan);
        _v.sub(controls.target);
        camera.position.sub(_v);
      });
      window.addEventListener(
        "mousemove",
        (event) => {
          onMouseMove(event, mouse);
        },
        false
      );
      window.addEventListener(
        "pointerdown",
        (event) => {
          onMouseDown(event, scene, camera, raycaster, mouse, controls);
        },
        false,
      );
      // window.addEventListener(
      //   "touchend",
      //   (event) => {
      //     onMouseDown(event, scene, camera, raycaster, mouse, controls);
      //   },
      //   false
      // );
      setControls(controls);
        
      

      loadGLTFModel(
        scene,
        "/model/scene.glb",
        {
          receiveShadow: false,
          castShadow: false,
        },
        mixers
      ).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;

      const animate = () => {
        //console.log(controls.target);
        req = requestAnimationFrame(animate);
        controls.update();
        delta = clock.getDelta();

        renderer.clear();
  
        camera.layers.set(1);
        //bloomComposer.render();
        
        renderer.clearDepth();
        camera.layers.set(0);

        
        if (mixers.mixer1 !== undefined) 
        {
          mixers.mixer1.update(delta);
          TWEEN.update();
          
        }
        
        if(bloomComposer)
        {
          // render scene with bloom
          //renderBloom( true ,bloomComposer);
          
          // render the entire scene, then render bloom scene on top
          //finalComposer.render();
        }
        resetHover(scene);
        hoverButtons(scene, camera, raycaster, mouse);
        
        renderer.render(scene, camera);
      };

      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }

    
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);
  // adding buttons
  useEffect(() => {
    if (loading === false) {
      const eclc = scene.getObjectByName("ECLC");
      const mb = scene.getObjectByName("MB");
      const archi = scene.getObjectByName("Archie");
      const ccc = scene.getObjectByName("CCC");
      const aryabhata = scene.getObjectByName("ARYABHATA");

      Button3D(
        "ECLCButton",
        scene,
        eclc.position.x,
        eclc.position.y,
        eclc.position.z
      );
      Button3D("MBButton", scene, mb.position.x, mb.position.y, mb.position.z);
      Button3D(
        "ArchieButton",
        scene,
        archi.position.x,
        archi.position.y,
        archi.position.z
      );
      Button3D(
        "CCCButton",
        scene,
        ccc.position.x,
        ccc.position.y ,
        ccc.position.z
      );
      Button3D(
        "ARYABHATAButton",
        scene,
        aryabhata.position.x,
        aryabhata.position.y,
        aryabhata.position.z
      );
    }
    

   

  }, [loading]);

  // hovering over buttons
  const hoverButtons = (scene, camera, raycaster, mouse) => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
      if (intersects[i].object.name === "ECLCButton") {
        intersects[i].object.material.color.setHex(0x0000ff);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
      } else if (intersects[i].object.name === "ARYABHATAButton") {
        intersects[i].object.material.color.setHex(0x0000ff);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
      } else if (intersects[i].object.name === "MBButton") {
        intersects[i].object.material.color.setHex(0x0000ff);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
      } else if (intersects[i].object.name === "CCCButton") {
        intersects[i].object.material.color.setHex(0x0000ff);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
      } else if (intersects[i].object.name === "ArchieButton") {
        intersects[i].object.material.color.setHex(0x0000ff);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
      }
    }
  };
  const resetHover = (scene) => {
    const eclcbutton = scene.getObjectByName("ECLCButton");
    const aryabhatabutton = scene.getObjectByName("ARYABHATAButton");
    const mbbutton = scene.getObjectByName("MBButton");
    const CCCbutton = scene.getObjectByName("CCCButton");
    const archibutton = scene.getObjectByName("ArchieButton");
    if (eclcbutton) {
      eclcbutton.material.color.setHex(0xff0000);
      eclcbutton.scale.x = 1;
      eclcbutton.scale.y = 1;
      eclcbutton.scale.z = 1;
    }
    if (aryabhatabutton) {
      aryabhatabutton.material.color.setHex(0xff0000);
      aryabhatabutton.scale.x = 1;
      aryabhatabutton.scale.y = 1;
      aryabhatabutton.scale.z = 1;
    }
    if (mbbutton) {
      mbbutton.material.color.setHex(0xff0000);
      mbbutton.scale.x = 1;
      mbbutton.scale.y = 1;
      mbbutton.scale.z = 1;
    }
    if (CCCbutton) {
      CCCbutton.material.color.setHex(0xff0000);
      CCCbutton.scale.x = 1;
      CCCbutton.scale.y = 1;
      CCCbutton.scale.z = 1;
    }
    if (archibutton) {
      archibutton.material.color.setHex(0xff0000);
      archibutton.scale.x = 1;
      archibutton.scale.y = 1;
      archibutton.scale.z = 1;
    }
  };




  return (
    <div>
      {loading?<Loader/>:<></>}
      <ModelContainer ref={refContainer}></ModelContainer>
    </div>
  );
};

export default NITCModel3D;
