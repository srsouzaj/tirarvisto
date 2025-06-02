import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import { packageMocked } from "./Cards/utils/package.mocked";
import Card from "./Cards/card";

const CardList = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  return (
    <section className="container pt-18.5">
      <span className="bg-[var(--primary-yellow)] px-5 py-4 rounded-full">
        Pacotes
      </span>
      <aside className="flex flex-col pt-6 gap-15">
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-medium not-lg:text-3xl text-[var(--primary-blue)]">
            Confira nossos pacotes
          </h2>
          <div className="flex gap-5">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="group border border-[var(--primary-blue)] bg-transparent hover:bg-[var(--primary-blue)] rounded-full p-3 transition"
            >
              <ArrowLeftIcon
                size={24}
                className="text-[var(--primary-blue)] group-hover:text-white transition"
              />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="group border border-[var(--primary-blue)] bg-transparent hover:bg-[var(--primary-blue)] rounded-full p-3 transition"
            >
              <ArrowRightIcon
                size={24}
                className="text-[var(--primary-blue)] group-hover:text-white transition"
              />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {packageMocked.map((pack, index) => (
            <Card key={index} pack={pack} />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default CardList;
