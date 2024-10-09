import { useGLTF } from "@react-three/drei";
import avatar from "./Avatar.glb";

export default function Avatar() {
  const model = useGLTF(avatar);
  return <primitive object={model.scene} />;
}
