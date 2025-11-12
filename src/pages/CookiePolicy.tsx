import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Использование Cookie — 2Minutes</title>
        <meta name="description" content="Политика использования файлов cookie в 2Minutes: типы cookie, согласие, сроки хранения и контакты." />
        <link rel="canonical" href="https://2minutes.ru/cookie-policy" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">ИСПОЛЬЗОВАНИЕ COOKIE</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="mb-6">
              Файлы cookie — это небольшие текстовые файлы, которые наш сайт сохраняет на вашем устройстве при посещении. Они помогают запоминать ваши настройки и предпочтения, обеспечивать корректную работу сайта, а также анализировать использование сервиса для его улучшения.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Типы используемых файлов cookie</h2>
              <p className="mb-4">Мы используем следующие типы файлов cookie:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Необходимые файлы cookie:</strong> обеспечивают базовые функции сайта и его работу.</li>
                <li><strong>Аналитические файлы cookie:</strong> собирают информацию о том, как вы используете сайт, чтобы улучшать сервис.</li>
                <li><strong>Маркетинговые файлы cookie:</strong> позволяют показывать релевантную рекламу.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Согласие на использование</h2>
              <p>
                Используя наш сайт, вы даете согласие на использование файлов cookie в соответствии с этой политикой. Вы можете в любой момент изменить настройки cookie через ваш браузер или отозвать согласие.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Сроки хранения</h2>
              <p>
                Сроки хранения файлов cookie могут различаться: некоторые удаляются после закрытия браузера, другие сохраняются дольше для удобства.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Изменения в политике</h2>
              <p>
                Мы можем обновлять эту политику, и изменения будут опубликованы на этой странице.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Контакты</h2>
              <p>
                Если у вас есть вопросы, свяжитесь с нами по телефону <a href="tel:+74996660123" className="text-primary hover:underline">+7 (499) 666-01-23</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;

