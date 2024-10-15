export default function ProjectCard() {
  return (
    <div className="relative h-280 w-240 rounded-lg border-2">
      <img
        className="h-full w-full rounded-lg object-cover object-center"
        src="/tcr.png"
        alt="Project-Image"
      />
      <div className="absolute bottom-0 h-100 w-full text-center backdrop-blur-lg">
        Test
      </div>
    </div>
  );
}
