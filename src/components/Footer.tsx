const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-muted-foreground">
              Email: info@2minutes.app
            </p>
            <p className="text-muted-foreground">
              Telegram: @2minutes_support
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Оферта
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Обработка персональных данных
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">О сервисе</h3>
            <p className="text-muted-foreground">
              2Minutes — современный сервис онлайн-бронирования для вашего бизнеса
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          © {new Date().getFullYear()} 2Minutes. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
