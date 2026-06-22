import { useState } from "react";
import Icon from "@/components/ui/icon";

const roles = ["Владелец / руководитель фабрики", "Швея / технолог", "Поставщик оборудования", "Инвестор / партнёр", "Другое"];

export default function Registration() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", role: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="register" className="bg-neutral-950 px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div>
          <h3 className="uppercase mb-3 text-xs sm:text-sm tracking-widest text-neutral-500">Участие</h3>
          <p className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 text-white leading-tight font-bold">
            Зарегистрируйтесь на форум
          </p>
          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed">
            Два дня погружения в индустрию: фабрики, технологии, нетворкинг и конкурс «Золотая игла».
            Количество мест ограничено.
          </p>
          <div className="space-y-4">
            {[
              { icon: "Calendar", text: "10–11 сентября 2025" },
              { icon: "MapPin", text: "г. Иваново, База «ТекстильПрофи»" },
              { icon: "Users", text: "Фабриканты, швеи, поставщики оборудования" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-neutral-300">
                <Icon name={item.icon as "Calendar"} size={18} className="text-neutral-500 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div className="bg-neutral-900 border border-neutral-800 p-10 text-center">
              <Icon name="CheckCircle" size={48} className="text-white mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h4>
              <p className="text-neutral-400">Мы свяжемся с вами для подтверждения участия.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 p-5 sm:p-8 space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Имя и фамилия *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 placeholder:text-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Компания</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Название организации"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 placeholder:text-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Телефон *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 placeholder:text-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Кто вы?</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-500"
                >
                  <option value="">Выберите роль</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-neutral-200"
              >
                Подать заявку
              </button>
              <p className="text-neutral-600 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}