import ReactLenis from "lenis/react";
import ProjectCard from "../ProjectCard";
import { PROJECTS } from "../projectList";
export default function ProjectUi() {
  return (
    <ReactLenis className="grid h-310 w-650 grid-flow-col items-center justify-center overflow-auto bg-[var(--button-color)]">
      <div className="grid grid-cols-2 gap-10 p-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.Title}
            Title={project.Title}
            Image={project.Image}
            Stack={project.Stack}
          />
        ))}
      </div>
    </ReactLenis>
  );
}
