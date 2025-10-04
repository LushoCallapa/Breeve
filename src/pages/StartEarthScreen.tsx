
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import EarthMaterial from "../components/EarthMaterial";
import AtmosphereMesh from "../components/AtmosphereMesh";
import Nebula from "../components/Nebula";
import Starfield from "../components/Starfield";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function Earth() {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });
  
  const axialTilt = (23.4 * Math.PI) / 180;
  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
      </mesh>
      <AtmosphereMesh />
    </group>
  );
}

const StartEarthScreen = () => {
  const { x, y, z } = sunDirection;
  return (
    <Canvas
      camera={{ position: [0, 0.1, 5] }}
      gl={{ toneMapping: THREE.NoToneMapping }}
    >
      <Earth />
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />
      <Nebula />
      <Starfield />
      <OrbitControls 
        minDistance={2.5}
        maxDistance={15}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  );
};

export default StartEarthScreen;
