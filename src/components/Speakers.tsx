import { useState } from "react";
import Icon from "@/components/ui/icon";

const speakers = [
  {
    name: "Евгений Криницин",
    topic: "ERP для швейных производств",
    desc: "Автоматизация и цифровизация швейного производства",
  },
  {
    name: "Никита Серов",
    topic: "Блогер, предприниматель",
    desc: "Владелец компании «Serovski Brand»",
  },
  {
    name: "Алексей Антонов",
    topic: "CEO ПромЭксперт",
    desc: "Развитие промышленных предприятий и оптимизация процессов",
  },
  {
    name: "Юлия Смирнова",
    topic: "CEO ПромЭксперт",
    desc: "Стратегическое управление и развитие бизнеса",
  },
  {
    name: "Антон Гуреев",
    topic: "Построение команд и маркетинг",
    desc: "Операционное управление, маркетинг и продажи в модной индустрии",
  },
  {
    name: "Керим Жумаев",
    topic: "Основатель NFES",
    desc: "Основатель бренда женской одежды NFES",
  },
  {
    name: "Дмитрий Тугушев",
    topic: "Директор департамента",
    desc: "Директор департамента экономического развития и торговли",
  },
];

const VISIBLE = 3;

export default function Speakers() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + speakers.length) % speakers.length);
  const next = () => setCurrent((c) => (c + 1) % speakers.length);

  const getVisible = () =>
    Array.from({ length: VISIBLE }, (_, i) => {
      const idx = (current + i) % speakers.length;
      return { ...speakers[idx], key: `${idx}-${i}` };
    });

  return (
    <div id="speakers" className="bg-neutral-950 px-6 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-3 text-sm tracking-widest text-neutral-500">Спикеры</h3>
        <div className="flex items-end justify-between mb-16">
          <p className="text-3xl lg:text-5xl text-white leading-tight font-bold max-w-xl">
            Эксперты, которые знают индустрию изнутри
          </p>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors duration-300"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white hover:border-white transition-colors duration-300"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-800">
          {getVisible().map((s) => (
            <div
              key={s.key}
              className="bg-neutral-950 p-8 flex flex-col hover:bg-neutral-900 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-white text-xl font-bold mb-6 shrink-0">
                {s.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{s.name}</h4>
              <p className="text-sm text-white/60 mb-3 font-medium">{s.topic}</p>
              <p className="text-sm text-neutral-500 leading-relaxed mt-auto pt-4 border-t border-neutral-800">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {speakers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-white" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
