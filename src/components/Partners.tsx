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

export default function Partners() {
  return (
    <div id="partners" className="bg-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-3 text-sm tracking-widest text-neutral-500">Партнёры</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight font-bold">
          Вместе создаём будущее индустрии
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-white flex items-center justify-center text-center p-6 min-h-[110px] text-neutral-800 font-medium transition-colors duration-300 hover:bg-neutral-50"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
