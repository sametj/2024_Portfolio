import { shaderMaterial, useGLTF } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";
import * as THREE from "three";
import fragment from "../shaders/fragment.glsl";
import vertex from "../shaders/vertex.glsl";
import Avatar from "./MyAvatar2.glb";

const materialParams = {};
materialParams.color = "yellow";

const CustomShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(materialParams.color),
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  },
  vertex,
  fragment,
);
extend({ CustomShaderMaterial });

export default function MyAvatar(props) {
  const { nodes, materials } = useGLTF(Avatar);
  const customShaderMaterial = useRef();
  useControls({
    color: {
      value: materialParams.color,
      onChange: (value) => {
        customShaderMaterial.current.uniforms.uColor.value = new THREE.Color(
          value,
        );
      },
    },
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    customShaderMaterial.current.uniforms.uTime.value = elapsedTime;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Top001.geometry}
        material={nodes.Wolf3D_Outfit_Top001.material}
      >
        <customShaderMaterial ref={customShaderMaterial} />
      </mesh>
    </group>
  );
}

useGLTF.preload(Avatar);
