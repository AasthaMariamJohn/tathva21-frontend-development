import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {AnimationMixer} from 'three'
export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }, mixers
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'NITC 3D Model'
        obj.position.y = 5
        obj.position.x = 0
        obj.position.z = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        mixers.mixer1 = new AnimationMixer(obj)
        
	      
        gltf.animations.forEach(element => {
          mixers.mixer1.clipAction(element.optimize()).play();
        
      });
        scene.add(obj)

        // obj.traverse(function (child) {
        //   if (child.isMesh) {
        //     child.castShadow = true
        //     child.receiveShadow = true
        //     child.material.depthWrite = !child.material.transparent;
        //   }

        //   // if (child.isLight) {
        //   //   console.log(1);
        //   //   const l = child;
        //   //   l.castShadow = true;
        //   //   l.shadow.bias = -0.003;
        //   //   l.shadow.mapSize.width = 2048;
        //   //   l.shadow.mapSize.height = 2048;
       
        //   // }


        // })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
