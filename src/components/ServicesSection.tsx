import { GraduationCap, FileCheck, Plane, Users } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Application Support",
    description:
      "Guiding students through the complexities of international admissions.",
  },
  {
    icon: FileCheck,
    title: "Visa Application Assistance",
    description:
      "Providing structured support to ensure accurate and complete submissions.",
  },
  {
    icon: Plane,
    title: "Travel Documentation",
    description:
      "Preparing and organizing all necessary travel paperwork.",
  },
  {
    icon: Users,
    title: "End-to-End Admin Support",
    description:
      "Assisting individuals seeking to study, visit, or travel internationally.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-navy section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-foreground/70 max-w-2xl mx-auto">
            Comprehensive support tailored to your international journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-gold-border group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border border-primary group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-card-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
