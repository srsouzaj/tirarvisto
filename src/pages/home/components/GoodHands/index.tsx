const GoodHands = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="lg:py-18 not-lg:py-10 bg-[var(--quartiary-white)]"
    >
      <aside className="container">
        <div className="flex w-full">
          <h2 className="text-6xl w-[80%] not-lg:text-3xl text-[var(--primary-navy)] uppercase font-medium">
            Consultoria completa para tirar seu visto
          </h2>
          <img
            src="src/assets/phone.svg"
            className="lg:w-40 lg:h-40 not-lg:w-20 not-lg:h-20"
            alt=""
          />
        </div>
        <div className="flex">
          <img
            src="src/assets/time.svg"
            className="lg:w-40 lg:h-40 not-lg:w-20 not-lg:h-20"
            alt=""
          />
          <h2 className="text-6xl w-[100%] italic text-right not-lg:text-3xl text-[var(--primary-navy)] uppercase font-medium">
            você esta em boas mãos!
          </h2>
        </div>
      </aside>
    </section>
  );
};

export default GoodHands;
