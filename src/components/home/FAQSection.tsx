import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <Container className="max-w-3xl">
      <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about ordering with Threads by Archana." />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="font-serif text-left text-base md:text-lg hover:no-underline hover:text-accent-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-light leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </section>
);

export default FAQSection;
