import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
}

const FeatureSection = ({ title, description, image, reverse = false }: FeatureSectionProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" 
                   style={{ boxShadow: 'var(--shadow-medium)' }} />
              <img 
                src={image} 
                alt={title}
                className="relative rounded-3xl shadow-lg w-full h-auto"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
