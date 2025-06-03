const GoodHands = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="py-18 bg-[var(--quartiary-white)]"
    >
      <aside className="container">
        <div className="flex w-full">
          <h2 className="text-6xl w-[80%] not-lg:text-4xl text-[var(--primary-navy)] uppercase font-medium">
            Consultoria completa para tirar seu visto
          </h2>
          <img src="src/assets/phone.svg" className="w-40 h-40" alt="" />
        </div>
        <div className="flex">
          <img src="src/assets/time.svg" className="w-40 h-40" alt="" />
          <h2 className="text-6xl w-[100%] italic text-right not-lg:text-4xl text-[var(--primary-navy)] uppercase font-medium">
            você esta em boas mãos!
          </h2>
        </div>
      </aside>
    </section>
  );
};

export default GoodHands;
