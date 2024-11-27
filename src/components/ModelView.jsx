import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";

const ModelView = ({index,groupRef,gsapType,size,contolRef,setRotationSize,item}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index===2}? 'right-[-100%]:''`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0,0,4]} />
      <Lights />
      <Suspense fallback={<div>Loading</div>}>
        <IPhone/>
      </Suspense>
    </View>
  )
}

export default ModelView
