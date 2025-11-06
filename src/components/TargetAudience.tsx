import { Check } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    "Салонам красоты и барбершопам",
    "Частным мастерам и специалистам на дому",
    "Медицинским центрам, остеопатам и косметологам",
    "Всем специалистам с фиксированной длительностью услуг (репетиторы, психологи, массажисты)"
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Для кого это?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg text-left flex-1">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
