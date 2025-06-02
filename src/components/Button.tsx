interface IButton {
  name: string;
  link: string;
}

const Button = ({ link, name }: IButton) => {
  return (
    <a
      href={link}
      className="font-semibold w-fit text-base text-[var(--primary-white)] py-4 px-5 rounded-4xl flex items-center justify-center
        hover:bg-transparent hover:text-[var(--primary-navy)] cursor-pointer transition-colors duration-300
        hover:border-[var(--primary-navy)] border-[var(--primary-navy)] border
        bg-[var(--primary-blue)]"
    >
      {name}
    </a>
  );
};

export default Button;
