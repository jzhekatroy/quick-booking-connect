import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Offer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Публичная оферта — 2Minutes</title>
        <meta name="description" content="Публичная оферта сервиса 2Minutes: условия, тарифы, порядок оплаты и расторжения, реквизиты оператора." />
        <link rel="canonical" href="https://2minutes.ru/offer" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">ПУБЛИЧНАЯ ОФЕРТА</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="mb-6">
              Настоящий документ является официальным публичным предложением Индивидуального предпринимателя Троянова Евгения Григорьевича (далее — «Оператор»), адресованным любому лицу (далее — «Пользователь»), заинтересованному в получении услуг онлайн-бронирования.
            </p>
            <p className="mb-6">
              Принятие условий оферты и оплата услуги означает полное и безусловное согласие Пользователя с условиями данной оферты и заключение договора оферты на нижеследующих условиях.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Предмет оферты</h2>
              <p className="mb-4">
                <strong>1.1.</strong> Оператор предоставляет Пользователю услугу онлайн-бронирования сотрудников в рамках тарифного плана: 500 рублей за одного сотрудника в месяц, минимум два сотрудника. Первые 30 календарных дней использования услуги предоставляются бесплатно.
              </p>
              <p>
                <strong>1.2.</strong> Услуга доступна для пользователей по адресу: г. Новосибирск.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Порядок заключения договора</h2>
              <p className="mb-4">
                <strong>2.1.</strong> Договор считается заключенным с момента акцепта оферты, который осуществляется Пользователем путем оплаты услуги или подтверждения заказа через сайт.
              </p>
              <p>
                <strong>2.2.</strong> Акцепт оферты равносилен заключению договора между Оператором и Пользователем на условиях настоящей оферты.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Права и обязанности сторон</h2>
              <p className="mb-4">
                <strong>3.1.</strong> Оператор обязуется:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2 mb-4">
                <li>Обеспечить надлежащее функционирование сервиса в соответствии с заявленным функционалом;</li>
                <li>Предоставить доступ к оплаченным услугам;</li>
                <li>Обеспечивать конфиденциальность персональных данных Пользователя.</li>
              </ul>
              <p className="mb-4">
                <strong>3.2.</strong> Пользователь обязуется:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2 mb-4">
                <li>Предоставлять достоверные данные при регистрации;</li>
                <li>Оплачивать услуги своевременно;</li>
                <li>Не использовать сервис в целях, нарушающих законодательство РФ.</li>
              </ul>
              <p className="mb-4">
                <strong>3.3.</strong> Пользователь имеет право:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Использовать сервис в рамках выбранного тарифа;</li>
                <li>Расторгнуть договор, уведомив Оператора в соответствии с условиями.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Цена и порядок оплаты</h2>
              <p className="mb-4">
                <strong>4.1.</strong> Стоимость услуги составляет 500 рублей за одного сотрудника в месяц при минимальном заказе на двух сотрудников.
              </p>
              <p className="mb-4">
                <strong>4.2.</strong> Оплата производится Пользователем на расчетный счет Оператора, реквизиты которого указаны в данном документе.
              </p>
              <p>
                <strong>4.3.</strong> Бесплатный период использования услуги — 30 дней с момента активации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Срок действия договора и расторжение</h2>
              <p className="mb-4">
                <strong>5.1.</strong> Договор действует с момента акцепта оферты и действует до прекращения использования услуги.
              </p>
              <p>
                <strong>5.2.</strong> Пользователь вправе расторгнуть договор в любое время, уведомив оператора по электронной почте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Ответственность сторон</h2>
              <p className="mb-4">
                <strong>6.1.</strong> Оператор не несет ответственности за убытки, возникшие в результате использования сервиса по причинам, не зависящим от Оператора.
              </p>
              <p>
                <strong>6.2.</strong> Пользователь несет ответственность за достоверность предоставленных данных и соблюдение условий оферты.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Прочие условия</h2>
              <p className="mb-4">
                <strong>7.1.</strong> Оператор вправе вносить изменения в оферту, уведомляя Пользователей путем размещения обновленной версии на сайте.
              </p>
              <p>
                <strong>7.2.</strong> Все споры решаются в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Реквизиты</h2>
              <div className="space-y-2">
                <p>Индивидуальный предприниматель Троянов Евгений Григорьевич</p>
                <p>ИНН: 545210707901</p>
                <p>Расчётный счёт: 40802810820000676746</p>
                <p>Банк: ООО "Банк Точка"</p>
                <p>БИК: 044525104</p>
                <p>Корреспондентский счёт: 30101810745374525104</p>
                <p>Контактная почта: <a href="mailto:i@2minutes.ru" className="text-primary hover:underline">i@2minutes.ru</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offer;

