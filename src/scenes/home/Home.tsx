import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyAvatar from "./model/MyAvatar.jsx";

export default function Home() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <Center>
        <MyAvatar position={[0, -1.5, 0]} scale={4} />
      </Center>
    </Canvas>
  );
}
