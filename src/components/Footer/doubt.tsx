import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Button from "../Button";

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

        <Button link="#" name="Central de atendimento" />
      </aside>
      <aside className="w-[500px] cursor-pointer hover:opacity-60 border-b transition-all duration-300 flex items-center justify-between text-[40px] pb-4 border-[var(--primary-navy)]">
        Receba novidades
        <ArrowUpRightIcon size={32} />
      </aside>
    </section>
  );
};

export default Doubt;
