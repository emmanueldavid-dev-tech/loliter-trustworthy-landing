import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  {
    question: "What documents do I need?",
    answer:
      "Document requirements vary by service. During your consultation, we provide a comprehensive checklist tailored to your specific application type.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Processing times depend on the service type and immigration authority workload. We keep you informed at every stage and work to expedite where possible.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-white section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-secondary-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary/30 bg-background/5 px-6"
            >
              <AccordionTrigger className="font-heading text-lg text-secondary-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-secondary-foreground/80 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
