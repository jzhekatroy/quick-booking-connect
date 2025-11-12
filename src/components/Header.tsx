import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="2Minutes" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="default" variant="outline" className="text-sm font-semibold" asChild>
              <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                Демонстрация
              </a>
            </Button>
            <Button size="default" className="text-sm font-semibold" style={{
              background: 'var(--gradient-primary)'
            }} asChild>
              <a href="https://app.2minutes.ru/login" target="_blank" rel="noopener noreferrer">
                Начать бесплатно
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <Button 
                  size="default"
                  variant="outline" 
                  className="w-full text-sm font-semibold" 
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a href="https://t.me/demo_2min_bot" target="_blank" rel="noopener noreferrer">
                    Демонстрация
                  </a>
                </Button>
                <Button 
                  size="default"
                  className="w-full text-sm font-semibold" 
                  style={{
                    background: 'var(--gradient-primary)'
                  }} 
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a href="https://app.2minutes.ru/login" target="_blank" rel="noopener noreferrer">
                    Начать бесплатно
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
