import Button from "../../../../components/Button";
import Video from "./video";
import Banner from "./Banner";
import Navbar from "../../../../components/Navbar";
import Results from "./results";

const Header = () => {
  return (
    <section
      className="flex not-lg:flex-col w-full gap-8 p-5"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <header className="w-full lg:px-7.5">
        <aside>
          <Navbar />
          <h1 className="text-6xl not-lg:text-3xl  font-medium py-8 border-b border-[var(--secondary-white)]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <div className="flex not-lg:flex-col gap-5 pt-15">
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
          <Results />
        </aside>
      </header>
      <Banner />
    </section>
  );
};

export default Header;
