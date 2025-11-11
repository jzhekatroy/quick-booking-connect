import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="2Minutes" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-sm font-semibold" asChild>
              <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                Демонстрация
              </a>
            </Button>
            <Button className="text-sm font-semibold" style={{
              background: 'var(--gradient-primary)'
            }} asChild>
              <a href="https://app.2minutes.ru/login" target="_blank" rel="noopener noreferrer">
                Начать бесплатно
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
