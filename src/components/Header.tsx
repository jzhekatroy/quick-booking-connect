import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="2Minutes" className="h-10 w-auto" />
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
