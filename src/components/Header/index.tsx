import Button from "../Button";
import Video from "./video";
import Banner from "./Banner";
import { useCountUp } from "../../hook/counterIncrement";

const Header = () => {
  const viewer = useCountUp({ target: 509, duration: 500 });
  const passport = useCountUp({ target: 602, duration: 750 });
  const families = useCountUp({ target: 634, duration: 1200 });

  return (
    <section className="flex p-5">
      <header className="w-full px-7.5">
        <aside>
          <h1 className="text-6xl font-medium pb-8 border-b border-[var(--secondary-white)]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <div className="flex gap-5 pt-15">
            <div className="flex flex-col gap-10">
              <p className="text-[var(--primary-subtitle)] text-base">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>
              <Button isArrow link="#" name="Saiba mais" />
            </div>
            <Video />
          </div>
          <div className="flex gap-7 pt-22.5">
            <div className="border-r px-7 border-[var(--secondary-white)]">
              <p className="text-5xl text-[var(--primary-navy)]">{viewer}</p>
              <p className="text-base text-[var(--primary-subtitle)]">
                Vistos Tirados
              </p>
            </div>
            <div className="border-r pr-7 border-[var(--secondary-white)]">
              <p className="text-5xl text-[var(--primary-navy)]">{passport}</p>
              <p className="text-base text-[var(--primary-subtitle)]">
                Passaportes Tirados
              </p>
            </div>
            <div>
              <p className="text-5xl text-[var(--primary-navy)]">{families}</p>
              <p className="text-base text-[var(--primary-subtitle)]">
                Famílias Felizes
              </p>
            </div>
          </div>
        </aside>
      </header>
      <Banner />
    </section>
  );
};

export default Header;
