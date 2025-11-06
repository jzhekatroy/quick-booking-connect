import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
const Hero = () => {
  return <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">Забудьте о звонках и пропущенных клиентах. Все записи — в одном месте, прямо в телефоне ваших клиентов.</p>
          <p className="text-xl lg:text-2xl font-bold max-w-2xl mx-auto">Всего за 500 рублей в месяц.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base font-semibold px-8" style={{
            background: 'var(--gradient-primary)'
          }}>
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8" asChild>
              <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                Попробовать запись
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;