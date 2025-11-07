import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  reverse?: boolean;
  children?: ReactNode;
}

const FeatureSection = ({ title, description, image, video, reverse = false }: FeatureSectionProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
            <div style={{ width: video ? '33.33%' : (image && (title === 'Управление записями без звонков' || title === 'Бесплатные и безлимитные уведомления клиентам' || title === 'Уведомления сотрудникам и просмотр расписания') ? '33.33%' : '100%') }}>
              {video ? (
                <video 
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-3xl w-full h-auto object-contain"
                />
              ) : (
                <img 
                  src={image} 
                  alt={title}
                  className="rounded-3xl w-full h-auto object-contain"
                />
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
