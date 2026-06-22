export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-5 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-wrap shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs">Форум</h3>
                <a href="#program" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Программа</a>
                <a href="#speakers" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Спикеры</a>
                <a href="#partners" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Партнёры</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs">Контакты</h3>
                <span className="text-white text-xs sm:text-sm">г. Иваново</span>
                <span className="text-white text-xs sm:text-sm">10–11 сентября</span>
                <span className="text-white text-xs sm:text-sm">База «ТекстильПрофи»</span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-2">
              <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] mt-3 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ИНДУСТРИЯ
                <br />
                БУДУЩЕГО
              </h1>
              <p className="text-white/50 text-xs">{new Date().getFullYear()} · Иваново</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}