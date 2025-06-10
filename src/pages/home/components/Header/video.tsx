import { ArrowRightIcon } from "@phosphor-icons/react";

const Video = () => {
  return (
    <a
      href="https://youtube.com"
      rel="noopener noreferrer"
      target="blank"
      className="w-full flex  flex-col gap-4"
    >
      <picture className="h-27.5 cursor-pointer not-lg:w-full not-lg:h-1/4 w-52">
        <source
          srcSet="https://i.ibb.co/pBLrdP8q/video.webp"
          media="(min-width: 769px) and (max-width: 1400px)"
        />
        <source
          srcSet="https://i.ibb.co/9mRGwHnS/image.webp"
          media="(max-width: 768px)"
        />
        <img
          src="https://i.ibb.co/pBLrdP8q/video.webp"
          alt="banner de video"
          className="rounded-xl"
          loading="lazy"
        />
      </picture>

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
          className="font-semibold text-base text-[var(--primary-white)] py-2 px-5 rounded-full
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
    </a>
  );
};

export default Video;
