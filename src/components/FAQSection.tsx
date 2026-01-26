import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqBackground from "@/assets/faq-background.jpg";

const faqs = [
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No. As a compliance-focused company, we do not guarantee outcomes. Visa decisions are made solely by immigration authorities. We ensure your application is perfectly prepared to maximize success.",
  },
  {
    question: "Are you a registered company?",
    answer:
      "Yes, Loliter Travels Ltd is fully registered in the United Kingdom.",
  },
  {
    question: "How does the consultation work?",
    answer:
      "We assess your profile, recommend the best pathway, and guide you through the documentation process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 lg:py-32">
      {/* Background Image with Gold Overlay */}
      <div className="absolute inset-0">
        <img
          src={faqBackground}
          alt="Professional meeting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-primary-foreground mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Modern Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                backdrop-blur-sm bg-background/10 border border-primary-foreground/30
                transition-all duration-500 overflow-hidden
                ${openIndex === index ? 'bg-background/20' : 'hover:bg-background/15'}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-heading text-lg md:text-xl text-primary-foreground pr-4">
                  {faq.question}
                </span>
                <div className={`
                  flex-shrink-0 w-10 h-10 flex items-center justify-center
                  border border-primary-foreground/50 
                  transition-all duration-500
                  ${openIndex === index ? 'bg-primary-foreground rotate-180' : 'group-hover:border-primary-foreground'}
                `}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-primary' : 'text-primary-foreground'
                    }`} 
                  />
                </div>
              </button>
              
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-6 pb-6">
                  <div className="w-12 h-px bg-primary-foreground/30 mb-4" />
                  <p className="font-body text-primary-foreground/90 leading-relaxed font-light">
                    {faq.answer}
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

export default FAQSection;
