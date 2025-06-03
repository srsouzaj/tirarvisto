import { PlusIcon } from "@phosphor-icons/react";

const Steps = () => {
  return (
    <aside>
      <aside className="container flex not-lg:flex-col lg:gap-9 not-lg:gap-5 items-start">
        <img
          src="https://i.ibb.co/R4bCB1b3/happy.webp"
          alt=""
          className="w-full h-111 not-lg:h-full rounded-3xl"
        />
        <div className="w-full">
          <h2 className="lg:text-5xl font-medium pt-4 pb-2 not-lg:text-3xl text-[var(--primary-navy)]">
            Etapa Inicial
          </h2>
          <p className="text-base py-3 border-b border-[var(--secondary-white)] text-[var(--primary-subtitle)]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <h2 className="lg:text-5xl font-medium py-2 not-lg:text-3xl text-[var(--primary-navy)]">
            Processo de Entrevista
          </h2>
          <a className="text-base items-center flex gap-2 pb-4 hover:font-semibold border-b border-[var(--secondary-white)] text-[var(--primary-navy)]">
            <PlusIcon size={16} /> Leia mais
          </a>
          <h2 className="lg:text-5xl font-medium py-2 not-lg:text-3xl text-[var(--primary-navy)]">
            Entrega de Documentos
          </h2>
          <a className="text-base items-center flex gap-2 pb-4 hover:font-semibold border-b border-[var(--secondary-white)] text-[var(--primary-navy)]">
            <PlusIcon size={16} /> Leia mais
          </a>
        </div>
      </aside>
    </aside>
  );
};

export default Steps;
