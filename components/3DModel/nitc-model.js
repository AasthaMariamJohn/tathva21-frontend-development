import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import { degToRad } from "three/src/math/MathUtils";
import { loadGLTFModel } from "./lib/model";
import { ModelContainer } from "./nitc-model-loader";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
} from "postprocessing";
import Loader2 from "../common/loader2";
import { useRouter } from "next/router";
import { useUtilityContext } from "@/context/utilityContext";
import InitialLoader from "../common/initialLodar";
import Loader from "../common/loader";

const ButtonPrimaryHex = 0xffe9e5;
const ButtonSecondaryHex = 0xffffff;
const initialPosition = { x: 3, y: 47, z: 16 };

const TWEEN = require("@tweenjs/tween.js");

const TweenAnimation = (
  controls,
  camera,
  x,
  y,
  z,
  duration,
  easing,
  onComplete,
  router = null,
  pushTo = null
) => {
  const target = { x: x, y: y, z: z };
  // controls.target = new THREE.Vector3(target.x,target.y,target.z);
  const tween = new TWEEN.Tween(controls.target)
    .to(target, duration)
    .easing(easing)
    .onComplete(() => {
      onComplete(controls, router, pushTo);
    });
  tween.start();
};

const InstaButton = (name, scene, x, y, z) => {
  const meshDesktop = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1.5),
    new THREE.MeshBasicMaterial({ color: ButtonPrimaryHex })
  );
  const meshMobile = new THREE.Mesh(
    new THREE.SphereBufferGeometry(3.2),
    new THREE.MeshBasicMaterial({ color: ButtonPrimaryHex })
  );
  const mesh = scene.getObjectByName("IG");
  meshDesktop.name = name + "Desktop";
  meshMobile.name = name + "Mobile";
  meshDesktop.position.set(x, y + 5, z);
  meshMobile.position.set(x, y + 1.5, z);
  meshMobile.visible = false;
  meshDesktop.visible = false;

  scene.add(meshDesktop);
  scene.add(meshMobile);

  const timeInterval = 500;
  // setInterval(() => {
  //   mesh.rotateY(degToRad(8));
  // }, 180);
  let flag = false;
  const high = mesh.position.y + 0.2;
  const mid = mesh.position.y + 0.1;
  const low = mesh.position.y;
  setInterval(() => {
    mesh.position.y = high;
  }, timeInterval);

  setInterval(() => {
    if (flag === false) {
      mesh.position.y = mid;
    } else {
      mesh.position.y = low;
    }
    flag = !flag;
  }, timeInterval / 2);
};

const Button3D = (name, scene, x, y, z) => {
  const mesh = new THREE.Mesh(
    new THREE.RingBufferGeometry(
      0.1,
      0.7,
      3,
      1,
      degToRad(35),
      degToRad(360),
      degToRad(360)
    ),
    new THREE.MeshStandardMaterial({
      color: ButtonPrimaryHex,
      side: THREE.DoubleSide,
    })
  );

  const meshDesktop = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1.5),
    new THREE.MeshBasicMaterial({ color: ButtonPrimaryHex })
  );
  const meshMobile = new THREE.Mesh(
    new THREE.SphereBufferGeometry(3.2),
    new THREE.MeshBasicMaterial({ color: ButtonPrimaryHex })
  );

  y = y + 6;
  mesh.position.set(x, y, z);
  meshDesktop.position.set(x, y, z);
  meshMobile.position.set(x, y, z);
  mesh.emissive = new THREE.Color(ButtonPrimaryHex);
  mesh.emissiveIntensity = 100;
  mesh.name = name;
  meshDesktop.name = name + "Desktop";
  meshMobile.name = name + "Mobile";
  meshMobile.visible = false;
  meshDesktop.visible = false;

  scene.add(mesh);
  scene.add(meshDesktop);
  scene.add(meshMobile);

  const timeInterval = 500;
  // setInterval(() => {
  //   mesh.rotateY(degToRad(8));
  // }, 180);
  let flag = false;
  const high = mesh.position.y + 0.2;
  const mid = mesh.position.y + 0.1;
  const low = mesh.position.y;
  setInterval(() => {
    mesh.position.y = high;
  }, timeInterval);

  setInterval(() => {
    if (flag === false) {
      mesh.position.y = mid;
    } else {
      mesh.position.y = low;
    }
    flag = !flag;
  }, timeInterval / 2);
};

