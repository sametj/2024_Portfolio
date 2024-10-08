export default function ProjectCard() {
  return (
    <div className="container flex h-full items-center justify-center gap-20">
      <div className="flex h-full w-400 flex-col items-center justify-center gap-20">
        <img
          className="h-300 w-600 rounded-lg"
          src="https://placehold.co/400"
          alt=""
        />
        <h1>Project Title</h1>
      </div>
      <div className="flex h-full w-400 flex-col items-center justify-center rounded-lg border-2">
        <p className="flex-1 overflow-auto text-wrap p-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis,
          repellendus doloribus maxime nihil consequuntur esse. Voluptatibus
          repudiandae deleniti totam asperiores ex architecto! Perspiciatis quod
          ut sapiente nam molestias dignissimos. Iusto debitis quisquam corrupti
          quae est odio aspernatur doloribus atque possimus, voluptatem, id
          nobis optio dolore animi explicabo, natus eligendi rerum
          exercitationem ratione pariatur labore repellat similique adipisci
          iste! Architecto. Aut, voluptatum voluptate iusto recusandae dicta
          aliquid fuga minima. Incidunt minima quas consequatur ex tempore!
          Dolorum quae consequuntur aliquid voluptates in unde voluptate,
          placeat ratione ex doloremque odio maxime eius?
        </p>
        <div className="flex w-full justify-center gap-20 border-t-2 p-8">
          <a className="inline-block cursor-pointer rounded-lg border-2 p-8">
            Live View
          </a>
          <a className="inline-block cursor-pointer rounded-lg border-2 p-8">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
