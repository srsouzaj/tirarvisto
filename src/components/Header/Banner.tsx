const Banner = () => {
  return (
    <div className="relative bg-[url('https://i.ibb.co/ZRfv1gDb/header.webp')] box-shadow rounded-3xl flex flex-col items-start justify-end p-8 bg-cover bg-center h-200 w-full">
      <span className="w-fit absolute top-4 right-4 font-semibold text-base bg-[var(--primary-yellow)] px-5 py-4 rounded-full">
        Tirar meu visto agora!
      </span>
      <div className="w-[75%] flex flex-col gap-3">
        <h2 className="text-white text-5xl font-semibold">
          Realize o seu sonho com a ajuda da Tirar Visto!
        </h2>
        <p className="text-white text-base">
          Com um serviço profissional, você não terá dor de cabeça para todo o
          processo do visto e entrevistas no consulado.
        </p>
      </div>
    </div>
  );
};

export default Banner;
