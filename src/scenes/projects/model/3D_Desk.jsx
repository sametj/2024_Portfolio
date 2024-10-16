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
          <group name="Aluminium" position={[-1.163, 4.084, -0.446]}>
            <mesh
              name="Plane020"
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials["Stainless Steel"]}
            />
            <mesh
              name="Plane020_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane020_1.geometry}
              material={materials["Stainless Steel"]}
            />
          </group>
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
          <group name="Base" position={[-6.216, 3.876, 0.478]}>
            <mesh
              name="Cube130"
              castShadow
              receiveShadow
              geometry={nodes.Cube130.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube130_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube130_1.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <mesh
            name="Battery"
            castShadow
            receiveShadow
            geometry={nodes.Battery.geometry}
            material={materials["Material.023"]}
            position={[-6.563, 4.013, 2.991]}
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
            name="Buttons001"
            castShadow
            receiveShadow
            geometry={nodes.Buttons001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.553, 4.019, 3.173]}
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
            name="Case001"
            castShadow
            receiveShadow
            geometry={nodes.Case001.geometry}
            material={nodes.Case001.material}
            position={[-6.325, 3.942, 3.425]}
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
            name="Case2001"
            castShadow
            receiveShadow
            geometry={nodes.Case2001.geometry}
            material={nodes.Case2001.material}
            position={[-6.072, 3.876, 3.052]}
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
            name="Case3001"
            castShadow
            receiveShadow
            geometry={nodes.Case3001.geometry}
            material={nodes.Case3001.material}
            position={[-6.37, 3.91, 3.062]}
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
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.491, 4.088, -3.568]}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.PaletteMaterial002}
            position={[-0.49, 4.077, -3.569]}
          />
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.49, 3.928, -3.568]}
          />
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.49, 3.801, -3.568]}
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
            name="feet"
            castShadow
            receiveShadow
            geometry={nodes.feet.geometry}
            material={materials.PaletteMaterial001}
            position={[2.185, 3.804, 0.255]}
          />
          <mesh
            name="Feet001"
            castShadow
            receiveShadow
            geometry={nodes.Feet001.geometry}
            material={nodes.Feet001.material}
            position={[-6.581, 3.87, 3.052]}
          />
          <mesh
            name="Feet2"
            castShadow
            receiveShadow
            geometry={nodes.Feet2.geometry}
            material={nodes.Feet2.material}
            position={[-0.854, 3.991, -0.46]}
          />
          <mesh
            name="Feet2001"
            castShadow
            receiveShadow
            geometry={nodes.Feet2001.geometry}
            material={nodes.Feet2001.material}
            position={[-6.526, 3.935, 3.051]}
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
            name="Keycaps001"
            castShadow
            receiveShadow
            geometry={nodes.Keycaps001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.039, 3.978, 3.11]}
          />
          <mesh
            name="LEDs"
            castShadow
            receiveShadow
            geometry={nodes.LEDs.geometry}
            material={materials.LEDs}
            position={[-0.952, 4.001, 0.189]}
          />
          <mesh
            name="LEDs001"
            castShadow
            receiveShadow
            geometry={nodes.LEDs001.geometry}
            material={materials["LEDs.001"]}
            position={[-6.07, 3.942, 3.121]}
          />
          <mesh
            name="Lightspeed"
            castShadow
            receiveShadow
            geometry={nodes.Lightspeed.geometry}
            material={materials.PaletteMaterial001}
            position={[-1.222, 4.091, -0.479]}
          />
          <mesh
            name="Lightspeed001"
            castShadow
            receiveShadow
            geometry={nodes.Lightspeed001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.54, 4.006, 3.309]}
          />
          <mesh
            name="Logo"
            castShadow
            receiveShadow
            geometry={nodes.Logo.geometry}
            material={materials.PaletteMaterial001}
            position={[-2.607, 4.093, -0.478]}
          />
          <mesh
            name="Logo001"
            castShadow
            receiveShadow
            geometry={nodes.Logo001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.543, 4.007, 4.283]}
          />
          <group name="Mouse_final" position={[2.192, 3.884, 0.23]}>
            <mesh
              name="Cube128"
              castShadow
              receiveShadow
              geometry={nodes.Cube128.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Cube128_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube128_1.geometry}
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
          <mesh
            name="RubberFeet"
            castShadow
            receiveShadow
            geometry={nodes.RubberFeet.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.854, 3.882, -0.175]}
          />
          <mesh
            name="RubberFeet001"
            castShadow
            receiveShadow
            geometry={nodes.RubberFeet001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.325, 3.858, 3.052]}
          />
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
          <mesh
            name="Screws"
            castShadow
            receiveShadow
            geometry={nodes.Screws.geometry}
            material={materials["Stainless Steel"]}
            position={[-0.854, 3.934, 0.034]}
          />
          <mesh
            name="Screws001"
            castShadow
            receiveShadow
            geometry={nodes.Screws001.geometry}
            material={materials["Stainless Steel"]}
            position={[-6.178, 3.895, 3.053]}
          />
          <mesh
            name="Stabillizers"
            castShadow
            receiveShadow
            geometry={nodes.Stabillizers.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.899, 3.954, 0.554]}
          />
          <mesh
            name="Stabillizers001"
            castShadow
            receiveShadow
            geometry={nodes.Stabillizers001.geometry}
            material={materials.PaletteMaterial001}
            position={[-5.813, 3.908, 3.085]}
          />
          <mesh
            name="Sticker"
            castShadow
            receiveShadow
            geometry={nodes.Sticker.geometry}
            material={materials.Sticker}
            position={[-0.603, 3.959, -0.389]}
          />
          <mesh
            name="Sticker001"
            castShadow
            receiveShadow
            geometry={nodes.Sticker001.geometry}
            material={materials.Sticker}
            position={[-6.475, 3.913, 2.875]}
          />
          <mesh
            name="Switch"
            castShadow
            receiveShadow
            geometry={nodes.Switch.geometry}
            material={materials.Sticker}
            position={[-0.934, 4.032, 0.243]}
          />
          <mesh
            name="Switch001"
            castShadow
            receiveShadow
            geometry={nodes.Switch001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.032, 3.963, 3.109]}
          />
          <mesh
            name="SwitchBase"
            castShadow
            receiveShadow
            geometry={nodes.SwitchBase.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.934, 4.015, 0.233]}
          />
          <mesh
            name="SwitchBase001"
            castShadow
            receiveShadow
            geometry={nodes.SwitchBase001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.039, 3.951, 3.109]}
          />
          <mesh
            name="SwitchBottom"
            castShadow
            receiveShadow
            geometry={nodes.SwitchBottom.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.934, 3.994, 0.226]}
          />
          <mesh
            name="SwitchBottom001"
            castShadow
            receiveShadow
            geometry={nodes.SwitchBottom001.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.043, 3.936, 3.109]}
          />
          <mesh
            name="Top"
            castShadow
            receiveShadow
            geometry={nodes.Top.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.278, 4.019, 0.476]}
          />
          <mesh
            name="USB"
            castShadow
            receiveShadow
            geometry={nodes.USB.geometry}
            material={materials["Stainless Steel"]}
            position={[-1.862, 4.055, -0.573]}
          />
          <mesh
            name="USB001"
            castShadow
            receiveShadow
            geometry={nodes.USB001.geometry}
            material={materials["Stainless Steel"]}
            position={[-6.608, 3.981, 3.759]}
          />
          <mesh
            name="VolumeWheel"
            castShadow
            receiveShadow
            geometry={nodes.VolumeWheel.geometry}
            material={materials["Stainless Steel"]}
            position={[0.668, 4.083, -0.572]}
          />
          <mesh
            name="VolumeWheel001"
            castShadow
            receiveShadow
            geometry={nodes.VolumeWheel001.geometry}
            material={materials["Stainless Steel"]}
            position={[-6.6, 4, 1.981]}
          />
          <mesh
            name="VolumeWheelFrame"
            castShadow
            receiveShadow
            geometry={nodes.VolumeWheelFrame.geometry}
            material={materials.PaletteMaterial001}
            position={[0.668, 4.085, -0.519]}
          />
          <mesh
            name="VolumeWheelFrame001"
            castShadow
            receiveShadow
            geometry={nodes.VolumeWheelFrame001.geometry}
            material={nodes.VolumeWheelFrame001.material}
            position={[-6.562, 4.002, 1.981]}
          />
          <group name="wheel" position={[2.213, 3.919, 0.081]}>
            <mesh
              name="Cylinder019"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder019.geometry}
              material={materials.PaletteMaterial003}
            />
            <mesh
              name="Cylinder019_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder019_1.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <mesh
            name="Wheel"
            castShadow
            receiveShadow
            geometry={nodes.Wheel.geometry}
            material={materials.PaletteMaterial001}
            position={[-6.486, 3.985, 0.471]}
          />
          <group
            name="White_G915_keyboard001"
            position={[-6.516, 4.001, 3.268]}
          >
            <mesh
              name="Plane025"
              castShadow
              receiveShadow
              geometry={nodes.Plane025.geometry}
              material={materials["Stainless Steel"]}
            />
            <mesh
              name="Plane025_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane025_1.geometry}
              material={materials["Stainless Steel"]}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload(desk);
