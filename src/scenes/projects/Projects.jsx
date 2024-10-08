import { ProjectContext } from "@/App";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import Desk from "./model/3D_Desk";

export default function Projects() {
  const { setViewProject } = useContext(ProjectContext);

  return (
    <>
      <button
        onClick={() => setViewProject((state) => !state)}
        className="absolute z-10 mx-auto w-100 bg-red-200 p-8"
      >
        Test
      </button>
      <Canvas
        className="rounded-lg shadow-2xl"
        dpr={[1, 1.5]}
        camera={{ fov: 70, position: [0, 2, 15] }}
      >
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <ambientLight intensity={0.5} />
          <Desk
            scale={0.3}
            rotation-y={-Math.PI / 2}
            position={[-1.6, -0.02, 10.5]}
          />
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
        <Environment preset="warehouse" />
      </Canvas>
    </>
  );
}
