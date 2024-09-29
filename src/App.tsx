import { Leva } from "leva";
import Main from "./layout/Main";

function App() {
  return (
    <div className="container mx-auto grid h-dvh grid-rows-[100px_1fr_100px] gap-10 py-60">
      <Leva />
      <Main />
    </div>
  );
}

export default App;
