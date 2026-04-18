import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NikeModel(props) {
  const { nodes, materials } = useGLTF("/nike_logo_white.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[7.621, 0, 513.12]}
          rotation={[Math.PI, 0, 0]}
          scale={100}
        >
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group rotation={[Math.PI, 0, 0]} scale={100}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[6.945, 0, 5.126]} scale={[1, 0.46, 1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24_lambert1_0_lambert1001_0.geometry}
                    material={materials["lambert1.001"]}
                    position={[-7.048, -0.001, 0]}
                    rotation={[Math.PI / 2, -0.218, 0]}
                    scale={[0.414, 0.238, 0.565]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/nike_logo_white.glb");
