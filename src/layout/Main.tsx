export default function Main() {
  return (
    <>
      <header className="rounded-2xl border-2 border-[#4e148c] bg-[#000F08] p-8">
        Test
      </header>
      <main className="grid grid-cols-[300px_minmax(400px,_1fr)_300px] grid-rows-2 gap-10">
        <div className="row-span-1 row-start-1 flex rounded-2xl border-2 bg-[#000F08] p-8">
          Home
        </div>
        <div className="row-span-1 row-start-2 flex rounded-2xl border-2 bg-[#000F08] p-8">
          About
        </div>
        <div className="row-span-2 flex rounded-2xl border-2 bg-[#000F08] p-8">
          Projects
        </div>

        <div className="roundex-2xl row-span-2 grid auto-rows-auto gap-10">
          <div className="flex rounded-2xl border-2 bg-[#000F08] p-8">
            Current Projects
          </div>
          <div className="flex rounded-2xl border-2 bg-[#000F08] p-8">
            Upcoming Project
          </div>
        </div>
      </main>
      <footer className="flex rounded-2xl border-2 bg-[#000F08] p-8">
        Test
      </footer>
    </>
  );
}
