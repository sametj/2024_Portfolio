import { Center, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NewRoom from "./models/NewRoom.jsx";

export default function Projects() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Stage>
        <Center>
          <NewRoom />
        </Center>
      </Stage>
    </Canvas>
  );
}
