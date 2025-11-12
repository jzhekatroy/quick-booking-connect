const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2">
              <span className="text-muted-foreground whitespace-nowrap">Телефон:</span>
              <a href="tel:+74996660123" className="text-primary hover:underline">+7 (499) 666-01-23</a>

              <span className="text-muted-foreground whitespace-nowrap">Email:</span>
              <a href="mailto:i@2minutes.ru" className="text-primary hover:underline">i@2minutes.ru</a>

              <span className="text-muted-foreground whitespace-nowrap">Telegram канал:</span>
              <a href="https://t.me/news_2minutes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@news_2minutes</a>

              <span className="text-muted-foreground whitespace-nowrap">Поддержка:</span>
              <a href="https://t.me/help_2minutes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@help_2minutes</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a href="/offer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Оферта
                </a>
              </li>
              <li>
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Использование Cookie
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
