import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Declare Three.js types globally for react-three-fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      icosahedronGeometry: any;
      sphereGeometry: any;
      shaderMaterial: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      primitive: any;
      group: any;
      points: any;
      bufferGeometry: any;
      pointsMaterial: any;
      sprite: any;
      spriteMaterial: any;
      directionalLight: any;
      hemisphereLight: any;
    }
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
