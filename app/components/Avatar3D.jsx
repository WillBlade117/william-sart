"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Avatar3D = () => {
  const avatarRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const { scene: avatarScene } = useGLTF("/avatar.glb");
  const { animations } = useGLTF("/animationsbis.glb");
  const mixer = useRef(new THREE.AnimationMixer(avatarScene));

  useEffect(() => {
    if (animations.length > 0) {
      const action = mixer.current.clipAction(animations[currentAnimation]);
      mixer.current.stopAllAction();
      action.play();
    }

    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentAnimation, animations]);

  useFrame((_, delta) => {
    mixer.current.update(delta);
  });

  avatarScene.position.set(0, -4, 0);

  return <primitive ref={avatarRef} object={avatarScene} scale={4.3} />;
};

const AvatarScene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 10], fov: 50 }}>
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
