import Social from "./social";
import Doubt from "./doubt";
import ExternalLink from "./externalLink";

const Footer = () => {
  return (
    <footer className="h-[755px] w-full">
      <div className="container flex py-17.5 flex-col gap-20">
        <Doubt />
        <section className="flex w-full not-lg:flex-wrap gap-17 items-end">
          <Social />
          <ExternalLink />
        </section>
      </div>
      <section className="border-t border-[var(--secondary-white)] py-7.5">
        <p className="text-[var(--primary-subtitle)] text-sm font-medium text-center">
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </p>
      </section>
    </footer>
  );
};
export default Footer;
