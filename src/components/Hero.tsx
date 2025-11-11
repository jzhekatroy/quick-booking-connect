import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
const Hero = () => {
  return <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="2Minutes" className="h-16 sm:h-20 lg:h-24 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block bg-clip-text text-transparent" style={{
            backgroundImage: 'var(--gradient-primary)'
          }}>Онлайн-запись клиентов</span>
            <span className="block mt-2">
              на ваши услуги
            </span>
          </h1>
          <div className="text-xl lg:text-2xl text-muted-foreground mx-auto space-y-2">
            <p>Простая и функциональная система бронирования заказов в мобильном телефоне.</p>
            <p>Забудьте о рутине и взаимодействуйте с клиентами удобным для них способом</p>
            <p><strong className="font-bold">всего за 500 рублей в месяц (на одного мастера).</strong></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base font-semibold px-8 min-w-[200px]" style={{
            background: 'var(--gradient-primary)'
          }} asChild>
              <a href="https://app.2minutes.ru/login" target="_blank" rel="noopener noreferrer">
                Начать бесплатно
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 min-w-[200px]" asChild>
              <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                Демонстрация
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;