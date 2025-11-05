import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="2Minutes" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
