import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NewAvatar from "./model/NewAvatar.jsx";

export default function Home() {
  return (
    <>
      <div className="absolute bottom-0 left-0 flex h-200 w-full flex-col justify-center bg-gradient-to-b from-transparent to-[#000000ec] p-8">
        <h1 className="text-3xl font-bold">Hello!</h1>
        <p className="text-lg">I'm TJ / Moses, welcome to my portfolio!</p>
      </div>
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 15,
          near: 0.1,
          far: 1000,
        }}
      >
        <Stage intensity={5}>
          <NewAvatar position={[0, 0, 4]} />
        </Stage>
      </Canvas>
    </>
  );
}
