const BookingMethods = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-center mb-16">
            Как происходит запись? Выбирайте удобный формат!
          </h2>
          
          <div className="space-y-16">
            {/* Telegram Mini App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Через мини-приложение в Telegram <span className="text-muted-foreground text-lg">(скоро через мессенджер MAX)</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Полная функциональность в одном месте. Ваши клиенты могут записываться, получать уведомления и отменять визиты, не покидая любимый мессенджер. Это самый современный и удобный способ.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-muted/50 rounded-3xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">Место для скриншота<br/>интерфейса Telegram</p>
                </div>
              </div>
            </div>

            {/* Classic Link */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Классическая ссылка для записи
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Разместите ссылку в соцсетях, на сайте или в подписи к email. Просто, понятно и работает на любом устройстве.
                </p>
              </div>
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] bg-muted/50 rounded-3xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">Место для скриншота<br/>веб-интерфейса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingMethods;
