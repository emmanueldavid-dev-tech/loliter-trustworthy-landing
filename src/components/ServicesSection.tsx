import serviceUniversity from "@/assets/service-university.jpg";
import serviceVisa from "@/assets/service-visa.jpg";
import serviceTravel from "@/assets/service-travel.jpg";
import serviceAdmin from "@/assets/service-admin.jpg";

const services = [
  {
    image: serviceUniversity,
    title: "University Application Support",
    description:
      "Guiding students through the complexities of international admissions.",
  },
  {
    image: serviceVisa,
    title: "Visa Application Assistance",
    description:
      "Providing structured support to ensure accurate and complete submissions.",
  },
  {
    image: serviceTravel,
    title: "Travel Documentation",
    description:
      "Preparing and organizing all necessary travel paperwork.",
  },
  {
    image: serviceAdmin,
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
          <p className="font-body text-foreground/70 max-w-2xl mx-auto font-light">
            Comprehensive support tailored to your international journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-primary bg-card transition-all duration-500 hover:shadow-[0_8px_40px_rgba(197,160,89,0.2)] hover:border-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-card-foreground/70 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
