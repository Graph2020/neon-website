import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FacebookModel(props) {
  const { nodes, materials } = useGLTF("/facebook_logo .glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["SVGMat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["SVGMat.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/facebook_logo .glb");
