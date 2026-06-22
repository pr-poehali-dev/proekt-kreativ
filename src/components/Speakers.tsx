const speakers = [
  { name: "Евгений Криницин", topic: "ERP для швейных производств" },
  { name: "Никита Серов", topic: "Маркетплейсы" },
  { name: "Алексей Антонов", topic: "Эксперт рынка" },
  { name: "Юлия Смирнова", topic: "Эксперт рынка" },
  { name: "Антон Гуреев", topic: "Эксперт рынка" },
  { name: "Керим Жумаев", topic: "Эксперт рынка" },
  { name: "Дмитрий Тугушев", topic: "Эксперт рынка" },
];

export default function Speakers() {
  return (
    <div id="speakers" className="bg-neutral-950 px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-3 text-sm tracking-widest text-neutral-500">Спикеры</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-white leading-tight font-bold">
          Эксперты, которые знают индустрию изнутри
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="group bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center text-white text-lg font-bold mb-5">
                {s.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{s.name}</h4>
              <p className="text-sm text-neutral-400">{s.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
