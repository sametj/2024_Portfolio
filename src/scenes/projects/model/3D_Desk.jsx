import { ProjectContext } from "@/App";
import {
  CameraControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import React, { useContext } from "react";
import { SkeletonUtils } from "three-stdlib";
import desk from "./3D_Desk.glb";

export default function Desk(props) {
  const { scene } = useGLTF(desk);
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { viewProject } = useContext(ProjectContext);
  const cameraRef = React.useRef();
  const screenRef = React.useRef();

  const handleMouseMove = async ({ clientX, clientY }) => {
    const x = (clientX / window.innerWidth - 0.5) * 0.01;
    const y = (clientY / window.innerHeight - 0.5) * 0.01;
    cameraRef.current?.setPosition(
      cameraRef.current?._camera.position.x + x,
      cameraRef.current?._camera.position.y - y,
      cameraRef.current?._camera.position.z,
    );
  };

  useFrame(() => {
    if (viewProject) {
      cameraRef.current?.fitToBox(screenRef.current, true, {
        paddingLeft: 0.2,
        paddingRight: 0.2,
        paddingBottom: 0.2,
        paddingTop: 0.2,
      });

      cameraRef.current.addEventListener("transitionstart", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      cameraRef.current.addEventListener("rest", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
    } else {
      cameraRef.current?.reset(true);
      cameraRef.current.addEventListener("transitionstart", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      cameraRef.current.addEventListener("rest", () => {
        window.addEventListener("mousemove", handleMouseMove);
      });
    }
  });

  return (
    <>
      <CameraControls ref={cameraRef} dolly={false} />
      <PresentationControls />
      <group {...props} dispose={null}>
        <group name="Scene">
          <group
            name="G915_keyboard"
            position={[2.215, 6.241, -5.845]}
            rotation={[-Math.PI, 1.567, -Math.PI]}
          >
            <group
              name="Aluminium"
              position={[0, 0.26, -1.54]}
              rotation={[0.147, 0, 0]}
            >
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
              <mesh
                name="Aluminium003"
                castShadow
                receiveShadow
                geometry={nodes.Aluminium003.geometry}
                material={materials.Plastic}
              />
              <mesh
                name="BatteryIndicator"
                castShadow
                receiveShadow
                geometry={nodes.BatteryIndicator.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Buttons"
                castShadow
                receiveShadow
                geometry={nodes.Buttons.geometry}
                material={materials.Keycaps}
              />
              <mesh
                name="Case"
                castShadow
                receiveShadow
                geometry={nodes.Case.geometry}
                material={materials.Plastic}
              />
              <mesh
                name="Case2"
                castShadow
                receiveShadow
                geometry={nodes.Case2.geometry}
                material={materials.Plastic}
              />
              <mesh
                name="Case3"
                castShadow
                receiveShadow
                geometry={nodes.Case3.geometry}
                material={materials.Plastic}
              />
              <mesh
                name="Feet"
                castShadow
                receiveShadow
                geometry={nodes.Feet.geometry}
                material={materials.Plastic}
              />
              <mesh
                name="Feet2"
                castShadow
                receiveShadow
                geometry={nodes.Feet2.geometry}
                material={nodes.Feet2.material}
              />
              <mesh
                name="Keycaps"
                castShadow
                receiveShadow
                geometry={nodes.Keycaps.geometry}
                material={materials.Keycaps}
              />
              <mesh
                name="LEDs"
                castShadow
                receiveShadow
                geometry={nodes.LEDs.geometry}
                material={materials.LEDs}
              />
              <mesh
                name="Lightspeed"
                castShadow
                receiveShadow
                geometry={nodes.Lightspeed.geometry}
                material={materials.Keycaps}
              />
              <mesh
                name="Logo"
                castShadow
                receiveShadow
                geometry={nodes.Logo.geometry}
                material={materials.logo}
              />
              <mesh
                name="RubberFeet"
                castShadow
                receiveShadow
                geometry={nodes.RubberFeet.geometry}
                material={materials.rubberfeet}
              />
              <mesh
                name="Screws"
                castShadow
                receiveShadow
                geometry={nodes.Screws.geometry}
                material={materials["Stainless Steel"]}
              />
              <mesh
                name="Stabillizers"
                castShadow
                receiveShadow
                geometry={nodes.Stabillizers.geometry}
                material={materials.switch_base}
              />
              <mesh
                name="Sticker"
                castShadow
                receiveShadow
                geometry={nodes.Sticker.geometry}
                material={materials.Sticker}
              />
              <mesh
                name="Switch"
                castShadow
                receiveShadow
                geometry={nodes.Switch.geometry}
                material={materials.Sticker}
              />
              <mesh
                name="SwitchBase"
                castShadow
                receiveShadow
                geometry={nodes.SwitchBase.geometry}
                material={materials["switch"]}
              />
              <mesh
                name="SwitchBottom"
                castShadow
                receiveShadow
                geometry={nodes.SwitchBottom.geometry}
                material={materials.switch_base}
              />
              <mesh
                name="USB"
                castShadow
                receiveShadow
                geometry={nodes.USB.geometry}
                material={materials["Stainless Steel"]}
              />
              <mesh
                name="VolumeWheel"
                castShadow
                receiveShadow
                geometry={nodes.VolumeWheel.geometry}
                material={materials["Stainless Steel"]}
              />
              <mesh
                name="VolumeWheelFrame"
                castShadow
                receiveShadow
                geometry={nodes.VolumeWheelFrame.geometry}
                material={materials.Plastic}
              />
            </group>
          </group>
          <group
            name="Rubik_cube"
            position={[3.993, 6.241, -0.058]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <group name="Rubik_Cube001">
              <mesh
                name="Cube083"
                castShadow
                receiveShadow
                geometry={nodes.Cube083.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                name="Cube083_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_1.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                name="Cube083_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_2.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                name="Cube083_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_3.geometry}
                material={materials["Material.007"]}
              />
              <mesh
                name="Cube083_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_4.geometry}
                material={materials["Material.008"]}
              />
              <mesh
                name="Cube083_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_5.geometry}
                material={materials["Material.009"]}
              />
              <mesh
                name="Cube083_6"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_6.geometry}
                material={materials["Material.010"]}
              />
            </group>
          </group>
          <group
            name="Speaker"
            position={[-2.254, 6.241, -8.141]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="Cylinder"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={materials["Material.013"]}
              position={[0, 0.151, 0]}
            />
            <mesh
              name="Cylinder001"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001.geometry}
              material={materials["Material.012"]}
              position={[0, 0.151, 0]}
            />
            <mesh
              name="Cylinder002"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={materials["Material.003"]}
              position={[0, 0.151, 0]}
            />
            <mesh
              name="Cylinder003"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials["Material.011"]}
              position={[0, 0.151, 0]}
            />
            <mesh
              name="Cylinder004"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004.geometry}
              material={materials["Material.002"]}
              position={[0, 0.151, 0]}
            />
          </group>
          <group
            name="Mouse"
            position={[1.594, 6.241, -10.844]}
            rotation={[-Math.PI, 1.541, -Math.PI]}
          >
            <mesh
              name="feet"
              castShadow
              receiveShadow
              geometry={nodes.feet.geometry}
              material={materials.glosyy}
            />
            <group name="Mouse_final">
              <mesh
                name="Cube128"
                castShadow
                receiveShadow
                geometry={nodes.Cube128.geometry}
                material={materials.matt}
              />
              <mesh
                name="Cube128_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube128_1.geometry}
                material={materials["matt bottom"]}
              />
            </group>
            <group name="wheel">
              <mesh
                name="Cylinder019"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder019.geometry}
                material={materials["matt wheel"]}
              />
              <mesh
                name="Cylinder019_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder019_1.geometry}
                material={materials.glosyy}
              />
            </group>
          </group>
          <group
            name="Wireless_Mouse"
            position={[1.792, 6.241, -2.426]}
            rotation={[0, -0.026, 0]}
          >
            <group name="Base" position={[0, 0.134, -0.004]}>
              <mesh
                name="Cube130"
                castShadow
                receiveShadow
                geometry={nodes.Cube130.geometry}
                material={materials["Mouse - Shiny Grey"]}
              />
              <mesh
                name="Cube130_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube130_1.geometry}
                material={materials["Mouse - Mat Grey"]}
              />
            </group>
            <mesh
              name="Top"
              castShadow
              receiveShadow
              geometry={nodes.Top.geometry}
              material={materials["Mouse - Mat Grey"]}
              position={[0, 0.215, 0.01]}
            />
            <mesh
              name="Wheel"
              castShadow
              receiveShadow
              geometry={nodes.Wheel.geometry}
              material={materials["Mouse - Wheel Grey"]}
              position={[0, 0.181, 0.271]}
              rotation={[1.875, 0, 0]}
            />
          </group>
          <group
            name="White_G915_keyboard"
            position={[5.727, 6.241, -3.047]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <group name="White_G915_keyboard001" position={[0, 0.185, -1.074]}>
              <mesh
                name="Plane025"
                castShadow
                receiveShadow
                geometry={nodes.Plane025.geometry}
                material={materials["Stainless Steel.001"]}
              />
              <mesh
                name="Plane025_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane025_1.geometry}
                material={materials["Stainless Steel.001"]}
              />
              <mesh
                name="Aluminium001"
                castShadow
                receiveShadow
                geometry={nodes.Aluminium001.geometry}
                material={nodes.Aluminium001.material}
              />
              <mesh
                name="Battery"
                castShadow
                receiveShadow
                geometry={nodes.Battery.geometry}
                material={materials["Material.023"]}
              />
              <mesh
                name="Buttons001"
                castShadow
                receiveShadow
                geometry={nodes.Buttons001.geometry}
                material={materials["Keycaps.001"]}
              />
              <mesh
                name="Case001"
                castShadow
                receiveShadow
                geometry={nodes.Case001.geometry}
                material={nodes.Case001.material}
              />
              <mesh
                name="Case2001"
                castShadow
                receiveShadow
                geometry={nodes.Case2001.geometry}
                material={nodes.Case2001.material}
              />
              <mesh
                name="Case3001"
                castShadow
                receiveShadow
                geometry={nodes.Case3001.geometry}
                material={nodes.Case3001.material}
              />
              <mesh
                name="Feet001"
                castShadow
                receiveShadow
                geometry={nodes.Feet001.geometry}
                material={nodes.Feet001.material}
              />
              <mesh
                name="Feet2001"
                castShadow
                receiveShadow
                geometry={nodes.Feet2001.geometry}
                material={nodes.Feet2001.material}
              />
              <mesh
                name="Keycaps001"
                castShadow
                receiveShadow
                geometry={nodes.Keycaps001.geometry}
                material={materials["Keycaps.001"]}
              />
              <mesh
                name="LEDs001"
                castShadow
                receiveShadow
                geometry={nodes.LEDs001.geometry}
                material={materials["LEDs.001"]}
              />
              <mesh
                name="Lightspeed001"
                castShadow
                receiveShadow
                geometry={nodes.Lightspeed001.geometry}
                material={materials["Keycaps.001"]}
              />
              <mesh
                name="Logo001"
                castShadow
                receiveShadow
                geometry={nodes.Logo001.geometry}
                material={materials["logo.001"]}
              />
              <mesh
                name="RubberFeet001"
                castShadow
                receiveShadow
                geometry={nodes.RubberFeet001.geometry}
                material={materials["rubberfeet.001"]}
              />
              <mesh
                name="Screws001"
                castShadow
                receiveShadow
                geometry={nodes.Screws001.geometry}
                material={materials["Stainless Steel.001"]}
              />
              <mesh
                name="Stabillizers001"
                castShadow
                receiveShadow
                geometry={nodes.Stabillizers001.geometry}
                material={materials["switch_base.001"]}
              />
              <mesh
                name="Sticker001"
                castShadow
                receiveShadow
                geometry={nodes.Sticker001.geometry}
                material={materials["Sticker.001"]}
              />
              <mesh
                name="Switch001"
                castShadow
                receiveShadow
                geometry={nodes.Switch001.geometry}
                material={materials["Material.022"]}
              />
              <mesh
                name="SwitchBase001"
                castShadow
                receiveShadow
                geometry={nodes.SwitchBase001.geometry}
                material={materials["switch.001"]}
              />
              <mesh
                name="SwitchBottom001"
                castShadow
                receiveShadow
                geometry={nodes.SwitchBottom001.geometry}
                material={materials["switch_base.001"]}
              />
              <mesh
                name="USB001"
                castShadow
                receiveShadow
                geometry={nodes.USB001.geometry}
                material={materials["Stainless Steel.001"]}
              />
              <mesh
                name="VolumeWheel001"
                castShadow
                receiveShadow
                geometry={nodes.VolumeWheel001.geometry}
                material={materials["Stainless Steel.001"]}
              />
              <mesh
                name="VolumeWheelFrame001"
                castShadow
                receiveShadow
                geometry={nodes.VolumeWheelFrame001.geometry}
                material={nodes.VolumeWheelFrame001.material}
              />
            </group>
          </group>
          <mesh
            name="Desk"
            castShadow
            receiveShadow
            geometry={nodes.Desk.geometry}
            material={materials.Desk}
            position={[0.451, 0, -14.28]}
          />
          <group
            name="Plane005"
            position={[-1.893, 8.363, -12.119]}
            rotation={[0, -0.122, -Math.PI / 2]}
          >
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.Monitors}
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
            material={materials.Monitors}
            position={[-2.081, 8.725, -5.31]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <group
            name="Plane008"
            position={[3.801, 8.363, -0.084]}
            rotation={[0, 1.53, -Math.PI / 2]}
          >
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.Monitors}
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
            name="Desk_Lamp"
            castShadow
            receiveShadow
            geometry={nodes.Desk_Lamp.geometry}
            material={materials.lampblack}
            position={[-1.044, 6.241, -0.837]}
            rotation={[-Math.PI, 0.57, -Math.PI]}
          >
            <group
              name="Empty"
              position={[0, -0.024, -0.012]}
              rotation={[0, 1.571, 0]}
            />
          </mesh>
          <group name="Body">
            <mesh
              name="Plane022"
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials["Black Plastic"]}
            />
            <mesh
              name="Plane022_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_1.geometry}
              material={materials.MarcaNegro}
            />
            <mesh
              name="Plane022_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_2.geometry}
              material={materials["Rough Plastic Shader"]}
            />
            <mesh
              name="Plane022_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_3.geometry}
              material={materials["Matte Paint"]}
            />
            <mesh
              name="Plane022_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_4.geometry}
              material={materials["Metal scratched"]}
            />
            <mesh
              name="Plane022_5"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_5.geometry}
              material={materials["Plastico General"]}
            />
            <group name="Paw_Bone" position={[0.147, 0.002, -0.043]}>
              <primitive object={nodes.Bone} />
              <skinnedMesh
                name="Paw"
                geometry={nodes.Paw.geometry}
                material={materials["Black Plastic"]}
                skeleton={nodes.Paw.skeleton}
              />
            </group>
            <mesh
              name="Battery_Cover"
              castShadow
              receiveShadow
              geometry={nodes.Battery_Cover.geometry}
              material={materials["Black Plastic"]}
              position={[0.187, 0.001, -0.043]}
            />
            <group
              name="QSPass"
              position={[-0.089, 0, -0.002]}
              rotation={[0, 0.015, 0]}
            >
              <mesh
                name="Circle"
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials.QSPass}
              />
              <mesh
                name="Circle_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={materials["Black Plastic"]}
              />
              <mesh
                name="Circle_2"
                castShadow
                receiveShadow
                geometry={nodes.Circle_2.geometry}
                material={materials.Etiqueta}
              />
            </group>
          </group>
          <mesh
            ref={screenRef}
            name="Screen"
            castShadow
            receiveShadow
            geometry={nodes.Screen.geometry}
            material={materials.Screen}
            position={[-2.063, 8.725, -5.31]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="NumpadIntro"
            castShadow
            receiveShadow
            geometry={nodes.NumpadIntro.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.NumpadIntro.morphTargetDictionary}
            morphTargetInfluences={nodes.NumpadIntro.morphTargetInfluences}
            position={[0.2, 0.008, 0.033]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="NumpadBloqNum"
            castShadow
            receiveShadow
            geometry={nodes.NumpadBloqNum.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.NumpadBloqNum.morphTargetDictionary}
            morphTargetInfluences={nodes.NumpadBloqNum.morphTargetInfluences}
            position={[0.148, 0.009, -0.029]}
          />
          <mesh
            name="Numpad9"
            castShadow
            receiveShadow
            geometry={nodes.Numpad9.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad9.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad9.morphTargetInfluences}
            position={[0.183, 0.009, -0.011]}
          />
          <mesh
            name="Numpad8"
            castShadow
            receiveShadow
            geometry={nodes.Numpad8.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad8.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad8.morphTargetInfluences}
            position={[0.165, 0.009, -0.011]}
          />
          <mesh
            name="Numpad7"
            castShadow
            receiveShadow
            geometry={nodes.Numpad7.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad7.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad7.morphTargetInfluences}
            position={[0.148, 0.009, -0.011]}
          />
          <mesh
            name="Numpad6"
            castShadow
            receiveShadow
            geometry={nodes.Numpad6.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad6.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad6.morphTargetInfluences}
            position={[0.183, 0.009, 0.007]}
          />
          <mesh
            name="Numpad5"
            castShadow
            receiveShadow
            geometry={nodes.Numpad5.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad5.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad5.morphTargetInfluences}
            position={[0.165, 0.009, 0.007]}
          />
          <mesh
            name="Numpad4"
            castShadow
            receiveShadow
            geometry={nodes.Numpad4.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad4.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad4.morphTargetInfluences}
            position={[0.148, 0.009, 0.007]}
          />
          <mesh
            name="Numpad3"
            castShadow
            receiveShadow
            geometry={nodes.Numpad3.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad3.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad3.morphTargetInfluences}
            position={[0.183, 0.009, 0.025]}
          />
          <mesh
            name="Numpad2"
            castShadow
            receiveShadow
            geometry={nodes.Numpad2.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad2.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad2.morphTargetInfluences}
            position={[0.165, 0.009, 0.025]}
          />
          <mesh
            name="Numpad1"
            castShadow
            receiveShadow
            geometry={nodes.Numpad1.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad1.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad1.morphTargetInfluences}
            position={[0.148, 0.009, 0.025]}
          />
          <mesh
            name="Numpad0"
            castShadow
            receiveShadow
            geometry={nodes.Numpad0.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad0.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad0.morphTargetInfluences}
            position={[0.156, 0.008, 0.042]}
          />
          <mesh
            name="Numpad"
            castShadow
            receiveShadow
            geometry={nodes.Numpad.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad.morphTargetInfluences}
            position={[0.165, 0.009, -0.029]}
          />
          <mesh
            name="Numpad_1"
            castShadow
            receiveShadow
            geometry={nodes.Numpad_1.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Numpad_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Numpad_1.morphTargetInfluences}
            position={[0.183, 0.008, 0.042]}
          />
          <mesh
            name="Numpad-"
            castShadow
            receiveShadow
            geometry={nodes["Numpad-"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Numpad-"].morphTargetDictionary}
            morphTargetInfluences={nodes["Numpad-"].morphTargetInfluences}
            position={[0.2, 0.009, -0.029]}
          />
          <mesh
            name="Numpad+"
            castShadow
            receiveShadow
            geometry={nodes["Numpad+"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Numpad+"].morphTargetDictionary}
            morphTargetInfluences={nodes["Numpad+"].morphTargetInfluences}
            position={[0.2, 0.008, -0.003]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="Numpad*"
            castShadow
            receiveShadow
            geometry={nodes["Numpad*"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Numpad*"].morphTargetDictionary}
            morphTargetInfluences={nodes["Numpad*"].morphTargetInfluences}
            position={[0.183, 0.009, -0.029]}
          />
          <mesh
            name="KeyÑ"
            castShadow
            receiveShadow
            geometry={nodes.KeyÑ.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyÑ.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyÑ.morphTargetInfluences}
            position={[-0.007, 0.009, 0.007]}
          />
          <mesh
            name="KeyÇ"
            castShadow
            receiveShadow
            geometry={nodes.KeyÇ.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyÇ.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyÇ.morphTargetInfluences}
            position={[0.028, 0.009, 0.007]}
          />
          <mesh
            name="Key¿"
            castShadow
            receiveShadow
            geometry={nodes["Key¿"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key¿"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key¿"].morphTargetInfluences}
            position={[0.02, 0.009, -0.03]}
          />
          <mesh
            name="Keyªº"
            castShadow
            receiveShadow
            geometry={nodes.Keyªº.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Keyªº.morphTargetDictionary}
            morphTargetInfluences={nodes.Keyªº.morphTargetInfluences}
            position={[-0.19, 0.009, -0.03]}
          />
          <mesh
            name="Key¨"
            castShadow
            receiveShadow
            geometry={nodes["Key¨"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key¨"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key¨"].morphTargetInfluences}
            position={[0.01, 0.009, 0.007]}
          />
          <mesh
            name="KeyZ"
            castShadow
            receiveShadow
            geometry={nodes.KeyZ.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyZ.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyZ.morphTargetInfluences}
            position={[-0.155, 0.009, 0.025]}
          />
          <mesh
            name="KeyY"
            castShadow
            receiveShadow
            geometry={nodes.KeyY.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyY.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyY.morphTargetInfluences}
            position={[-0.083, 0.009, -0.011]}
          />
          <mesh
            name="KeyX"
            castShadow
            receiveShadow
            geometry={nodes.KeyX.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyX.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyX.morphTargetInfluences}
            position={[-0.137, 0.009, 0.025]}
          />
          <mesh
            name="KeyW"
            castShadow
            receiveShadow
            geometry={nodes.KeyW.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyW.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyW.morphTargetInfluences}
            position={[-0.153, 0.009, -0.011]}
          />
          <mesh
            name="KeyVolumenUp"
            castShadow
            receiveShadow
            geometry={nodes.KeyVolumenUp.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyVolumenUp.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyVolumenUp.morphTargetInfluences}
            position={[0.12, 0.009, -0.045]}
          />
          <mesh
            name="KeyVolumenDown"
            castShadow
            receiveShadow
            geometry={nodes.KeyVolumenDown.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyVolumenDown.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyVolumenDown.morphTargetInfluences}
            position={[0.103, 0.009, -0.045]}
          />
          <mesh
            name="KeyV"
            castShadow
            receiveShadow
            geometry={nodes.KeyV.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyV.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyV.morphTargetInfluences}
            position={[-0.102, 0.009, 0.025]}
          />
          <mesh
            name="KeyUp"
            castShadow
            receiveShadow
            geometry={nodes.KeyUp.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyUp.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyUp.morphTargetInfluences}
            position={[0.103, 0.008, 0.025]}
          />
          <mesh
            name="KeyU"
            castShadow
            receiveShadow
            geometry={nodes.KeyU.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyU.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyU.morphTargetInfluences}
            position={[-0.065, 0.009, -0.011]}
          />
          <mesh
            name="KeyTab"
            castShadow
            receiveShadow
            geometry={nodes.KeyTab.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyTab.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyTab.morphTargetInfluences}
            position={[-0.189, 0.009, -0.011]}
          />
          <mesh
            name="KeyT"
            castShadow
            receiveShadow
            geometry={nodes.KeyT.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyT.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyT.morphTargetInfluences}
            position={[-0.1, 0.009, -0.011]}
          />
          <mesh
            name="KeySupr"
            castShadow
            receiveShadow
            geometry={nodes.KeySupr.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeySupr.morphTargetDictionary}
            morphTargetInfluences={nodes.KeySupr.morphTargetInfluences}
            position={[0.085, 0.009, -0.012]}
          />
          <mesh
            name="KeySpace"
            castShadow
            receiveShadow
            geometry={nodes.KeySpace.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeySpace.morphTargetDictionary}
            morphTargetInfluences={nodes.KeySpace.morphTargetInfluences}
            position={[-0.113, 0.008, 0.043]}
          />
          <mesh
            name="KeyS"
            castShadow
            receiveShadow
            geometry={nodes.KeyS.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyS.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyS.morphTargetInfluences}
            position={[-0.147, 0.009, 0.007]}
          />
          <mesh
            name="KeyRWin"
            castShadow
            receiveShadow
            geometry={nodes.KeyRWin.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRWin.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRWin.morphTargetInfluences}
            position={[0.015, 0.009, 0.043]}
          />
          <mesh
            name="KeyRShift"
            castShadow
            receiveShadow
            geometry={nodes.KeyRShift.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRShift.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRShift.morphTargetInfluences}
            position={[0.039, 0.008, 0.024]}
          />
          <mesh
            name="KeyRight"
            castShadow
            receiveShadow
            geometry={nodes.KeyRight.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRight.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRight.morphTargetInfluences}
            position={[0.12, 0.009, 0.043]}
          />
          <mesh
            name="KeyRePag"
            castShadow
            receiveShadow
            geometry={nodes.KeyRePag.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRePag.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRePag.morphTargetInfluences}
            position={[0.12, 0.009, -0.03]}
          />
          <mesh
            name="KeyRCtrl"
            castShadow
            receiveShadow
            geometry={nodes.KeyRCtrl.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRCtrl.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRCtrl.morphTargetInfluences}
            position={[0.054, 0.009, 0.043]}
          />
          <mesh
            name="KeyRAlt"
            castShadow
            receiveShadow
            geometry={nodes.KeyRAlt.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyRAlt.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyRAlt.morphTargetInfluences}
            position={[-0.005, 0.009, 0.043]}
          />
          <mesh
            name="KeyR"
            castShadow
            receiveShadow
            geometry={nodes.KeyR.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyR.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyR.morphTargetInfluences}
            position={[-0.118, 0.009, -0.011]}
          />
          <mesh
            name="KeyQ"
            castShadow
            receiveShadow
            geometry={nodes.KeyQ.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyQ.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyQ.morphTargetInfluences}
            position={[-0.17, 0.009, -0.011]}
          />
          <mesh
            name="KeyPause"
            castShadow
            receiveShadow
            geometry={nodes.KeyPause.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyPause.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyPause.morphTargetInfluences}
            position={[0.085, 0.009, -0.045]}
          />
          <mesh
            name="KeyP"
            castShadow
            receiveShadow
            geometry={nodes.KeyP.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyP.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyP.morphTargetInfluences}
            position={[-0.013, 0.009, -0.011]}
          />
          <mesh
            name="KeyO"
            castShadow
            receiveShadow
            geometry={nodes.KeyO.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyO.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyO.morphTargetInfluences}
            position={[-0.03, 0.009, -0.011]}
          />
          <mesh
            name="KeyN"
            castShadow
            receiveShadow
            geometry={nodes.KeyN.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyN.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyN.morphTargetInfluences}
            position={[-0.067, 0.009, 0.025]}
          />
          <mesh
            name="KeyMenu"
            castShadow
            receiveShadow
            geometry={nodes.KeyMenu.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyMenu.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyMenu.morphTargetInfluences}
            position={[0.034, 0.009, 0.043]}
          />
          <mesh
            name="KeyM"
            castShadow
            receiveShadow
            geometry={nodes.KeyM.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyM.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyM.morphTargetInfluences}
            position={[-0.05, 0.009, 0.025]}
          />
          <mesh
            name="KeyLWin"
            castShadow
            receiveShadow
            geometry={nodes.KeyLWin.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyLWin.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyLWin.morphTargetInfluences}
            position={[-0.169, 0.009, 0.043]}
          />
          <mesh
            name="KeyLShift"
            castShadow
            receiveShadow
            geometry={nodes.KeyLShift.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyLShift.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyLShift.morphTargetInfluences}
            position={[-0.188, 0.008, 0.024]}
          />
          <mesh
            name="KeyLeft"
            castShadow
            receiveShadow
            geometry={nodes.KeyLeft.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyLeft.morphTargetInfluences}
            position={[0.085, 0.009, 0.043]}
          />
          <mesh
            name="KeyLCtrl"
            castShadow
            receiveShadow
            geometry={nodes.KeyLCtrl.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyLCtrl.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyLCtrl.morphTargetInfluences}
            position={[-0.189, 0.009, 0.043]}
          />
          <mesh
            name="KeyLAlt"
            castShadow
            receiveShadow
            geometry={nodes.KeyLAlt.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyLAlt.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyLAlt.morphTargetInfluences}
            position={[-0.15, 0.009, 0.043]}
          />
          <mesh
            name="KeyL"
            castShadow
            receiveShadow
            geometry={nodes.KeyL.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyL.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyL.morphTargetInfluences}
            position={[-0.025, 0.009, 0.007]}
          />
          <mesh
            name="KeyK"
            castShadow
            receiveShadow
            geometry={nodes.KeyK.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyK.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyK.morphTargetInfluences}
            position={[-0.042, 0.009, 0.007]}
          />
          <mesh
            name="KeyJ"
            castShadow
            receiveShadow
            geometry={nodes.KeyJ.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyJ.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyJ.morphTargetInfluences}
            position={[-0.06, 0.009, 0.007]}
          />
          <mesh
            name="KeyInsert"
            castShadow
            receiveShadow
            geometry={nodes.KeyInsert.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyInsert.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyInsert.morphTargetInfluences}
            position={[0.085, 0.009, -0.03]}
          />
          <mesh
            name="KeyImprPt"
            castShadow
            receiveShadow
            geometry={nodes.KeyImprPt.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyImprPt.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyImprPt.morphTargetInfluences}
            position={[0.037, 0.009, -0.045]}
          />
          <mesh
            name="KeyI"
            castShadow
            receiveShadow
            geometry={nodes.KeyI.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyI.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyI.morphTargetInfluences}
            position={[-0.048, 0.009, -0.011]}
          />
          <mesh
            name="KeyHome"
            castShadow
            receiveShadow
            geometry={nodes.KeyHome.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyHome.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyHome.morphTargetInfluences}
            position={[0.103, 0.009, -0.03]}
          />
          <mesh
            name="KeyH"
            castShadow
            receiveShadow
            geometry={nodes.KeyH.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyH.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyH.morphTargetInfluences}
            position={[-0.077, 0.009, 0.007]}
          />
          <mesh
            name="KeyG"
            castShadow
            receiveShadow
            geometry={nodes.KeyG.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyG.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyG.morphTargetInfluences}
            position={[-0.095, 0.009, 0.007]}
          />
          <mesh
            name="KeyF9"
            castShadow
            receiveShadow
            geometry={nodes.KeyF9.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF9.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF9.morphTargetInfluences}
            position={[-0.033, 0.009, -0.045]}
          />
          <mesh
            name="KeyF8"
            castShadow
            receiveShadow
            geometry={nodes.KeyF8.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF8.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF8.morphTargetInfluences}
            position={[-0.05, 0.009, -0.045]}
          />
          <mesh
            name="KeyF7"
            castShadow
            receiveShadow
            geometry={nodes.KeyF7.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF7.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF7.morphTargetInfluences}
            position={[-0.067, 0.009, -0.045]}
          />
          <mesh
            name="KeyF6"
            castShadow
            receiveShadow
            geometry={nodes.KeyF6.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF6.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF6.morphTargetInfluences}
            position={[-0.085, 0.009, -0.045]}
          />
          <mesh
            name="KeyF5"
            castShadow
            receiveShadow
            geometry={nodes.KeyF5.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF5.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF5.morphTargetInfluences}
            position={[-0.102, 0.009, -0.045]}
          />
          <mesh
            name="KeyF4"
            castShadow
            receiveShadow
            geometry={nodes.KeyF4.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF4.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF4.morphTargetInfluences}
            position={[-0.12, 0.009, -0.045]}
          />
          <mesh
            name="KeyF3"
            castShadow
            receiveShadow
            geometry={nodes.KeyF3.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF3.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF3.morphTargetInfluences}
            position={[-0.137, 0.009, -0.045]}
          />
          <mesh
            name="KeyF2"
            castShadow
            receiveShadow
            geometry={nodes.KeyF2.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF2.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF2.morphTargetInfluences}
            position={[-0.155, 0.009, -0.045]}
          />
          <mesh
            name="KeyF12"
            castShadow
            receiveShadow
            geometry={nodes.KeyF12.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF12.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF12.morphTargetInfluences}
            position={[0.02, 0.009, -0.045]}
          />
          <mesh
            name="KeyF11"
            castShadow
            receiveShadow
            geometry={nodes.KeyF11.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF11.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF11.morphTargetInfluences}
            position={[0.002, 0.009, -0.045]}
          />
          <mesh
            name="KeyF10"
            castShadow
            receiveShadow
            geometry={nodes.KeyF10.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF10.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF10.morphTargetInfluences}
            position={[-0.015, 0.009, -0.045]}
          />
          <mesh
            name="KeyF1"
            castShadow
            receiveShadow
            geometry={nodes.KeyF1.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF1.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF1.morphTargetInfluences}
            position={[-0.172, 0.009, -0.045]}
          />
          <mesh
            name="KeyF"
            castShadow
            receiveShadow
            geometry={nodes.KeyF.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyF.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyF.morphTargetInfluences}
            position={[-0.112, 0.009, 0.007]}
          />
          <mesh
            name="KeyESC"
            castShadow
            receiveShadow
            geometry={nodes.KeyESC.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyESC.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyESC.morphTargetInfluences}
            position={[-0.19, 0.009, -0.045]}
          />
          <mesh
            name="KeyEnter"
            castShadow
            receiveShadow
            geometry={nodes.KeyEnter.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyEnter.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyEnter.morphTargetInfluences}
            position={[0.039, 0.008, -0.012]}
          />
          <mesh
            name="KeyEnd"
            castShadow
            receiveShadow
            geometry={nodes.KeyEnd.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyEnd.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyEnd.morphTargetInfluences}
            position={[0.103, 0.009, -0.012]}
          />
          <mesh
            name="KeyE"
            castShadow
            receiveShadow
            geometry={nodes.KeyE.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyE.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyE.morphTargetInfluences}
            position={[-0.135, 0.009, -0.011]}
          />
          <mesh
            name="KeyDown"
            castShadow
            receiveShadow
            geometry={nodes.KeyDown.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyDown.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyDown.morphTargetInfluences}
            position={[0.103, 0.009, 0.043]}
          />
          <mesh
            name="KeyD"
            castShadow
            receiveShadow
            geometry={nodes.KeyD.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyD.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyD.morphTargetInfluences}
            position={[-0.13, 0.009, 0.007]}
          />
          <mesh
            name="KeyC"
            castShadow
            receiveShadow
            geometry={nodes.KeyC.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyC.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyC.morphTargetInfluences}
            position={[-0.12, 0.009, 0.025]}
          />
          <mesh
            name="KeyBloqMayus"
            castShadow
            receiveShadow
            geometry={nodes.KeyBloqMayus.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyBloqMayus.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyBloqMayus.morphTargetInfluences}
            position={[-0.186, 0.009, 0.006]}
          />
          <mesh
            name="KeyBloq"
            castShadow
            receiveShadow
            geometry={nodes.KeyBloq.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyBloq.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyBloq.morphTargetInfluences}
            position={[0.055, 0.009, -0.045]}
          />
          <mesh
            name="KeyBackspace"
            castShadow
            receiveShadow
            geometry={nodes.KeyBackspace.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyBackspace.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyBackspace.morphTargetInfluences}
            position={[0.046, 0.009, -0.03]}
          />
          <mesh
            name="KeyB"
            castShadow
            receiveShadow
            geometry={nodes.KeyB.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyB.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyB.morphTargetInfluences}
            position={[-0.085, 0.009, 0.025]}
          />
          <mesh
            name="KeyAvPag"
            castShadow
            receiveShadow
            geometry={nodes.KeyAvPag.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyAvPag.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyAvPag.morphTargetInfluences}
            position={[0.12, 0.009, -0.012]}
          />
          <mesh
            name="KeyA"
            castShadow
            receiveShadow
            geometry={nodes.KeyA.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.KeyA.morphTargetDictionary}
            morphTargetInfluences={nodes.KeyA.morphTargetInfluences}
            position={[-0.165, 0.009, 0.007]}
          />
          <mesh
            name="Key^"
            castShadow
            receiveShadow
            geometry={nodes["Key^"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key^"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key^"].morphTargetInfluences}
            position={[0.005, 0.009, -0.011]}
          />
          <mesh
            name="Key?"
            castShadow
            receiveShadow
            geometry={nodes["Key?"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key?"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key?"].morphTargetInfluences}
            position={[0.002, 0.009, -0.03]}
          />
          <mesh
            name="Key<"
            castShadow
            receiveShadow
            geometry={nodes["Key<"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key<"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key<"].morphTargetInfluences}
            position={[-0.172, 0.009, 0.025]}
          />
          <mesh
            name="Key9"
            castShadow
            receiveShadow
            geometry={nodes.Key9.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key9.morphTargetDictionary}
            morphTargetInfluences={nodes.Key9.morphTargetInfluences}
            position={[-0.033, 0.009, -0.03]}
          />
          <mesh
            name="Key8"
            castShadow
            receiveShadow
            geometry={nodes.Key8.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key8.morphTargetDictionary}
            morphTargetInfluences={nodes.Key8.morphTargetInfluences}
            position={[-0.05, 0.009, -0.03]}
          />
          <mesh
            name="Key7"
            castShadow
            receiveShadow
            geometry={nodes.Key7.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key7.morphTargetDictionary}
            morphTargetInfluences={nodes.Key7.morphTargetInfluences}
            position={[-0.067, 0.009, -0.03]}
          />
          <mesh
            name="Key6"
            castShadow
            receiveShadow
            geometry={nodes.Key6.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key6.morphTargetDictionary}
            morphTargetInfluences={nodes.Key6.morphTargetInfluences}
            position={[-0.085, 0.009, -0.03]}
          />
          <mesh
            name="Key5"
            castShadow
            receiveShadow
            geometry={nodes.Key5.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key5.morphTargetDictionary}
            morphTargetInfluences={nodes.Key5.morphTargetInfluences}
            position={[-0.102, 0.009, -0.03]}
          />
          <mesh
            name="Key4"
            castShadow
            receiveShadow
            geometry={nodes.Key4.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key4.morphTargetDictionary}
            morphTargetInfluences={nodes.Key4.morphTargetInfluences}
            position={[-0.12, 0.009, -0.03]}
          />
          <mesh
            name="Key3"
            castShadow
            receiveShadow
            geometry={nodes.Key3.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key3.morphTargetDictionary}
            morphTargetInfluences={nodes.Key3.morphTargetInfluences}
            position={[-0.137, 0.009, -0.03]}
          />
          <mesh
            name="Key2"
            castShadow
            receiveShadow
            geometry={nodes.Key2.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key2.morphTargetDictionary}
            morphTargetInfluences={nodes.Key2.morphTargetInfluences}
            position={[-0.155, 0.009, -0.03]}
          />
          <mesh
            name="Key1"
            castShadow
            receiveShadow
            geometry={nodes.Key1.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key1.morphTargetDictionary}
            morphTargetInfluences={nodes.Key1.morphTargetInfluences}
            position={[-0.172, 0.009, -0.03]}
          />
          <mesh
            name="Key0"
            castShadow
            receiveShadow
            geometry={nodes.Key0.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key0.morphTargetDictionary}
            morphTargetInfluences={nodes.Key0.morphTargetInfluences}
            position={[-0.015, 0.009, -0.03]}
          />
          <mesh
            name="Key"
            castShadow
            receiveShadow
            geometry={nodes.Key.geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes.Key.morphTargetDictionary}
            morphTargetInfluences={nodes.Key.morphTargetInfluences}
            position={[-0.015, 0.009, 0.025]}
          />
          <mesh
            name="Key-"
            castShadow
            receiveShadow
            geometry={nodes["Key-"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key-"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key-"].morphTargetInfluences}
            position={[0.003, 0.009, 0.025]}
          />
          <mesh
            name="Key,"
            castShadow
            receiveShadow
            geometry={nodes["Key,"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key,"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key,"].morphTargetInfluences}
            position={[-0.032, 0.009, 0.025]}
          />
          <mesh
            name="Key*"
            castShadow
            receiveShadow
            geometry={nodes["Key*"].geometry}
            material={materials["Black Plastic"]}
            morphTargetDictionary={nodes["Key*"].morphTargetDictionary}
            morphTargetInfluences={nodes["Key*"].morphTargetInfluences}
            position={[0.022, 0.009, -0.011]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload(desk);
