import About from "@/scenes/about/About";
import Home from "@/scenes/home/Home";
import Projects from "@/scenes/projects/Projects.jsx";
import Skills from "./components/Skills";
import SocialButton from "./components/SocialButton";
import logo from "/logo.svg";

import ReactLenis from "lenis/react";
import { SKILLS } from "./SkillsList";
import { SOCIALS } from "./socialsList";

export default function Main() {
  return (
    <>
      <header className="flex items-center justify-between rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 shadow-md shadow-stone-700">
        <img className="h-full w-200" src={logo} alt="Teejay's personal logo" />

        <div className="mx-20 flex gap-40">
          {SOCIALS.map((social) => (
            <SocialButton
              icon={social.icon}
              link={social.link}
              text={social.text}
            />
          ))}
        </div>
      </header>
      <main className="grid grid-cols-[300px_minmax(400px,_1fr)_300px] grid-rows-[1fr_200px] gap-10">
        <div className="relative row-span-1 row-start-1 flex overflow-hidden rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 shadow-md shadow-stone-700">
          <Home />
        </div>
        <div className="relative row-span-1 row-start-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 shadow-md shadow-stone-700">
          <About />
        </div>
        <div className="relative row-span-2 flex rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 shadow-md shadow-stone-700">
          <Projects />
        </div>

        <div className="row-span-2 grid grid-rows-1 gap-10 rounded-2xl shadow-md shadow-stone-700">
          <ReactLenis className="relative row-span-1 row-start-1 flex flex-col gap-20 overflow-auto rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8">
            <span className="flex h-40 items-center justify-center rounded-lg border-2 text-center">
              Skills
            </span>
            <div className="mt-30 flex flex-col justify-center gap-20">
              {SKILLS.map((skill) => (
                <Skills key={skill.text} icon={skill.icon} text={skill.text} />
              ))}
            </div>
          </ReactLenis>
        </div>
      </main>
      <footer className="flex items-center justify-center rounded-2xl border-4 border-[var(--box-border-color)] bg-[var(--box-bg)] p-8 shadow-md shadow-stone-700">
        <span className="italic">
          Perfection is not attainable, but if we chase perfection, we can catch
          excellence
        </span>
      </footer>
    </>
  );
}
