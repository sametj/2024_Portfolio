import { ProjectContext } from "@/App";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import Desk from "./model/3D_Desk";

export default function Projects() {
  const { viewProject, setViewProject } = useContext(ProjectContext);

  return (
    <>
      <div className="absolute inset-x-0 bottom-0 z-10 flex w-full justify-center p-40">
        <button
          onClick={() => setViewProject((state) => !state)}
          className="w-200 select-none rounded-lg border-2 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 text-lg font-bold text-white transition-all duration-300 hover:bg-[var(--box-border-color)] hover:text-[var(--box-bg)]"
        >
          {viewProject ? "Close" : "View Projects"}
        </button>
      </div>
      <Canvas
        className="project_canvas rounded-lg shadow-2xl"
        dpr={[1, 1.5]}
        camera={{ fov: 70, position: [0, 2, 15] }}
      >
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Desk scale={0.3} position={[0.6, 0.73, 10.5]} />
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
