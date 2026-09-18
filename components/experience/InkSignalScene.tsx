"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { useEffect, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

type SceneProps = {
  progressRef: MutableRefObject<number>;
  reducedMotion: boolean;
  highQuality: boolean;
  active: boolean;
};

function useSignalGeometry() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.08, -0.24);
    shape.lineTo(0.08, -0.24);
    shape.lineTo(0.08, -0.62);
    shape.lineTo(1.12, 0);
    shape.lineTo(0.08, 0.62);
    shape.lineTo(0.08, 0.24);
    shape.lineTo(-1.08, 0.24);
    shape.closePath();

    const next = new THREE.ExtrudeGeometry(shape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.045,
      bevelThickness: 0.055,
    });
    next.center();
    return next;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return geometry;
}

function SignalCore({
  progressRef,
  reducedMotion,
}: Pick<SceneProps, "progressRef" | "reducedMotion">) {
  const group = useRef<THREE.Group>(null);
  const geometry = useSignalGeometry();

  useFrame((state, delta) => {
    if (!group.current) return;

    const p = progressRef.current;
    const targetRotation = reducedMotion
      ? 0.22
      : 0.22 + Math.sin(state.clock.elapsedTime * 0.36) * 0.06 + p * 0.34;

    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      targetRotation,
      1.8,
      delta,
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      p * -0.28,
      1.8,
      delta,
    );

    const targetScale = 1 + Math.min(p, 0.34) * 0.18;
    easing.damp3(
      group.current.scale,
      [targetScale, targetScale, targetScale],
      1.7,
      delta,
    );
  });

  return (
    <group ref={group} rotation={[0.18, -0.1, 0.22]}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#DE2727"
          metalness={0.3}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {[
        [-0.85, -0.44, -0.02, 0.7],
        [-0.58, -0.62, 0.02, 0.52],
        [-1.06, -0.74, -0.04, 0.38],
      ].map(([x, y, z, width], index) => (
        <mesh
          // deterministic static array
          key={index}
          position={[x, y, z]}
          rotation={[0, 0, -0.68]}
        >
          <boxGeometry args={[width, 0.075, 0.085]} />
          <meshStandardMaterial color="#DE2727" roughness={0.24} />
        </mesh>
      ))}
    </group>
  );
}

function InkMass({
  progressRef,
  reducedMotion,
}: Pick<SceneProps, "progressRef" | "reducedMotion">) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const p = progressRef.current;
    if (!reducedMotion) {
      ref.current.rotation.y = THREE.MathUtils.damp(
        ref.current.rotation.y,
        state.clock.elapsedTime * 0.12,
        2,
        delta,
      );
      ref.current.rotation.z = THREE.MathUtils.damp(
        ref.current.rotation.z,
        p * 0.28,
        2,
        delta,
      );
    }
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.15}
      floatIntensity={reducedMotion ? 0 : 0.18}
      rotationIntensity={reducedMotion ? 0 : 0.08}
    >
      <mesh ref={ref} position={[-0.62, -0.46, -0.62]} scale={[0.76, 0.96, 0.7]}>
        <icosahedronGeometry args={[0.72, 5]} />
        <meshPhysicalMaterial
          color="#050505"
          metalness={0.12}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.06}
        />
      </mesh>
    </Float>
  );
}

function SignalRings() {
  return (
    <group rotation={[Math.PI / 2.7, 0, -0.18]}>
      {[1.55, 2.05, 2.55].map((radius, index) => (
        <mesh key={radius} scale={radius}>
          <torusGeometry args={[1, 0.006 + index * 0.002, 6, 180]} />
          <meshBasicMaterial
            color={index === 1 ? "#DE2727" : "#000000"}
            transparent
            opacity={index === 1 ? 0.26 : 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function SignalParticles({ highQuality }: { highQuality: boolean }) {
  const count = highQuality ? 72 : 32;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const points = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const theta = index * 2.399963229728653;
        const radius = 1.7 + (index % 11) * 0.085;
        const y = ((index % 9) - 4) * 0.18;
        return new THREE.Vector3(
          Math.cos(theta) * radius,
          y,
          Math.sin(theta) * radius * 0.72,
        );
      }),
    [count],
  );

  const instanced = useMemo(() => {
    const geometry = new THREE.SphereGeometry(1, 6, 6);
    const material = new THREE.MeshBasicMaterial({
      color: "#DE2727",
      transparent: true,
      opacity: 0.58,
    });
    const next = new THREE.InstancedMesh(geometry, material, count);
    next.frustumCulled = false;
    return next;
  }, [count]);

  useEffect(() => {
    points.forEach((point, index) => {
      dummy.position.copy(point);
      const scale = 0.024 + (index % 5) * 0.006;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      instanced.setMatrixAt(index, dummy.matrix);
    });
    instanced.instanceMatrix.needsUpdate = true;

    return () => {
      instanced.geometry.dispose();
      const material = instanced.material;
      if (Array.isArray(material)) {
        material.forEach((entry) => entry.dispose());
      } else {
        material.dispose();
      }
    };
  }, [dummy, instanced, points]);

  return <primitive object={instanced} />;
}

function CameraDirector({
  progressRef,
  reducedMotion,
}: Pick<SceneProps, "progressRef" | "reducedMotion">) {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const p = reducedMotion ? 0 : progressRef.current;
    const x = Math.sin(p * Math.PI * 1.2) * 0.34;
    const y = 0.14 - p * 0.22;
    const z = 5.35 - Math.min(p, 0.7) * 1.25;

    easing.damp3(camera.position, [x, y, z], 1.6, delta);
    camera.lookAt(0, -0.04, 0);
  });

  return null;
}

function Scene({
  progressRef,
  reducedMotion,
  highQuality,
}: SceneProps) {
  return (
    <>
      <color attach="background" args={["#FBF8EF"]} />
      <ambientLight intensity={1.3} />
      <directionalLight position={[3, 4, 5]} intensity={4.4} color="#fff9ef" />
      <pointLight position={[-3, -1, 3]} intensity={7} color="#DE2727" />
      <pointLight position={[2, -3, -1]} intensity={3.2} color="#2B3210" />

      <group position={[0.35, 0.08, 0]}>
        <SignalRings />
        <InkMass progressRef={progressRef} reducedMotion={reducedMotion} />
        <SignalCore progressRef={progressRef} reducedMotion={reducedMotion} />
        <SignalParticles highQuality={highQuality} />
      </group>

      <CameraDirector progressRef={progressRef} reducedMotion={reducedMotion} />

      {highQuality && !reducedMotion ? (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.34} luminanceThreshold={0.68} mipmapBlur />
          <Vignette eskil={false} offset={0.24} darkness={0.28} />
        </EffectComposer>
      ) : null}
    </>
  );
}

export function InkSignalScene(props: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.14, 5.35], fov: 42 }}
      dpr={[1, props.highQuality ? 1.7 : 1.25]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      frameloop={props.active && !props.reducedMotion ? "always" : "demand"}
      onCreated={({ gl }) => {
        gl.domElement.setAttribute("aria-hidden", "true");
        gl.domElement.setAttribute("role", "presentation");
      }}
    >
      <Scene {...props} />
    </Canvas>
  );
}
