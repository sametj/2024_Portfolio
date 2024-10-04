import { Environment, Html, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Projects() {
  return (
    <Canvas
      className="rounded-lg shadow-2xl"
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0, 2, 15] }}
    >
      {/* <OrbitControls /> */}
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <mesh rotation={[0, -Math.PI / 1, 0]} position={[0, 1.5, 10]}>
          <boxGeometry args={[2, 3, 0.2]} />
          <meshNormalMaterial />
          <Html
            className="h-140 w-84 p-0"
            position={[1, 0.9, 0.1]}
            rotation-y={-Math.PI}
            transform
            scale={0.5}
          >
            <div className="flex h-280 w-168 origin-top-left flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-2xl">
              <img src="https://placehold.co/600x400.png" alt="Test Image" />
              <div>
                <h1 className="text-2xl font-bold text-white">Project Title</h1>
                <p className="text-white">Project Description</p>
              </div>
              <div className="flex justify-between gap-10">
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
                  View Project
                </button>
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
                  GitHub
                </button>
              </div>
            </div>
          </Html>
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset="city" />
    </Canvas>
  );
}
