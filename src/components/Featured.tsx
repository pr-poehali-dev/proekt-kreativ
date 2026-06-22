import Icon from "@/components/ui/icon";

const days = [
  {
    badge: "День 1 · 10 сентября",
    title: "День мастерства и красоты",
    location: "ИГПУ → выезд на фабрики",
    accent: "Практика",
    items: [
      { time: "09:00 – 10:00", text: "Регистрация и приветственный кофе. Швеи — синие бейджи, фабриканты — красные." },
      { time: "10:00 – 13:00", text: "Конкурс швей «Золотая игла», дефиле от ИГПУ с моделями ивановских фабрик, творческая программа." },
      { time: "13:00 – 14:00", text: "Обед — фуршет / бизнес-ланч." },
      { time: "14:00 – 18:00", text: "Бизнес-тур по фабрикам: Хоум Стайл, Бисер, Исток Пром. Линии раскроя, контроль качества, сроки." },
      { time: "18:00 – 20:00", text: "Торжественное закрытие Дня 1. Ужин с фабрикантами." },
    ],
  },
  {
    badge: "День 2 · 11 сентября",
    title: "День стратегии и технологий",
    location: "База «ТекстильПрофи»",
    accent: "Теория + бизнес",
    items: [
      { time: "10:00 – 11:00", text: "Открытие выставки оборудования: стенды поставщиков станков, раскройных систем и ПО." },
      { time: "11:00 – 13:00", text: "Пленарная сессия: тренды импортозамещения, кейсы масштабирования, новые ткани." },
      { time: "13:00 – 14:00", text: "Кофе-брейк в зоне выставки. 5-минутные демо-показы станков." },
      { time: "14:00 – 16:00", text: "Продолжение форума, мастер-майнды, награждение победителей конкурса швей." },
      { time: "16:00 – 17:00", text: "Закрывающий фуршет и B2B-переговоры." },
    ],
  },
];

export default function Featured() {
  return (
    <div id="program" className="bg-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-3 text-sm tracking-widest text-neutral-500">Программа</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight font-bold">
          Два дня, которые меняют индустрию
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {days.map((day) => (
            <div key={day.title}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-wide bg-black text-white px-3 py-1">
                  {day.accent}
                </span>
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {day.badge}
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
                {day.title}
              </h4>
              <div className="flex items-center gap-2 text-neutral-500 mb-8">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">{day.location}</span>
              </div>

              <div className="space-y-6">
                {day.items.map((item) => (
                  <div key={item.time} className="flex gap-4 border-l-2 border-neutral-200 pl-4">
                    <div className="shrink-0 w-28 text-sm font-medium text-neutral-900">
                      {item.time}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
