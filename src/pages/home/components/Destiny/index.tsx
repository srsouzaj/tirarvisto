import Button from "../../../../components/Button";
import Tag from "../../../../components/Tag";
import CardDestiny from "./card-destiny";

const TopDestiny = () => {
  return (
    <article
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="flex justify-center not-lg:px-5 items-center lg:pt-20 flex-col"
    >
      <section className="bg-[url('https://i.ibb.co/5gNTHRBd/background.pngbackground.png')] bg-center bg-no-repeat bg-cover w-full flex flex-col items-center py-21">
        <Tag name={"Top Destino"} />

        <h2 className="text-6xl pt-2 not-lg:text-3xl text-[var(--primary-navy)] text-center">
          Destinos mais procurados
        </h2>
        <p className="text-base lg:w-145 pt-3 pb-10 text-[var(--primary-subtitle)] text-center">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </p>
        <Button link="#" name="Conheça mais" />
      </section>
      <CardDestiny />
    </article>
  );
};

export default TopDestiny;
