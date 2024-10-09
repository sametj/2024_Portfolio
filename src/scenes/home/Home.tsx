import { Center, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Avatar from "./model/Avatar.jsx";

export default function Home() {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 2],
        fov: 15,
        near: 0.1,
        far: 1000,
      }}
    >
      {/* <OrbitControls /> */}
      {/* <MyAvatar position={[0, -1.5, 0]} scale={4} /> */}

      <Stage intensity={5}>
        <Center position={[0, 0, 6]}>
          <Avatar position={[0, 0, 8]} />
        </Center>
      </Stage>
    </Canvas>
  );
}
