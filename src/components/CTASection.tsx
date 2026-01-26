const CTASection = () => {
  return (
    <section id="cta" className="section-gold section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Get professional support for your travel and study plans today.
        </p>
        <button className="bg-background text-foreground font-body font-semibold px-10 py-5 uppercase tracking-wider text-sm transition-all duration-300 hover:bg-foreground hover:text-background">
          Book Your Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;
