const CardDestiny = () => {
  return (
    <section className="lg:w-200 not-lg:w-full not-lg:flex not-lg:justify-center">
      <div className="flex flex-col not-lg:flex-row gap-5">
        <aside className="flex flex-col items-end gap-5 lg:flex-row">
          <div className="bg-[url('https://i.ibb.co/Kj5BGWGk/indonesia.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Bali, Indonesia
            </span>
          </div>

          <div className="bg-[url('https://i.ibb.co/B2M0nsXb/eua.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-70 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Nova York, Estados Unidos
            </span>
          </div>

          <div className="bg-[url('https://i.ibb.co/FpRQfWx/grecia.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Santorini, Grécia
            </span>
          </div>
        </aside>

        <aside className="flex flex-col gap-5 lg:flex-row">
          <div className="bg-[url('https://i.ibb.co/N2fC82SW/paris.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Paris, França
            </span>
          </div>

          <div className="bg-[url('https://i.ibb.co/PvQ6Mzc3/rio.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-70 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Cidade do Cabo, África do Sul
            </span>
          </div>

          <div className="bg-[url('https://i.ibb.co/k63rgGVj/mumbai.png')] rounded-3xl flex items-end justify-center p-5 bg-cover bg-center h-60 w-full lg:w-70">
            <span className="backdrop-blur-md bg-white/10 text-xs border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition">
              Mumbai, Índia
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CardDestiny;
