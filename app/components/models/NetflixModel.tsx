import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";

export function NetflixModel(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/netflix_symbol.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve_SVGMat374_0 as THREE.Mesh).geometry}
          material={materials["SVGMat.374"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve002_SVGMat373_0 as THREE.Mesh).geometry}
          material={materials["SVGMat.373"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve003_SVGMat373_0 as THREE.Mesh).geometry}
          material={materials["SVGMat.373"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/netflix_symbol.glb");
