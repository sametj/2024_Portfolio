import About from "@/scenes/about/About";
import Projects from "@/scenes/projects/Projects";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Home from "../scenes/home/Home";
import SocialButton from "./components/SocialButton";
import discord from "/discord-logo-duotone.svg";
import github from "/github-logo-duotone.svg";
import linkedIn from "/linkedin-logo-duotone.svg";
import logo from "/logo.svg";
import twitter from "/twitter-logo-duotone.svg";

export default function Main() {
  return (
    <>
      <header className="flex items-center justify-between rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
        <img className="h-full w-200" src={logo} alt="Teejay's personal logo" />

        <div className="mx-20 flex gap-40">
          <SocialButton icon={github} link="#_" text="GitHub" />
          <SocialButton icon={linkedIn} link="#_" text="LinkedIn" />
          <SocialButton icon={twitter} link="#_" text="Twitter" />
          <SocialButton icon={discord} link="#_" text="Discord" />
        </div>
      </header>
      <main className="grid grid-cols-[300px_minmax(400px,_1fr)_300px] grid-rows-2 gap-10">
        <div className="row-span-1 row-start-1 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <Home />
        </div>
        <div className="relative row-span-1 row-start-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <Canvas
            style={{
              position: "absolute",
              zIndex: 0,
            }}
          >
            <OrbitControls />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshNormalMaterial />
            </mesh>
          </Canvas>
          <About />
        </div>
        <div className="row-span-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <Projects />
        </div>

        <div className="roundex-2xl row-span-2 grid auto-rows-auto gap-10">
          <div className="flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
            Current Projects
          </div>
          <div className="flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
            Upcoming Projects
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
        <span>
          Perfection is not attainable, but if we chase perfection, we can catch
          excellence
        </span>
      </footer>
    </>
  );
}
