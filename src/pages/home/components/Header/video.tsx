import { ArrowRightIcon } from "@phosphor-icons/react";

const Video = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <img
        src="https://i.ibb.co/pBLrdP8q/video.webp"
        className="h-27.5 not-lg:w-full not-lg:h-full w-52"
        alt="banner de video"
        loading="lazy"
      />
      <div className="flex gap-3 justify-between">
        <div>
          <p className="text-base text-[var(--primary-navy)]">
            Conheça a Bruna
          </p>
          <small className="text-xs text-[var(--primary-subtitle)]">
            Ver vídeo
          </small>
        </div>
        <a
          href="#"
          className="font-semibold text-base text-[var(--primary-white)] py-2 px-2 rounded-full
                   flex items-center justify-center
        hover:bg-transparent hover:text-[var(--primary-navy)] cursor-pointer transition-colors duration-300
        hover:border-[var(--primary-navy)] border-[var(--primary-navy)] border
        bg-[var(--primary-blue)] group"
        >
          <ArrowRightIcon
            width={24}
            height={24}
            className="text-[var(--primary-white)] m-0 w-6 h-6 group-hover:text-[var(--primary-blue)] transition"
          />
        </a>
      </div>
    </div>
  );
};

export default Video;
