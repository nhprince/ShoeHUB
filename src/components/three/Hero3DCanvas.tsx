import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function ShoeModel() {
  const { scene } = useGLTF('/models/shoe.glb');
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={1.8} position={[0, -0.3, 0]} rotation={[0.2, 0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Fallback procedural interactive 3D shoe sculpture if GLTF loading fails or is delayed
function ProceduralShoe() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.1, 0]}>
      {/* Upper Sole */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[2.8, 0.3, 1.1]} />
        <meshStandardMaterial color="#171717" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Midsole */}
      <mesh position={[0, -0.38, 0]} castShadow>
        <boxGeometry args={[2.9, 0.15, 1.15]} />
        <meshStandardMaterial color="#E63946" roughness={0.3} />
      </mesh>
      {/* Shoe Body Upper */}
      <mesh position={[-0.2, 0.2, 0]} castShadow>
        <boxGeometry args={[1.8, 0.6, 1.0]} />
        <meshStandardMaterial color="#262626" roughness={0.4} />
      </mesh>
      {/* Collar/Ankle */}
      <mesh position={[-0.5, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.5, 0.5, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>
    </group>
  );
}

export const Hero3DCanvas: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 1, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.6} penumbra={1} />

        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <Suspense fallback={<ProceduralShoe />}>
            <ShoeModel />
          </Suspense>
        </Float>

        <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={8} blur={2} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 3} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-neutral-400 border border-neutral-800 pointer-events-none">
        DRAG TO ROTATE 360°
      </div>
    </div>
  );
};

useGLTF.preload('/models/shoe.glb');
