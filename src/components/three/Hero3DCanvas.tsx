import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function ScrollControlledShoe() {
  const { scene } = useGLTF('/models/shoe.glb');
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetRotationY = (scrollY * 0.003) + (state.clock.getElapsedTime() * 0.15);
      const targetRotationX = Math.sin(scrollY * 0.001) * 0.2;

      // Smooth interpolation for buttery rotation scrub
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.08);
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={2.0} position={[0, -0.2, 0]} rotation={[0.15, 0.4, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function ProceduralShoe() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scrollY = window.scrollY || window.pageYOffset;
      meshRef.current.rotation.y = (scrollY * 0.003) + (state.clock.getElapsedTime() * 0.2);
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.1, 0]} scale={1.2}>
      <mesh position={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[2.8, 0.3, 1.1]} />
        <meshStandardMaterial color="#171717" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, -0.38, 0]} castShadow>
        <boxGeometry args={[2.9, 0.15, 1.15]} />
        <meshStandardMaterial color="#ff2a2a" roughness={0.3} />
      </mesh>
      <mesh position={[-0.2, 0.2, 0]} castShadow>
        <boxGeometry args={[1.8, 0.6, 1.0]} />
        <meshStandardMaterial color="#262626" roughness={0.4} />
      </mesh>
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
        camera={{ position: [0, 0.8, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 12, 8]} intensity={2.0} castShadow />
        <directionalLight position={[-10, -8, -5]} intensity={0.6} />
        <spotLight position={[0, 8, 2]} intensity={1.5} angle={0.6} penumbra={1} />

        <Float speed={2.0} rotationIntensity={0.25} floatIntensity={0.5}>
          <Suspense fallback={<ProceduralShoe />}>
            <ScrollControlledShoe />
          </Suspense>
        </Float>

        <ContactShadows position={[0, -1.2, 0]} opacity={0.65} scale={8} blur={2.5} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 3} />
      </Canvas>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-neutral-300 border border-white/10 pointer-events-none uppercase">
        Drag to Rotate / Scroll to Scrub
      </div>
    </div>
  );
};

useGLTF.preload('/models/shoe.glb');
