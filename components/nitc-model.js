import { AspectRatio } from '@chakra-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { ModelSpinner, ModelContainer } from './nitc-model-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const NITCModel3D = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0,0,0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      54.97889292526845, 36.09132257513777 ,-45.4275292024348
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()
  
    

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
      scene.fog = fog

      const controls = new MapControls(camera, renderer.domElement)
      //controls.autoRotate = true
      controls.target = target
      
      controls.maxDistance = 150
      
      var minPan = new THREE.Vector3( - 10, - 10, - 10 );
      var maxPan = new THREE.Vector3( 10, 10, 10 );
      var _v = new THREE.Vector3();
      
      controls.addEventListener("change", function() {
          _v.copy(controls.target);
          controls.target.clamp(minPan, maxPan);
          _v.sub(controls.target);
          camera.position.sub(_v);
      })
    
      setControls(controls)

      loadGLTFModel(scene, '/scene.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      //let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        // frame = frame <= 100 ? frame + 1 : frame

        // if (frame <= 10) {
        //   const p = initialCameraPosition
        //   const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        //   camera.position.y = 10
        //   camera.position.x =
        //     p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        //   camera.position.z =
        //     p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        //   camera.lookAt(target)
        // } else 
        {
          //camera.lookAt(target)
          controls.update(0.1)
        }
        console.log("Target: ", target)
        console.log("Camera Positions",camera.position.x, camera.position.y, camera.position.z)
        console.log("Camera Target",target.x, target.y, target.z)
        console.log("Camera Rotation",camera.rotation.x, camera.rotation.y, camera.rotation.z)
        console.log("Camera Rotation Speed",camera.rotation.xSpeed, camera.rotation.ySpeed, camera.rotation.zSpeed)
        console.log("Camera Near and Far",camera.near, camera.far)
        console.log("Camera Fov",camera.fov)
        console.log("Azimuth",controls.azimuthAngle)
        console.log("Polar",controls.polarAngle)
        
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
//debugger useEffect


  return (
    
    <ModelContainer  ref={refContainer}></ModelContainer>
 
  )
}

export default NITCModel3D
