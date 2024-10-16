export default function SocialButton({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) {
  return (
    <div className="flex justify-center">
      <a
        target="_blank"
        href={link}
        className="group relative inline-flex w-100 items-center justify-center overflow-hidden rounded-xl border-4 border-[var(--button-color)] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
      >
        <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[var(--button-color)] text-white duration-300 group-hover:translate-y-0">
          <img className="w-50" src={icon} alt="github-icon" />
        </span>
        <span className="absolute flex h-full w-full transform items-center justify-center text-[var(--button-color)] transition-all duration-300 group-hover:translate-y-full">
          {text}
        </span>
        <span className="invisible relative">Button</span>
      </a>
    </div>
  );
}
