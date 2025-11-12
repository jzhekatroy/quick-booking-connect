import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Политика конфиденциальности — 2Minutes</title>
        <meta name="description" content="Политика конфиденциальности сервиса 2Minutes: данные, цели обработки, защита, права пользователя и контакты." />
        <link rel="canonical" href="https://2minutes.ru/privacy-policy" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Общие положения</h2>
              <p className="mb-4">
                <strong>1.1.</strong> Настоящая Политика конфиденциальности (далее — «Политика») разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и регулирует порядок обработки и защиты персональных данных пользователей сервиса онлайн-бронирования (далее — «Пользователь»).
              </p>
              <p>
                <strong>1.2.</strong> Оператор сервиса — Индивидуальный предприниматель Троянов Евгений Григорьевич, контактный телефон: <a href="tel:+74996660123" className="text-primary hover:underline">+7 (499) 666-01-23</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Собираемые данные</h2>
              <p className="mb-4">
                <strong>2.1.</strong> Сервис собирает следующие персональные данные Пользователей: имя, адрес электронной почты (email).
              </p>
              <p>
                <strong>2.2.</strong> Данные собираются при регистрации на сайте через формы регистрации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Цели обработки данных</h2>
              <p>
                <strong>3.1.</strong> Обработка персональных данных осуществляется с целью:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>регистрации Пользователя для доступа к сервису;</li>
                <li>связи с Пользователем (уведомления, рассылки, информирование);</li>
                <li>смены пароля и обеспечения безопасности аккаунта.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Законные основания обработки</h2>
              <p>
                <strong>4.1.</strong> Обработка персональных данных производится с согласия Пользователя, выраженного при регистрации и использовании сервиса.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Срок хранения данных</h2>
              <p className="mb-4">
                <strong>5.1.</strong> Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки, но не менее 3 лет после окончания использования сервиса.
              </p>
              <p>
                <strong>5.2.</strong> По истечении этого срока данные будут уничтожены или обезличены.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Защита данных</h2>
              <p className="mb-4">
                <strong>6.1.</strong> Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
              <p>
                <strong>6.2.</strong> Передача данных третьим лицам не осуществляется.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Права Пользователя</h2>
              <p className="mb-4">
                <strong>7.1.</strong> Пользователь имеет право:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>получать информацию о своих персональных данных и целях их обработки;</li>
                <li>требовать уточнения, блокировки или удаления данных;</li>
                <li>отзывать согласие на обработку персональных данных;</li>
                <li>обращаться с жалобами на обработку данных в уполномоченные органы.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Контактная информация</h2>
              <p>
                <strong>8.1.</strong> По всем вопросам, связанным с обработкой персональных данных, Пользователь может обращаться к Оператору по телефону <a href="tel:+74996660123" className="text-primary hover:underline">+7 (499) 666-01-23</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

