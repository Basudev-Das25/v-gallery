import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function GalleryRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#444444" />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 1, -10]}>
        <planeGeometry args={[20, 6]} />
        <meshBasicMaterial color="#666666" />
      </mesh>
      
      {/* Left Wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 1, 0]}>
        <planeGeometry args={[20, 6]} />
        <meshBasicMaterial color="#666666" />
      </mesh>
      
      {/* Right Wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 1, 0]}>
        <planeGeometry args={[20, 6]} />
        <meshBasicMaterial color="#666666" />
      </mesh>
    </group>
  );
}

export default function GalleryScene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <GalleryRoom />
        <OrbitControls />
      </Canvas>
    </div>
  );
}