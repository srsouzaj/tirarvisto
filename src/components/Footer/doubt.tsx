import { ArrowUpRightIcon } from "@phosphor-icons/react";

const Doubt = () => {
  return (
    <section className="flex flex-wrap gap-17 not-lg:justify-center justify-between items-center">
      <aside className="w-[456px]">
        <h2 className="text-[56px] text-[var(--primary-navy)] pb-3 font-medium">
          Está com alguma dúvida?
        </h2>
        <p className="text-[16px] pb-10 text-[var(--primary-subtitle)]">
          Entre em contato através do nosso canal direto ao cliente através do
          botão abaixo
        </p>

        <a
          className="font-semibold text-base text-[var(--primary-white)] py-4 px-5 rounded-4xl
         hover:bg-transparent hover:text-[var(--primary-navy)] cursor-pointer transition-colors duration-300
            hover:border-[var(--primary-navy)] border-[var(--primary-navy)] border
        bg-[var(--primary-blue)]"
        >
          Central de Atendimento
        </a>
      </aside>
      <aside className="w-[500px] cursor-pointer hover:opacity-60 border-b transition-all duration-300 flex items-center justify-between text-[40px] pb-4 border-[var(--primary-navy)]">
        Receba novidades
        <ArrowUpRightIcon size={32} />
      </aside>
    </section>
  );
};

export default Doubt;
