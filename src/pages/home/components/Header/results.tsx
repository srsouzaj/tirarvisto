import { useCountUp } from "../../../../hooks/counterIncrement";

const Results = () => {
  const viewer = useCountUp({ target: 509, duration: 500 });
  const passport = useCountUp({ target: 602, duration: 750 });
  const families = useCountUp({ target: 634, duration: 1200 });
  return (
    <div className="flex gap-7 not-lg:gap-4 pt-22.5">
      <div className="border-r lg:px-7 not-lg:pl-1 border-[var(--secondary-white)]">
        <p className="text-5xl text-[var(--primary-navy)]">{viewer}</p>
        <p className="text-base text-[var(--primary-subtitle)]">
          Vistos Tirados
        </p>
      </div>
      <div className="border-r pr-7 not-lg:px-2 border-[var(--secondary-white)]">
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
  );
};

export default Results;
