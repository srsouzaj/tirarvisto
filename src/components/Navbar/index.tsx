import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Quem somos", path: "/#" },
  { name: "Serviços", path: "/#" },
  { name: "Contato", path: "/#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between h-20 not-lg:h-10">
        <img src="src/assets/logo.svg" alt="Logo" className="h-8" />

        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <a
              key={path}
              href={path}
              className={`text-lg text-[var(--primary-navy)] hover:text-black transition-colors ${
                name === "Home" && "font-bold"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[var(--primary-navy)] hover:text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-white z-40 px-4 pb-4 shadow-lg transition-all duration-500 ease-in-out transform ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map(({ name, path }) => (
            <a
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-[var(--primary-navy)] hover:text-black transition-colors"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
