import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Button from "../Button";

const Doubt = () => {
  return (
    <section className="flex flex-wrap gap-17 not-lg:gap-10 not-lg:justify-center justify-between items-center">
      <aside className="lg:w-[456px] not-lg:w-full">
        <h2 className="lg:text-6xl not-lg:text-3xl text-[var(--primary-navy)] pb-3 font-medium">
          Está com alguma dúvida?
        </h2>
        <p className="text-base not-lg:text-sm lg:pb-10 not-lg:pb-5 text-[var(--primary-subtitle)]">
          Entre em contato através do nosso canal direto ao cliente através do
          botão abaixo
        </p>

        <Button link="#" name="Central de atendimento" />
      </aside>
      <aside className="lg:w-[500px] w-full cursor-pointer hover:opacity-60 border-b transition-all duration-300 flex items-center justify-between lg:text-[40px] not-lg:text-2xl pb-4 border-[var(--primary-navy)]">
        Receba novidades
        <ArrowUpRightIcon size={32} />
      </aside>
    </section>
  );
};

export default Doubt;
