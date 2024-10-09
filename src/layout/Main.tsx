import About from "@/scenes/about/About";
import Projects from "@/scenes/projects/Projects.jsx";
import Home from "../scenes/home/Home";
import Skills from "./components/Skills";
import SocialButton from "./components/SocialButton";
import discord from "/discord-logo-duotone.svg";
import github from "/github-logo-duotone.svg";
import linkedIn from "/linkedin-logo-duotone.svg";
import logo from "/logo.svg";
import twitter from "/twitter-logo-duotone.svg";

import { skillList } from "./SkillsList";

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
      <main className="grid grid-cols-[300px_minmax(400px,_1fr)_300px] grid-rows-[1fr_200px] gap-10">
        <div className="row-span-1 row-start-1 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <Home />
        </div>
        <div className="relative row-span-1 row-start-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <About />
        </div>
        <div className="relative row-span-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
          <Projects />
        </div>

        <div className="row-span-2 grid grid-rows-1 gap-10 rounded-2xl">
          <div className="row-span-1 row-start-1 flex flex-col gap-20 overflow-auto rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
            <span className="align-self-start mb-20 items-center rounded-lg border-b-2 text-center text-2xl font-bold shadow-2xl">
              Skills
            </span>
            <div className="flex flex-col justify-center gap-20 overflow-auto">
              {skillList.map((skill) => (
                <Skills key={skill.text} icon={skill.icon} text={skill.text} />
              ))}
            </div>
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
