import Main from "@/layout/Main";
import { animate } from "@/utils/scrollAnimation";
import { Leva } from "leva";
import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext({});

function App() {
  const scroll = animate;

  const [viewProject, setViewProject] = useState(false);

  useEffect(() => {
    scroll();
  }, [scroll]);

  return (
    <div className="container mx-auto grid h-dvh grid-rows-[100px_1fr_100px] gap-10 py-60">
      <Leva />
      <ProjectContext.Provider value={{ viewProject, setViewProject }}>
        <Main />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
