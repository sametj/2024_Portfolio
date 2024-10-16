import classNames from "classnames";

export default function ProjectCard({
  Title,
  Image,
  Stack,
  github,
  link,
}: {
  Title: string;
  Image: string;
  Stack?: string;
  github: string;
  link?: string;
}) {
  return (
    <div
      className={classNames(
        `group relative h-220 w-300 overflow-hidden rounded-2xl shadow-md shadow-stone-600 transition-all duration-300`,
      )}
    >
      <div
        className={classNames(
          `border-box width-full pt absolute bottom-0 h-fit bg-gradient-to-b from-transparent to-[#000000ec] pb-20 pl-20 pr-20 pt-30`,
        )}
      >
        <p className="m-0 w-280 font-extrabold">{Title}</p>
      </div>
      <img
        className="h-full w-full object-cover"
        src={Image}
        alt="article-cover"
      />
      {/* Drop down div */}
      <div
        className={classNames(
          `absolute left-0 top-0 flex h-full w-full -translate-y-full transform flex-col justify-center overflow-auto bg-gradient-to-t from-[var(--box-bg)] to-[#000000] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100`,
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <label className="m-0 w-280 text-center font-extrabold underline decoration-double">
            Stack
          </label>
          <span className="m-0 flex w-280 text-center font-extrabold">
            {Stack}
          </span>
        </div>
        <div className="flex items-center justify-center gap-20 p-20">
          {link && (
            <a
              href={link}
              target="_blank"
              className={classNames(
                `mt-10 flex h-40 w-200 cursor-pointer items-center justify-center rounded-xl bg-[#9B7EDE] font-bold text-white transition-all duration-300 hover:bg-[#6843c0]`,
              )}
            >
              Live
            </a>
          )}

          <a
            href={github}
            target="_blank"
            className={classNames(
              `mt-10 flex h-40 w-200 cursor-pointer items-center justify-center rounded-xl bg-[#9B7EDE] font-bold text-white transition-all duration-300 hover:bg-[#6843c0]`,
            )}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
