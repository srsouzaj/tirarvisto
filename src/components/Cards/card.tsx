import type { IPackage } from "./utils/package.mocked";

const Card = ({ pack }: { pack: IPackage }) => {
  return (
    <article className="keen-slider__slide p-4 rounded-xl border-2 border-[var(--tertiary-white)] transition-all duration-300 hover:border-[var(--primary-blue)] overflow-hidden flex flex-col">
      <figure>
        <img
          src={pack.img}
          alt={pack.title}
          className="w-full h-75 rounded-xl object-cover"
        />
      </figure>

      <section className="pt-8 flex flex-col flex-1 justify-between">
        <header>
          <div className="flex gap-2 mb-3">
            <span className="text-sm border cursor-pointer border-[var(--primary-navy)] px-5 py-1.25 rounded-full text-[var(--primary-navy)]">
              Basic
            </span>
            <span className="text-sm border border-[var(--primary-subtitle)] px-5 py-1.25 cursor-not-allowed rounded-full text-[var(--primary-subtitle)]">
              Premium
            </span>
          </div>
          <h3 className="text-3xl not-lg:text-xl font-semibold pb-4">
            {pack.title}
          </h3>
        </header>

        <section className="w-[60%] pb-4">
          <div className="flex justify-between text-[var(--primary-navy)] text-base">
            <p>Atendimento</p>
            <p>Tempo</p>
          </div>
          <div className="flex justify-between text-base text-[var(--primary-subtitle)]">
            <p>{pack.atendimento}</p>
            <p>{pack.tempo}</p>
          </div>
        </section>

        <footer className="flex pt-4 border-t border-[var(--primary-subtitle)] justify-between items-end">
          <div>
            <p className="text-sm text-[var(--primary-subtitle)]">
              A partir de:
            </p>
            <p className="text-4xl font-bold text-[var(--primary-navy)]">
              {pack.preco}
            </p>
          </div>
          <a
            href="#"
            className="font-semibold text-base text-[var(--primary-white)] py-4 px-5 rounded-4xl flex items-center justify-center
        hover:bg-transparent hover:text-[var(--primary-navy)] cursor-pointer transition-colors duration-300
        hover:border-[var(--primary-navy)] border-[var(--primary-navy)] border
        bg-[var(--primary-blue)]"
          >
            Contratar
          </a>
        </footer>
      </section>
    </article>
  );
};

export default Card;
