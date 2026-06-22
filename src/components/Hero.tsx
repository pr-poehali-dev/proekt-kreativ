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
          src="https://cdn.poehali.dev/projects/831b1c8e-3bef-4cde-85f8-20f73a6dad2c/bucket/221ae388-8582-4283-b6d4-253cf71c9ed8.png"
          alt="Индустрия будущего"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/40 rounded-full text-[10px] sm:text-xs uppercase tracking-widest backdrop-blur-sm">
          Форум · г. Иваново · 10–11 сентября
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-[0.95]">
          ИНДУСТРИЯ
          <br />
          БУДУЩЕГО
        </h1>
        <p className="text-sm sm:text-base md:text-xl max-w-xl mx-auto opacity-90 mb-8 sm:mb-10 leading-relaxed">
          Главное событие текстильной и швейной индустрии: фабрики, технологии,
          оборудование и бизнес-нетворкинг.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#register"
            className="w-full sm:w-auto inline-block bg-white text-black px-8 py-3 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-300 hover:bg-transparent hover:text-white border border-white text-center"
          >
            Зарегистрироваться
          </a>
          <a
            href="#program"
            className="w-full sm:w-auto inline-block bg-transparent text-white px-8 py-3 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-300 hover:bg-white hover:text-black border border-white text-center"
          >
            Смотреть программу
          </a>
        </div>
      </div>
    </div>
  );
}
