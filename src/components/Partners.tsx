import { useRef } from "react";

const partners = [
  "Политех",
  "Хоум Стайл",
  "Бисер",
  "Исток Пром",
  "НФЕС",
  "Лидер Текс",
  "Текстиль Профи",
  "Бест Вестерн",
  "Турист",
  "Зеленый Городок",
  "Шуйская водка",
  "Мой Бизнес",
  "Департамент экономического развития",
  "Джуки",
  "ZOJE",
  "Серов",
  "Унтекс",
];

const doubled = [...partners, ...partners];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div id="partners" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h3 className="uppercase mb-3 text-sm tracking-widest text-neutral-500">Партнёры</h3>
        <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight font-bold">
          Вместе создаём будущее индустрии
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={trackRef}
            className="flex gap-8 animate-marquee whitespace-nowrap"
            style={{ animationDuration: "30s" }}
          >
            {doubled.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-8 shrink-0"
              >
                <span className="text-neutral-800 font-semibold text-lg uppercase tracking-wide">
                  {p}
                </span>
                <span className="text-neutral-300 text-2xl select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
