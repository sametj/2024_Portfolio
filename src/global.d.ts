
declare module "*.glb" {

  const value: string;

  export default value;

}


declare module "*.gltf" {

  const value: string;

  export default value;

}




declare module "*.jsx" {

  import { MeshProps } from "@react-three/fiber";

  import { FC } from "react";



  const MyAvatar: FC<MeshProps & { position: [number, number, number]; scale: number }>;

  export default MyAvatar;

}
