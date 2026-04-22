import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";

export function CrystalSword(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/crystal_sword.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_2 as THREE.Mesh).geometry}
        material={materials.Blue_Sword_Zbrush_defaultMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/crystal_sword.glb");
