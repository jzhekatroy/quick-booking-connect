import logo from "@/assets/logo.png";
import telegramMockup from "@/assets/telegram-mockup.jpg";
import { Button } from "./ui/button";
const Hero = () => {
  return <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mx-0">
            {/* Left side - Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src={logo} alt="2Minutes" className="h-16 sm:h-20 lg:h-24 w-auto object-contain" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block bg-clip-text text-transparent" style={{
                backgroundImage: 'var(--gradient-primary)'
              }}>
                  Онлайн-запись клиентов
                </span>
                <span className="block mt-2">
                  на ваши услуги
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Забудьте о звонках и пропущенных клиентах. Все записи — в одном месте, прямо в телефоне ваших клиентов. Всего за 500 рублей в месяц.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="text-base font-semibold px-8" style={{
                background: 'var(--gradient-primary)'
              }} asChild>
                  <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                    Демо записи в telegram
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold px-8" asChild>
                  <a href="https://app.2minutes.ru/book/demo" target="_blank" rel="noopener noreferrer">
                    Демо записи по ссылке
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[213px] lg:max-w-[240px]">
                <img src={telegramMockup} alt="Telegram мини-приложение для записи" className="w-full h-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;