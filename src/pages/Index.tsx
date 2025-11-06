import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import FeatureSection from "@/components/FeatureSection";

import bookingDemo from "@/assets/booking-demo.mp4";
import appointmentsManagement from "@/assets/appointments-management-new.jpg";
import notifications from "@/assets/notifications-new.jpg";
import employeeSchedule from "@/assets/employee-schedule.png";
import adminDashboard from "@/assets/admin-dashboard.png";
import analytics from "@/assets/analytics.png";
import crossPlatform from "@/assets/cross-platform.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        
        <div id="features" className="space-y-0">
          <FeatureSection
            title="Простая запись в 3 клика"
            description="Telegram (скоро MAX) автоматически подтягивают данные клиента — никаких форм с номером телефона, почтой или адресом. Клиент просто выбирает услугу, мастера и время."
            video={bookingDemo}
          />

          <FeatureSection
            title="Управление записями без звонков"
            description="Клиенты видят свои активные записи и могут самостоятельно их отменить или перенести прямо в Telegram, без необходимости звонить администратору. Это экономит время и для клиента, и для вас."
            image={appointmentsManagement}
            reverse
          />

          <FeatureSection
            title="Бесплатные и безлимитные уведомления клиентам"
            description="Система автоматически отправляет подтверждение записи, напоминания о визите и рассылки с акциями. Отправляйте сколько угодно сообщений без дополнительной платы — всё уже включено в тариф."
            image={notifications}
          />

          <FeatureSection
            title="Уведомления сотрудникам и просмотр расписания"
            description="Сотрудники получают мгновенные уведомления о новых записях и изменениях в их расписании прямо в Telegram, а также напоминания о том, что скоро начинается визит клиента. Могут в любой момент открыть свой график на день, неделю или месяц — видеть всех клиентов, услуги и время визитов. Всё под рукой, всегда актуально."
            image={employeeSchedule}
            reverse
          />

          <FeatureSection
            title="Рабочее место администратора"
            description="Удобный интерфейс для управления записями, клиентами и расписанием. Вся информация в одном месте, доступ с любого устройства."
            image={adminDashboard}
          />

          <FeatureSection
            title="Гибкая аналитика"
            description="Отслеживайте ключевые показатели вашего бизнеса: количество записей, популярные услуги, загруженность по дням недели."
            image={analytics}
            reverse
          />

          <FeatureSection
            title="Нет необходимости разрабатывать свое приложение"
            description="Очень низкий порог вхождения, не нужны специалисты. Все работает через Telegram и МАХ, которые есть у всех, на разных платформах ПК, телефон с разными ОС и даже веб версия."
            image={crossPlatform}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
