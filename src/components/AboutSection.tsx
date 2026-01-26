import aboutImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Professional team meeting"
                className="w-full h-auto object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="gold-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              About Loliter Travels
            </h2>
            <p className="font-body text-base md:text-lg text-secondary-foreground/80 leading-relaxed mb-8">
              Loliter Travels Ltd is a UK-registered travel and education support company 
              providing structured assistance for international travel, study, and visa 
              applications. We support clients with application preparation, documentation 
              organisation, and official process guidance while maintaining transparency, 
              compliance, and client control at every stage.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-secondary-foreground">UK-Registered Company</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-secondary-foreground">Full Compliance & Transparency</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary" />
                <span className="font-body text-secondary-foreground">Client-Controlled Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
