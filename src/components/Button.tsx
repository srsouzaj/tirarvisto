import { ArrowRightIcon } from "@phosphor-icons/react";

interface IButton {
  name: string;
  link: string;
  isArrow?: boolean;
}

const Button = ({ link, name, isArrow = false }: IButton) => {
  return (
    <a
      href={link}
      className="font-semibold w-fit text-base text-[var(--primary-white)] gap-2 py-4 px-5 rounded-4xl flex items-center justify-center
        hover:bg-transparent hover:text-[var(--primary-navy)] cursor-pointer transition-colors duration-300
        hover:border-[var(--primary-navy)] border-[var(--primary-navy)] border
        bg-[var(--primary-blue)] group"
    >
      {name}
      {isArrow && (
        <ArrowRightIcon
          width={24}
          className="text-[var(--primary-white)] group-hover:text-[var(--primary-blue)] transition"
        />
      )}
    </a>
  );
};

export default Button;