function onMouseMove(event, mouse) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function onTouchStart(event, mouse) {
  mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

  // rest of your code
}

const onInstaAnimationComplete = (controls, router = null, pushTo = null) => {
  controls.enabled = true;
  console.log("animation done");
  window.location.href = "https://www.instagram.com/tathva_nitcalicut/?hl=en";
  // if(router!==null&&pushTo!==null){
  //   router.push(pushTo);
  // }
};

const onAnimationComplete = (controls, router = null, pushTo = null) => {
  controls.enabled = true;
  console.log("animation done");

  if (
    router !== null &&
    pushTo !== null &&
    (window.location.pathname === "" || window.location.pathname === "/")
  ) {
    router.push(pushTo);
  }
};

function onMouseDown(
  event,
  scene,
  camera,
  raycaster,
  mouse,
  controls,
  router = null
) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (!(window.location.pathname === "" || window.location.pathname === "/"))
    return;
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.name === "ECLCButton" + "Desktop") {
      console.log(intersects[i].object.name, " clicked");
      controls.enabled = false;
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/workshops"
      );
    } else if (intersects[i].object.name === "ARYABHATAButton" + "Desktop") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/events"
      );
    } else if (intersects[i].object.name === "MBButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "CCCButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "ArchieButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "AUDIButton" + "Desktop") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/lectures"
      );
    } else if (intersects[i].object.name === "OATButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "NLHCButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "ELHCButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "CreativeZoneButton" + "Desktop") {
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
    } else if (intersects[i].object.name === "InstaButton" + "Desktop") {
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
        onInstaAnimationComplete
      );
    }
  }
}

function onTouchDown(event, scene, camera, raycaster, mouse, controls, router) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (!(window.location.pathname === "" || window.location.pathname === "/"))
    return;
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.name === "ECLCButton" + "Mobile") {
      console.log(intersects[i].object.name, " clicked");
      controls.enabled = false;
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/workshops"
      );
    } else if (intersects[i].object.name === "ARYABHATAButton" + "Mobile") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/events"
      );
    } else if (intersects[i].object.name === "MBButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "CCCButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "ArchieButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "AUDIButton" + "Mobile") {
      controls.enabled = false;
      console.log(intersects[i].object.name, " clicked");
      TweenAnimation(
        controls,
        camera,
        intersects[i].object.position.x,
        intersects[i].object.position.y,
        intersects[i].object.position.z,
        1500,
        TWEEN.Easing.Quartic.Out,
        onAnimationComplete,
        router,
        "/lectures"
      );
    } else if (intersects[i].object.name === "OATButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "NLHCButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "CreativeZoneButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "ELHCButton" + "Mobile") {
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
    } else if (intersects[i].object.name === "InstaButton" + "Mobile") {
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
        onInstaAnimationComplete
      );
    }
  }
}

