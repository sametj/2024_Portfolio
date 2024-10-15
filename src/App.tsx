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
    <div className="font-body container mx-auto grid h-dvh grid-rows-[100px_700px_100px] gap-10 overflow-y-hidden py-60 font-semibold">
      <Leva />
      <ProjectContext.Provider value={{ viewProject, setViewProject }}>
        <Main />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
