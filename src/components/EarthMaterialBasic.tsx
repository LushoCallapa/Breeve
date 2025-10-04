import React from "react";
import * as THREE from "three";

function EarthMaterialBasic() {
  // Material básico con colores similares a la Tierra mientras conseguimos las texturas
  return (
    <meshStandardMaterial 
      color="#4a90e2"
      roughness={0.8}
      metalness={0.1}
    />
  );
}

export default EarthMaterialBasic;