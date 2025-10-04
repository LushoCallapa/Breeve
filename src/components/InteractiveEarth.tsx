import React, { useRef, useState, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./AtmosphereMesh";

function InteractiveEarth({ sunDirection, onLocationClick }) {
  const meshRef = useRef();
  const groupRef = useRef();
  const { camera, raycaster, mouse, gl } = useThree();
  const [targetRotation, setTargetRotation] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animación suave de rotación
  const { rotation } = useSpring({
    rotation: targetRotation,
    config: { mass: 1, tension: 50, friction: 25 },
    onStart: () => setIsAnimating(true),
    onRest: () => setIsAnimating(false)
  });

  // Convertir coordenadas UV a latitud/longitud
  const uvToLatLon = useCallback((uv) => {
    const lat = (0.5 - uv.y) * 180; // -90 a 90
    const lon = (uv.x - 0.5) * 360; // -180 a 180
    return { lat, lon };
  }, []);

  // Convertir lat/lon a rotación de la Tierra
  const latLonToRotation = useCallback((lat, lon) => {
    const axialTilt = (23.4 * Math.PI) / 180;
    return [
      0, // X rotation mantiene la inclinación axial
      -lon * (Math.PI / 180), // Y rotation para longitud
      axialTilt // Z rotation para inclinación axial
    ];
  }, []);

  // Obtener nombre de ubicación basado en coordenadas (simplificado)
  const getLocationName = useCallback((lat, lon) => {
    // Aquí podrías integrar con una API de geocoding
    // Por ahora, retornamos coordenadas aproximadas
    if (lat > 40 && lat < 50 && lon > -10 && lon < 5) return "Europa Occidental";
    if (lat > 25 && lat < 50 && lon > -130 && lon < -60) return "América del Norte";
    if (lat > -35 && lat < 35 && lon > -90 && lon < -30) return "América del Sur";
    if (lat > -35 && lat < 70 && lon > -10 && lon < 50) return "África";
    if (lat > -50 && lat < 80 && lon > 50 && lon < 180) return "Asia";
    if (lat > -50 && lat < -10 && lon > 110 && lon < 180) return "Australia";
    return `Lat: ${lat.toFixed(1)}°, Lon: ${lon.toFixed(1)}°`;
  }, []);

  // Manejar clicks en la Tierra
  const handleClick = useCallback((event) => {
    event.stopPropagation();
    
    if (isAnimating) return; // Evitar clicks durante animación

    // Configurar raycaster
    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    // Verificar intersección con la Tierra
    const intersects = raycaster.intersectObject(meshRef.current);
    
    if (intersects.length > 0) {
      const intersection = intersects[0];
      const uv = intersection.uv;
      
      if (uv) {
        const { lat, lon } = uvToLatLon(uv);
        const locationName = getLocationName(lat, lon);
        
        // Animar hacia la nueva ubicación
        const newRotation = latLonToRotation(lat, lon);
        setTargetRotation(newRotation);
        
        // Llamar callback con información de la ubicación
        if (onLocationClick) {
          onLocationClick({
            lat,
            lon,
            name: locationName,
            uv,
            worldPosition: intersection.point
          });
        }
        
        console.log(`Clicked on: ${locationName} (${lat.toFixed(2)}°, ${lon.toFixed(2)}°)`);
      }
    }
  }, [camera, raycaster, mouse, gl, uvToLatLon, latLonToRotation, getLocationName, onLocationClick, isAnimating]);

  // Rotación automática cuando no está siendo controlada
  useFrame(() => {
    if (meshRef.current && !isAnimating) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <animated.group 
      ref={groupRef}
      rotation-z={axialTilt}
      rotation-x={rotation.rotation[0]}
      rotation-y={rotation.rotation[1]}
    >
      <mesh 
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => (gl.domElement.style.cursor = 'pointer')}
        onPointerOut={() => (gl.domElement.style.cursor = 'default')}
      >
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
      </mesh>
      <AtmosphereMesh />
    </animated.group>
  );
}

export default InteractiveEarth;