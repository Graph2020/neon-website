import React from "react";
import { ModelsType } from "../types/type";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, Float, OrbitControls } from "@react-three/drei";

type withoutId = Omit<ModelsType, "id">;

export default function ThreeModelsHate({
  companyName,
  hateReason,
  model,
  scale,
}: withoutId) {
  const Model = model;
  return (
    <div className="model-wrapper w-full md:w-auto md:flex-1">
      <h3 className="text-xl">{companyName}</h3>

      <div className="relative h-50 w-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={1} />

          <React.Suspense fallback={null}>
            <Environment preset="city" />
            <Float speed={5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Center position={[0, 0, 0]}>
                <Model scale={scale} />
              </Center>
            </Float>
          </React.Suspense>

          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
          />
        </Canvas>
      </div>
      <p>{hateReason}</p>
    </div>
  );
}
