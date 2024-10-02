import Main from "@/layout/Main";
import { animate } from "@/utils/scrollAnimation";
import { Leva } from "leva";
import { useEffect } from "react";

function App() {
  const scroll = animate;

  useEffect(() => {
    scroll();
  }, [scroll]);

  return (
    <div className="container mx-auto grid h-dvh grid-rows-[100px_1fr_100px] gap-10 py-60">
      {/* <ReactLenis autoRaf root> */}
      <Leva />
      <Main />
      {/* </ReactLenis> */}
    </div>
  );
}

export default App;
