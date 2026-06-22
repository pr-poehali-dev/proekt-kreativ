import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          <div className="text-white text-xs sm:text-sm uppercase tracking-widest font-bold">
            Индустрия будущего
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#program" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Программа</a>
            <a href="#speakers" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Спикеры</a>
            <a href="#partners" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Партнёры</a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Меню"
          >
            <Icon name={open ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white p-2"
          >
            <Icon name="X" size={28} />
          </button>
          <div className="text-white text-xs uppercase tracking-widest mb-4 opacity-50">
            Индустрия будущего
          </div>
          {[
            { href: "#program", label: "Программа" },
            { href: "#speakers", label: "Спикеры" },
            { href: "#partners", label: "Партнёры" },
            { href: "#register", label: "Зарегистрироваться" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
