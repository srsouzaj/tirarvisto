import Button from "../Button";
import Tag from "../Tag";

const TopDestiny = () => {
  return (
    <article className="flex justify-center items-center flex-col">
      <section className="bg-[url('./assets/background.png')] w-full flex flex-col items-center py-21">
        <Tag name={"Top Destino"} />

        <h2 className="text-6xl pt-2 not-lg:text-3xl text-[var(--primary-navy)] text-center">
          Destinos mais procurados
        </h2>
        <p className="text-base w-145 pt-3 pb-10 text-[var(--primary-subtitle)] text-center">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </p>
        <Button link="#" name="Conheça mais" />
      </section>
      <section className="lg:w-200">
        <div className="flex flex-col gap-5">
          <aside className="flex gap-5 items-end">
            <div className="bg-[url('./assets/indonesia.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-70">
              <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Bali, Indonesia
              </span>
            </div>
            <div className="bg-[url('./assets/eua.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-70 w-70">
              <span className="backdrop-blur-md bg-white/10 border text-xs border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Nova York, Estados Unidos
              </span>
            </div>
            <div className="bg-[url('./assets/grecia.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-70">
              <span className="backdrop-blur-md bg-white/10 border text-xs border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Santorini, Grecia
              </span>
            </div>
          </aside>
          <aside className="flex gap-5 items-start">
            <div className="bg-[url('./assets/paris.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-70">
              <span className="backdrop-blur-md bg-white/10 border text-xs border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Paris, França
              </span>
            </div>
            <div className="bg-[url('./assets/rio.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-70 w-70">
              <span className="backdrop-blur-md bg-white/10 border text-xs border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Cidade do Cabo, Africa do Sul
              </span>
            </div>
            <div className="bg-[url('./assets/mumbai.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-70">
              <span className="backdrop-blur-md bg-white/10 border text-xs border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
                Mumbai, India
              </span>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default TopDestiny;
