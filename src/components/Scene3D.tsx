import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";

class SceneBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function DocumentCluster() {
  return (
    <Float speed={1.05} rotationIntensity={0.16} floatIntensity={0.28}>
      <group position={[0.15, 0, 0]}>
        <RoundedBox args={[1.65, 2.15, 0.045]} radius={0.02} smoothness={2} position={[-0.38, 0.05, -0.18]} rotation={[0.08, 0.38, 0.03]}>
          <meshStandardMaterial color="#1F3B5C" roughness={0.42} metalness={0.16} />
        </RoundedBox>
        <RoundedBox args={[1.5, 2, 0.04]} radius={0.02} smoothness={2} position={[0.18, -0.04, 0.12]} rotation={[-0.05, -0.18, 0.02]}>
          <meshStandardMaterial color="#E6E9EF" roughness={0.64} metalness={0.02} />
        </RoundedBox>
        <RoundedBox args={[1.05, 0.04, 0.68]} radius={0.012} smoothness={2} position={[0.02, -0.58, 0.38]} rotation={[0.2, 0.25, 0]}>
          <meshStandardMaterial color="#0B1F3A" roughness={0.38} metalness={0.2} />
        </RoundedBox>
      </group>
    </Float>
  );
}

export function Scene3D() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full" aria-hidden="true">
      <SceneBoundary>
        <Canvas
          camera={{ position: [0, 0.05, 4.5], fov: 34 }}
          dpr={[1, 1.35]}
          frameloop={visible ? "always" : "never"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 2.4, 4]} intensity={1.3} />
          <directionalLight position={[-2.5, -1, 2]} intensity={0.3} />
          <DocumentCluster />
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
