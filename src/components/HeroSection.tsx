import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen section-navy flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional in modern city"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Gold accent line */}
          <div className="gold-line mb-8 animate-fade-in-up" />

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Your Future,
            <br />
            <span className="text-primary">Delivered.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your Trusted Relocation Support. UK-registered assistance for 
            international travel, study, and visa applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollToSection("cta")}
              className="btn-gold"
            >
              Start Your Application
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="btn-navy"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
