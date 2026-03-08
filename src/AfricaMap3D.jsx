'use client';

import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { createAfricaMapTexture } from './africaMapTexture.js';

function MapScene() {
  const texture = useMemo(() => createAfricaMapTexture(1400), []);

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2.1, 2.3, 1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function AfricaMap3D() {
  return (
    <div className="africa-map-shell" aria-hidden="true">
      <Canvas
        className="africa-map-canvas"
        camera={{ position: [0, 0, 3.1], fov: 34 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <MapScene />
      </Canvas>
    </div>
  );
}
