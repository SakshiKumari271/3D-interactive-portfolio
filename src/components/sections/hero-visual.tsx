"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const HeroVisual = () => {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            {/* A floating 3D "Brain" or "Core" to represent your AI/Logic skills */}
            <Sphere args={[1, 100, 200]} scale={1.4}>
              <MeshDistortMaterial
                color="#2563eb"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HeroVisual;