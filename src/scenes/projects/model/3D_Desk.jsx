import { ProjectContext } from "@/App";
import {
  CameraControls,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import ProjectUi from "../ui/ProjectUi";
import desk from "./3D_Desk-transformed.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(desk);

  const { viewProject } = useContext(ProjectContext);

  const cameraRef = React.useRef();
  const screenRef = React.useRef();

  const handleMouseMove = ({ clientX, clientY }) => {
    const x = (clientX / window.innerWidth - 0.5) * 0.01;
    const y = (clientY / window.innerHeight - 0.5) * 0.01;

    cameraRef.current?.setPosition(
      cameraRef.current?._camera.position.x + x,
      cameraRef.current?._camera.position.y + y,
      cameraRef.current?._camera.position.z,
      true,
    );
  };

  useFrame(() => {
    cameraRef.current?.addEventListener("transitionstart", () => {
      window.removeEventListener("mousemove", handleMouseMove);
    });
    if (viewProject) {
      cameraRef.current?.fitToBox(screenRef.current, true, {
        paddingLeft: 0.2,
        paddingRight: 0.2,
        paddingBottom: 0.2,
        paddingTop: 0.2,
      });

      cameraRef.current?.addEventListener("rest", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
    } else {
      cameraRef.current?.reset(true);

      cameraRef.current?.addEventListener("rest", () => {
        window.addEventListener("mousemove", handleMouseMove);
      });
    }
  });

  // Prevents mouse interaction with the 3D model
  useEffect(() => {
    cameraRef.current.mouseButtons.wheel = 0;
    cameraRef.current.mouseButtons.left = 0;
    cameraRef.current.mouseButtons.right = 0;
    cameraRef.current.mouseButtons.middle = 0;
  }, []);

  return (
    <>
      <CameraControls minDistance={2} maxDistance={15} ref={cameraRef} />
      <PresentationControls />
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Desk"
            castShadow
            receiveShadow
            geometry={nodes.Desk.geometry}
            material={materials.PaletteMaterial001}
            position={[-2.075, 0, -0.664]}
          />
          <mesh
            name="Aluminium001"
            castShadow
            receiveShadow
            geometry={nodes.Aluminium001.geometry}
            material={nodes.Aluminium001.material}
            position={[-6.437, 3.92, 3.049]}
          />
          <mesh
            name="Aluminium003"
            castShadow
            receiveShadow
            geometry={nodes.Aluminium003.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.851, 3.969, -0.334]}
          />

          <mesh
            name="BatteryIndicator"
            castShadow
            receiveShadow
            geometry={nodes.BatteryIndicator.geometry}
            material={materials["Material.023"]}
            position={[-0.769, 4.102, -0.514]}
          />
          <mesh
            name="Buttons"
            castShadow
            receiveShadow
            geometry={nodes.Buttons.geometry}
            material={materials.PaletteMaterial001}
            position={[-1.028, 4.109, -0.499]}
          />

          <mesh
            name="Case"
            castShadow
            receiveShadow
            geometry={nodes.Case.geometry}
            material={materials.PaletteMaterial001}
            position={[-1.386, 4.001, -0.173]}
          />

          <mesh
            name="Case2"
            castShadow
            receiveShadow
            geometry={nodes.Case2.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.853, 3.908, 0.185]}
          />

          <mesh
            name="Case3"
            castShadow
            receiveShadow
            geometry={nodes.Case3.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.869, 3.956, -0.238]}
          />

          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.013"]}
            position={[-0.49, 4.089, -3.568]}
          />

          <mesh
            name="Desk_Lamp"
            castShadow
            receiveShadow
            geometry={nodes.Desk_Lamp.geometry}
            material={materials.PaletteMaterial001}
            position={[-7.409, 5.323, -2.112]}
          />
          <mesh
            name="Feet"
            castShadow
            receiveShadow
            geometry={nodes.Feet.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.856, 3.897, -0.539]}
          />

          <mesh
            name="Keycaps"
            castShadow
            receiveShadow
            geometry={nodes.Keycaps.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.935, 4.053, 0.233]}
          />

          <mesh
            name="LEDs"
            castShadow
            receiveShadow
            geometry={nodes.LEDs.geometry}
            material={materials.LEDs}
            position={[-0.952, 4.001, 0.189]}
          />

          <group name="Mouse_final" position={[2.192, 3.884, 0.23]}>
            <mesh
              name="Cube129"
              castShadow
              receiveShadow
              geometry={nodes.Cube128.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Plane005" position={[3.484, 5.536, -3.208]}>
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Plane006_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_2.geometry}
              material={materials["Screen.001"]}
            />
          </group>
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.PaletteMaterial001}
            position={[-3.318, 5.098, -3.351]}
          />
          <group name="Plane008" position={[-8.547, 5.536, 2.492]}>
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Plane009_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_1.geometry}
              material={materials.CurrentWork}
            />
          </group>

          <group name="Rubik_Cube001" position={[-8.573, 3.988, 2.679]}>
            <mesh
              name="Cube083"
              castShadow
              receiveShadow
              geometry={nodes.Cube083.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_1.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_2.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_3.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_4.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_5"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_5.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube083_6"
              castShadow
              receiveShadow
              geometry={nodes.Cube083_6.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group position={[-3.321, 6.138, -3.304]}>
            <mesh
              ref={screenRef}
              name="Screen"
              castShadow
              receiveShadow
              geometry={nodes.Screen.geometry}
              material={materials.PaletteMaterial001}
            />
            <Html center distanceFactor={2}>
              <ProjectUi />
            </Html>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload(desk);
