import { AspectRatio } from '@chakra-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls'
import { degToRad } from 'three/src/math/MathUtils'
import { loadGLTFModel } from '../lib/model'
import { ModelContainer } from './nitc-model-loader'


const Button3D = (name , scene, x, y, z) => {
    const mesh = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );
  
  
  mesh.position.set(x,y,z);
  mesh.name = name
  scene.add(mesh);   

  
  setInterval(() => {
    mesh.rotateY(degToRad(3));
  }, 5);
};

function onMouseMove( event , mouse) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
function onMouseDown(event, scene, camera, raycaster, mouse){
  raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for(let i =0; i<intersects.length; i++){
      if(intersects[i].object.name==='ECLCButton'){
        console.log(intersects[i].object.name,' clicked')

      }
      else if(intersects[i].object.name==='OATButton'){
        console.log(intersects[i].object.name,' clicked')
     
      }
      else if(intersects[i].object.name==='MBButton'){
        console.log(intersects[i].object.name,' clicked')
     
      }
      else if(intersects[i].object.name==='CreativeButton'){
        console.log(intersects[i].object.name,' clicked')
     
       }
      
    }
}
const NITCModel3D = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0,0,0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      0,20,100
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()
  // for raycasting mose coordinates
  const mouse = new THREE.Vector2()
  const raycaster = new THREE.Raycaster()
    

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const aspectRatio = scW/scH
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.PerspectiveCamera(
       30, aspectRatio,10,10000
      )

      
      
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)
      
      // adding ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff)
      scene.add(ambientLight)
      // adding fog
      const fog = new THREE.FogExp2(0xffffff, 0.009)
      //scene.fog = fog

      const controls = new MapControls(camera, renderer.domElement)
      //controls.autoRotate = true
      controls.target = target
      
      controls.maxDistance = 52.5
      controls.minDistance = 23.5
      
      var minPan = new THREE.Vector3( - 12, - 10, - 40 );
      var maxPan = new THREE.Vector3( 12, 10, 10 );
      var _v = new THREE.Vector3();
      
      controls.addEventListener("change", function() {
          _v.copy(controls.target);
          controls.target.clamp(minPan, maxPan);
          _v.sub(controls.target);
          camera.position.sub(_v);
      })
      window.addEventListener( 'mousemove', (event)=>{
        onMouseMove(event, mouse)
      }, false );
      window.addEventListener( 'mousedown',(event)=>{
        onMouseDown(event, scene, camera, raycaster, mouse)
      } , false );
      setControls(controls)

      loadGLTFModel(scene, '/scene.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

       
        //camera.lookAt(target)
        controls.update(0.1)
        resetHover(scene)
        hoverButtons(scene, camera, raycaster, mouse)
        renderer.render(scene, camera)
        //debugger
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])
  // adding buttons
  useEffect(()=>{
      if(loading===false)
      {
        const eclc = scene.getObjectByName('ECLC')
        const oat002 = scene.getObjectByName('OAT002')
        const mb = scene.getObjectByName('MB')
        const creative = scene.getObjectByName('Creative')
        Button3D('ECLCButton',scene,eclc.position.x,eclc.position.y,eclc.position.z)
        Button3D('OATButton',scene,oat002.position.x,oat002.position.y,oat002.position.z)
        Button3D('MBButton',scene,mb.position.x,mb.position.y,mb.position.z)
        Button3D('CreativeButton',scene,creative.position.x,creative.position.y,creative.position.z)
      }
    },[loading])

  // hovering over buttons
  const hoverButtons = (scene, camera, raycaster, mouse)=>{
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for(let i =0; i<intersects.length; i++){
      if(intersects[i].object.name==='ECLCButton'){
        intersects[i].object.material.color.setHex(0x0000ff)
        intersects[i].object.scale.x = 2
        intersects[i].object.scale.y = 2
        intersects[i].object.scale.z = 2
      }
      else if(intersects[i].object.name==='OATButton'){
        intersects[i].object.material.color.setHex(0x0000ff)
        intersects[i].object.scale.x = 2
        intersects[i].object.scale.y = 2
        intersects[i].object.scale.z = 2
     
      }
      else if(intersects[i].object.name==='MBButton'){
        intersects[i].object.material.color.setHex(0x0000ff)
        intersects[i].object.scale.x = 2
        intersects[i].object.scale.y = 2
        intersects[i].object.scale.z = 2
     
      }
      else if(intersects[i].object.name==='CreativeButton'){
        intersects[i].object.material.color.setHex(0x0000ff)
        intersects[i].object.scale.x = 2
        intersects[i].object.scale.y = 2
        intersects[i].object.scale.z = 2
     
       }
      
    }
  }
  const resetHover = (scene) =>{
    const eclcbutton = scene.getObjectByName('ECLCButton')
    const oat002button = scene.getObjectByName('OATButton')
    const mbbutton = scene.getObjectByName('MBButton')
    const creativebutton = scene.getObjectByName('CreativeButton')

    if(eclcbutton){
      eclcbutton.material.color.setHex(0xff0000)
      eclcbutton.scale.x = 1
      eclcbutton.scale.y = 1
      eclcbutton.scale.z = 1
    }
    if(oat002button){
      oat002button.material.color.setHex(0xff0000)
      oat002button.scale.x = 1
      oat002button.scale.y = 1
      oat002button.scale.z = 1
    }
    if(mbbutton){
      mbbutton.material.color.setHex(0xff0000)
      mbbutton.scale.x = 1
      mbbutton.scale.y = 1
      mbbutton.scale.z = 1
    }
    if(creativebutton){
      creativebutton.material.color.setHex(0xff0000)
      creativebutton.scale.x = 1
      creativebutton.scale.y = 1
      creativebutton.scale.z = 1
    }
  }
  return (
    
    <ModelContainer  ref={refContainer}></ModelContainer>
 
  )
}

export default NITCModel3D
