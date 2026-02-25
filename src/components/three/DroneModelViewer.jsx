import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows } from "@react-three/drei";
import { T } from "../../config/tokens";

function Rotor({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 12;
  });
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 8]} />
        <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
      </mesh>
      <group ref={ref} position={[0, 0.06, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[0, (i * Math.PI * 2) / 3, 0]} position={[0.2, 0, 0]}>
            <boxGeometry args={[0.4, 0.008, 0.06]} />
            <meshStandardMaterial color={T.green} transparent opacity={0.6} metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
      </group>
      <mesh position={[0, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.35, 0.015, 8, 32]} />
        <meshStandardMaterial color={T.green} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function DroneModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group scale={1.8}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.35]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Camera dome */}
        <mesh position={[0, -0.12, 0.05]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#333" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* LED strip */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.48, 0.02, 0.02]} />
          <meshStandardMaterial color={T.green} emissive={T.green} emissiveIntensity={2} />
        </mesh>
        {/* Arms */}
        {[
          [-0.45, 0, -0.35], [0.45, 0, -0.35],
          [-0.45, 0, 0.35], [0.45, 0, 0.35],
        ].map((pos, i) => (
          <group key={i}>
            <mesh position={[(pos[0]) / 2, 0, (pos[2]) / 2]} rotation={[0, Math.atan2(pos[2], pos[0]), 0]}>
              <cylinderGeometry args={[0.025, 0.025, Math.sqrt(pos[0] ** 2 + pos[2] ** 2), 8]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
            </mesh>
            <Rotor position={pos} />
          </group>
        ))}
        {/* Landing gear */}
        {[-0.2, 0.2].map((x, i) => (
          <mesh key={`leg-${i}`} position={[x, -0.18, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.12, 8]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        ))}
        <mesh position={[0, -0.24, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.5, 8]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
    </Float>
  );
}

function Fallback() {
  return (
    <div style={{
      width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
      color: T.textDim, fontFamily: "'DM Sans', sans-serif",
    }}>
      Loading 3D Model...
    </div>
  );
}

export function DroneModelViewer() {
  return (
    <div style={{ width: "100%", height: "500px", borderRadius: 20, overflow: "hidden" }}>
      <Suspense fallback={<Fallback />}>
        <Canvas camera={{ position: [2, 1.5, 2], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.3} />
          <spotLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-3, 2, -3]} intensity={0.5} color={T.green} />
          <DroneModel />
          <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={5} blur={2} />
          <Environment preset="city" />
          <OrbitControls
            autoRotate autoRotateSpeed={1.5}
            enablePan={false} enableZoom={false}
            maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
