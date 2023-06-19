import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import imagen from '../../assets/land_shallow_topo_2048.jpg'

const RotatingSphere = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const mapTexture = useLoader(TextureLoader, imagen);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[3, 100, 100]} />
      <meshStandardMaterial map={mapTexture} />
    </mesh>
  );
};


const PlanetAnimation = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingSphere />
    </Canvas>
  );
};

export default PlanetAnimation;