const NITCModel3D = () => {
  // Defining Router
  const router = useRouter();

  // Modal Stuff
  const {
    modelIsOpen,
    setModelIsOpen,
    setMouse,
    setBuilding,
    setLink,
    setTitle,
  } = useUtilityContext();
  const modalStuff = {
    modelIsOpen: modelIsOpen,
    setModelIsOpen: setModelIsOpen,
    setMouse: setMouse,
    setBuilding: setBuilding,
    setLink: setLink,
    setTitle: setTitle,
  };

  const refContainer = useRef();
  const [loading, setLoading] = useState(true);

  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  // Set inital camera position here
  const [initialCameraPosition] = useState(
    new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z)
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();
  // for raycasting mose coordinates
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  // for animating the model
  const clock = new THREE.Clock();
  const delta = clock.getDelta();
  const mixers = { mixer1: undefined };

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
      renderer.physicallyCorrectLights = false;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setClearColor(0xcccccc);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default

      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // 640 -> 240
      // 8   -> 6
      const aspectRatio = scW / scH;
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.PerspectiveCamera(70, aspectRatio, 10, 10000);

      //camera.position.copy(initialCameraPosition)

      //camera.lookAt(target)
      setCamera(camera);

      // adding ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      // adding fog
      const fog = new THREE.FogExp2(0x020144, 0.005);
      scene.fog = fog;
      // setting backgrouound color
      scene.background = new THREE.Color(0x020144);

      const controls = new MapControls(camera, renderer.domElement);
      //controls.autoRotate = true
      controls.target = initialCameraPosition;

      //TweenAnimation(controls, camera, initialCameraPosition.x,initialCameraPosition.y, initialCameraPosition.z, 0, TWEEN.Easing.Quartic.Out, onAnimationComplete);

      controls.maxDistance = 52.5;
      controls.minDistance = 33.5;

      controls.minPolarAngle = degToRad(60);
      controls.maxPolarAngle = degToRad(60);
      //controls.noRotate = true
      controls.minAzimuthAngle = degToRad(-30);
      controls.maxAzimuthAngle = degToRad(30);

      // Bloom
      const renderScene = new RenderPass(scene, camera);

      // const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );

      // bloomPass.threshold = 0
      // bloomPass.strength = 6.19
      // bloomPass.radius = 0.8
      // bloomPass.exposure = 1.0184
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(renderScene);
      //composer.addPass( bloomPass );
      //composer.addPass(new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 ));
      //composer.addPass(new EffectPass(camera, new VignetteEffect()));
      composer.addPass(new EffectPass(camera, new BloomEffect()));

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
        "mousedown",
        (event) => {
          onMouseDown(event, scene, camera, raycaster, mouse, controls, router);
        },
        false
      );
      window.addEventListener(
        "touchstart",
        (event) => {
          onTouchStart(event, mouse);
        },
        false
      );
      window.addEventListener(
        "touchend",
        (event) => {
          onTouchDown(event, scene, camera, raycaster, mouse, controls, router);
        },
        false
      );
      setControls(controls);
      try {
        // Desktop Navbar Event Listeners
        document.getElementById("logo-link").addEventListener("click", () => {
          TweenAnimation(
            controls,
            camera,
            initialPosition.x,
            initialPosition.y,
            initialPosition.z,
            1500,
            TWEEN.Easing.Quartic.Out,
            onAnimationComplete,
            router,
            "/"
          );
        });
        document
          .getElementById("tathva-title")
          .addEventListener("click", () => {
            TweenAnimation(
              controls,
              camera,
              initialPosition.x,
              initialPosition.y,
              initialPosition.z,
              1500,
              TWEEN.Easing.Quartic.Out,
              onAnimationComplete,
              router,
              "/"
            );
          });

        document.getElementById("Events-link").addEventListener("click", () => {
          var position = scene.getObjectByName("ARYABHATA").position;
          TweenAnimation(
            controls,
            camera,
            position.x,
            position.y,
            position.z,
            1500,
            TWEEN.Easing.Back.Out,
            onAnimationComplete,
            router,
            "/events"
          );
        });
        document
          .getElementById("Workshops-link")
          .addEventListener("click", () => {
            var position = scene.getObjectByName("ECLC").position;
            TweenAnimation(
              controls,
              camera,
              position.x,
              position.y,
              position.z,
              1500,
              TWEEN.Easing.Back.Out,
              onAnimationComplete,
              router,
              "/workshops"
            );
          });
        document
          .getElementById("Lecture-link")
          .addEventListener("click", () => {
            var position = scene.getObjectByName("AUDI").position;
            TweenAnimation(
              controls,
              camera,
              position.x,
              position.y,
              position.z,
              1500,
              TWEEN.Easing.Back.Out,
              onAnimationComplete,
              router,
              "/lectures"
            );
          });
        document.getElementById("Shop-link").addEventListener("click", () => {
          var position = scene.getObjectByName("MB").position;
          TweenAnimation(
            controls,
            camera,
            position.x,
            position.y,
            position.z,
            3000,
            TWEEN.Easing.Back.Out,
            onAnimationComplete
          );
        });

        document
          .getElementById("Sponsors-link")
          .addEventListener("click", () => {
            var position = scene.getObjectByName("CCC").position;
            TweenAnimation(
              controls,
              camera,
              position.x,
              position.y,
              position.z,
              1500,
              TWEEN.Easing.Back.Out,
              onAnimationComplete,
              router,
              "/sponsors"
            );
          });

        // // Mobile Navbar Event Listeners
        document.getElementById("logo-link").addEventListener("click", () => {
          TweenAnimation(
            controls,
            camera,
            initialPosition.x,
            initialPosition.y,
            initialPosition.z,
            1500,
            TWEEN.Easing.Quartic.Out,
            onAnimationComplete,
            router,
            "/"
          );
        });
        // document.getElementById("tathva-title-mobile").addEventListener("click", () => {
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     initialPosition.x,
        //     initialPosition.y,
        //     initialPosition.z,
        //     1500,
        //     TWEEN.Easing.Quartic.Out,
        //     onAnimationComplete,
        //     router,
        //     "/"
        //   );
        // });

        // document.getElementById("Events-link-mobile").addEventListener("click", () => {
        //   var position =scene.getObjectByName("ARYABHATA").position;
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     position.x,
        //     position.y,
        //     position.z,
        //     1500,
        //     TWEEN.Easing.Back.Out,
        //     onAnimationComplete,
        //     router,
        //     "/events"
        //   );
        // });
        // document.getElementById("Workshops-link-mobile").addEventListener("click", () => {
        //   var position = scene.getObjectByName("ECLC").position;
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     position.x,
        //     position.y,
        //     position.z,
        //     1500,
        //     TWEEN.Easing.Back.Out,
        //     onAnimationComplete,
        //     router,
        //     '/workshops'
        //   );
        // });
        // document.getElementById("Lecture-link-mobile").addEventListener("click", () => {
        //   var position = scene.getObjectByName("AUDI").position;
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     position.x,
        //     position.y,
        //     position.z,
        //    1500,
        //     TWEEN.Easing.Back.Out,
        //     onAnimationComplete,
        //     router,
        //     "/lectures"
        //   );
        // });
        // document.getElementById("Shop-link-mobile").addEventListener("click", () => {
        //   var position = scene.getObjectByName("MB").position;
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     position.x,
        //     position.y,
        //     position.z,
        //     3000,
        //     TWEEN.Easing.Back.Out,
        //     onAnimationComplete
        //   );
        // });

        // document.getElementById("Sponsors-link-mobile").addEventListener("click", () => {
        //   var position = scene.getObjectByName("CCC").position;
        //   TweenAnimation(
        //     controls,
        //     camera,
        //     position.x,
        //     position.y,
        //     position.z,
        //    1500,
        //     TWEEN.Easing.Back.Out,
        //     onAnimationComplete,
        //     router,
        //     "/lectures"
        //   );
        // });
      } catch (error) {
        console.log("error ! Navbar Links won't work.");
      }

      loadGLTFModel(
        scene,
        "/model/scene.glb",
        {
          receiveShadow: false,
          castShadow: false,
        },
        mixers
      ).then(() => {
        requestAnimationFrame(animate);
        setLoading(false);
      });

      let req = null;

      const animate = () => {
        //console.log(controls.target);
        req = requestAnimationFrame(animate);
        controls.update();
        delta = clock.getDelta();

        if (mixers.mixer1 !== undefined) {
          mixers.mixer1.update(delta);
          TWEEN.update();
        }

        composer.render(delta);
        resetHover(scene, modalStuff);
        hoverButtons(scene, camera, raycaster, mouse, modalStuff);

        //renderer.render(scene, camera);
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
      const audi = scene.getObjectByName("AUDI");
      const oat = scene.getObjectByName("OAT");
      const nlhc = scene.getObjectByName("NLHC");
      const creativezone = scene.getObjectByName("CZ");
      const elhc = scene.getObjectByName("ELHC");
      const instatag = scene.getObjectByName("IGTAG");
      // const bbcourt = scene.getObjectByName("BB");
      // const vbcourt = scene.getObjectByName("VB");
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
        ccc.position.y,
        ccc.position.z
      );
      Button3D(
        "ARYABHATAButton",
        scene,
        aryabhata.position.x,
        aryabhata.position.y,
        aryabhata.position.z
      );
      Button3D(
        "AUDIButton",
        scene,
        audi.position.x,
        audi.position.y,
        audi.position.z
      );
      Button3D(
        "OATButton",
        scene,
        oat.position.x,
        oat.position.y,
        oat.position.z
      );
      Button3D(
        "NLHCButton",
        scene,
        nlhc.position.x,
        nlhc.position.y,
        nlhc.position.z
      );
      Button3D(
        "CreativeZoneButton",
        scene,
        creativezone.position.x,
        creativezone.position.y,
        creativezone.position.z
      );
      Button3D(
        "ELHCButton",
        scene,
        elhc.position.x,
        elhc.position.y,
        elhc.position.z
      );
      InstaButton(
        "InstaButton",
        scene,
        instatag.position.x,
        instatag.position.y,
        instatag.position.z
      );
      // Button3D(
      //   "BBcourtButton",
      //   scene,
      //   bbcourt.position.x,
      //   bbcourt.position.y,
      //   bbcourt.position.z
      // );
      // Button3D(
      //   "VBcourtButton",
      //   scene,
      //   vbcourt.position.x,
      //   vbcourt.position.y,
      //   vbcourt.position.z
      // );
    }
  }, [loading]);

  // hovering over buttons
  const hoverButtons = (scene, camera, raycaster, mouse, modalStuff = null) => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
      if (intersects[i].object.name === "ECLCButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("ECLC");
          modalStuff.setTitle("Workshops");
          modalStuff.setLink("/workshops");
        }
      } else if (intersects[i].object.name === "ARYABHATAButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Aryabhata");
          modalStuff.setTitle("Events");
          modalStuff.setLink("/events");
        }
      } else if (intersects[i].object.name === "MBButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Main Building");
          modalStuff.setTitle("");
          modalStuff.setLink("/aboutus");
        }
      } else if (intersects[i].object.name === "CCCButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Central Computing Center");
          modalStuff.setTitle("");
          modalStuff.setLink("/sponsors");
        }
      } else if (intersects[i].object.name === "ArchieButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Archie");
          modalStuff.setTitle("Adizya");
          modalStuff.setLink("/adizya");
        }
      } else if (intersects[i].object.name === "AUDIButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Auditorium");
          modalStuff.setTitle("Lectures");
          modalStuff.setLink("/lectures");
        }
      } else if (intersects[i].object.name === "OATButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Open Air Theater");
          modalStuff.setTitle("");
          modalStuff.setLink("/lectures");
        }
      } else if (intersects[i].object.name === "NLHCButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("NLHC");
          modalStuff.setTitle("");
          modalStuff.setLink("/lectures");
        }
      } else if (intersects[i].object.name === "CreativeZoneButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Creative Zone");
          modalStuff.setTitle("");
          modalStuff.setLink("/");
        }
      } else if (intersects[i].object.name === "ELHCButton") {
        intersects[i].object.material.color.setHex(ButtonSecondaryHex);
        intersects[i].object.scale.x = 2;
        intersects[i].object.scale.y = 2;
        intersects[i].object.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("ELHC");
          modalStuff.setTitle("");
          modalStuff.setLink("/");
        }
      } else if (intersects[i].object.name === "InstaButton") {
        const ig = scene.getObjectByName("IG");
        ig.scale.x = 2;
        ig.scale.y = 2;
        ig.scale.z = 2;
        document.body.style.cursor = "pointer";
        if (modalStuff !== null) {
          modalStuff.setModelIsOpen(true);
          modalStuff.setMouse(mouse);
          modalStuff.setBuilding("Visit Our Instagram Page");
          modalStuff.setTitle("");
          modalStuff.setLink("/");
        }
      }
    }
  };
  const resetHover = (scene, modalStuff = null) => {
    const eclcbutton = scene.getObjectByName("ECLCButton");
    const aryabhatabutton = scene.getObjectByName("ARYABHATAButton");
    const mbbutton = scene.getObjectByName("MBButton");
    const CCCbutton = scene.getObjectByName("CCCButton");
    const archibutton = scene.getObjectByName("ArchieButton");
    const audiButton = scene.getObjectByName("AUDIButton");
    const nlhcButton = scene.getObjectByName("NLHCButton");
    const oatButton = scene.getObjectByName("OATButton");
    const creativeZoneButton = scene.getObjectByName("CreativeZoneButton");
    const elhcButton = scene.getObjectByName("ELHCButton");
    const instagramButton = scene.getObjectByName("InstaButton");
    const ig = scene.getObjectByName("IG");
    document.body.style.cursor = "default";
    if (eclcbutton) {
      eclcbutton.material.color.setHex(ButtonPrimaryHex);
      eclcbutton.scale.x = 1;
      eclcbutton.scale.y = 1;
      eclcbutton.scale.z = 1;
    }
    if (aryabhatabutton) {
      aryabhatabutton.material.color.setHex(ButtonPrimaryHex);
      aryabhatabutton.scale.x = 1;
      aryabhatabutton.scale.y = 1;
      aryabhatabutton.scale.z = 1;
    }
    if (mbbutton) {
      mbbutton.material.color.setHex(ButtonPrimaryHex);
      mbbutton.scale.x = 1;
      mbbutton.scale.y = 1;
      mbbutton.scale.z = 1;
    }
    if (CCCbutton) {
      CCCbutton.material.color.setHex(ButtonPrimaryHex);
      CCCbutton.scale.x = 1;
      CCCbutton.scale.y = 1;
      CCCbutton.scale.z = 1;
    }
    if (archibutton) {
      archibutton.material.color.setHex(ButtonPrimaryHex);
      archibutton.scale.x = 1;
      archibutton.scale.y = 1;
      archibutton.scale.z = 1;
    }
    if (audiButton) {
      audiButton.material.color.setHex(ButtonPrimaryHex);
      audiButton.scale.x = 1;
      audiButton.scale.y = 1;
      audiButton.scale.z = 1;
    }
    if (nlhcButton) {
      nlhcButton.material.color.setHex(ButtonPrimaryHex);
      nlhcButton.scale.x = 1;
      nlhcButton.scale.y = 1;
      nlhcButton.scale.z = 1;
    }
    if (oatButton) {
      oatButton.material.color.setHex(ButtonPrimaryHex);
      oatButton.scale.x = 1;
      oatButton.scale.y = 1;
      oatButton.scale.z = 1;
    }
    if (creativeZoneButton) {
      creativeZoneButton.material.color.setHex(ButtonPrimaryHex);
      creativeZoneButton.scale.x = 1;
      creativeZoneButton.scale.y = 1;
      creativeZoneButton.scale.z = 1;
    }
    if (elhcButton) {
      elhcButton.material.color.setHex(ButtonPrimaryHex);
      elhcButton.scale.x = 1;
      elhcButton.scale.y = 1;
      elhcButton.scale.z = 1;
    }
    if (instagramButton) {
      ig.scale.x = 1;
      ig.scale.y = 1;
      ig.scale.z = 1;
    }

    if (modalStuff.modelIsOpen !== null) {
      modalStuff.setModelIsOpen(false);
    }
  };

  return (
    <div>
      {/* <InitialLoader loading={loading}/> */}
      {loading?<Loader/>:<></>}
      <ModelContainer ref={refContainer}></ModelContainer>  
    </div>
  );
};

export default NITCModel3D;
