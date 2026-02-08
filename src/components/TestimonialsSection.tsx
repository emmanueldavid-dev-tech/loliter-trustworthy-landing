import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze O.",
    role: "University Applicant",
    text: "Loliter Travels made the entire university application process seamless. Their guidance on documentation was invaluable and I got accepted into my dream school.",
    rating: 5,
  },
  {
    name: "Mohammed A.",
    role: "Visa Applicant",
    text: "Professional, thorough, and transparent. They helped me prepare my visa application with precision. I felt confident every step of the way.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Travel Client",
    text: "Their attention to detail with my travel documentation was outstanding. Everything was organized perfectly and the process was stress-free.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-secondary-foreground/70 max-w-2xl mx-auto">
            Real experiences from clients who trusted us with their journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-primary/20 p-8 relative hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-card-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-heading font-semibold text-card-foreground">
                  {t.name}
                </p>
                <p className="font-body text-sm text-card-foreground/60">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
