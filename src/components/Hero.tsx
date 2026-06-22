import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Индустрия будущего"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="inline-block mb-6 px-4 py-2 border border-white/40 rounded-full text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm">
          Форум · г. Иваново · 10–11 сентября
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
          ИНДУСТРИЯ
          <br />
          БУДУЩЕГО
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Главное событие текстильной и швейной индустрии: фабрики, технологии,
          оборудование и бизнес-нетворкинг.
        </p>
        <a
          href="#program"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-medium transition-all duration-300 hover:bg-transparent hover:text-white border border-white"
        >
          Смотреть программу
        </a>
      </div>
    </div>
  );
}
