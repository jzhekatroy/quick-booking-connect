import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";

import bookingDemo from "@/assets/67.MP4";
import appointmentsManagement from "@/assets/66.jpg";
import notifications from "@/assets/notifications-new.jpg";
import employeeSchedule from "@/assets/41.jpg";
import adminDashboard from "@/assets/42.png";
import analytics from "@/assets/55.png";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <div id="features" className="space-y-0">
          <FeatureSection
            title="Простая запись в 3 клика"
            description="Очень простая механика работы виджета - клиент выбирает услугу, мастера и время. Telegram и MAX автоматически передает данные клиента при заявке - никаких форм с номером телефона, электронной почтой или адресом."
            video={bookingDemo}
          />

          <FeatureSection
            title="Управление записями без звонков"
            description="Клиенты заказывают услуги и управляют активными бронями полностью в автоматическом режиме. Они видят свои текущие записи и могут самостоятельно их отменить или перенести прямо в Telegram, без необходимости звонить администратору. Это экономит время и для клиента, и для вас."
            image={appointmentsManagement}
            reverse
          />

          <FeatureSection
            title="Бесплатные и безлимитные уведомления клиентам"
            description="Система автоматически отправляет подтверждение записи, напоминания о визите и рассылки с акциями. Отправляйте сколько угодно сообщений без дополнительной платы — всё уже включено в тариф. Любые действия с заказами фиксируются в Telegram боте, никаких неожиданных ."
            image={notifications}
          />

          <FeatureSection
            title="Уведомления сотрудникам и просмотр расписания"
            description="Мастера, к которым записались клиенты, получают мгновенные уведомления о новых записях и изменениях в их расписании прямо в Telegram, а также напоминания о том, что скоро начинается визит клиента. Сотрудники могут в любой момент открыть свой график на день, неделю или месяц и видеть все брони клиентов, заказанные услуги и время визитов. Всё под рукой, обновляется автоматически, всегда актуально."
            image={employeeSchedule}
            reverse
          />

          <FeatureSection
            title="Рабочее место администратора"
            description="Удобный интерфейс для управления записями, клиентами и расписанием. Детальная настройка услуг, доступных к бронированию, группировки предложений, гибкое управление клиентскими уведомлениями, настройка информирования мастеров о запланированных заказах. Вся информация в одном месте, доступ с любого устройства."
            image={adminDashboard}
          />

          <FeatureSection
            title="Гибкая аналитика"
            description="Отслеживайте ключевые показатели вашего бизнеса. Смотрите в Личном кабинете текущие и прошедшие записи, анализируйте их динамику, популярные услуги, загруженность салона и мастеров по дням недели, рассчитывайте заработную плату мастеров по фактически выполненным работам. Гибкие возможности маркетинговых активностей по существующей клиентской базе на базе статистических данных."
            image={analytics}
            reverse
          />

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
