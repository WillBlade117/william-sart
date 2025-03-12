"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

const Avatar3D = () => {
  const { scene } = useGLTF("/avatar2.glb");
  const avatarRef = useRef();

  useFrame(() => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.01;
    }
  });

  scene.position.set(0, -7, 0);

  return <primitive ref={avatarRef} object={scene} scale={6} />;
};

const AvatarScene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 10], fov: 50 }} className="">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Avatar3D />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AvatarScene;
