import Container from "@/components/common/Container";

const TermsConditions = () => (
  <section className="py-16 md:py-24">
    <Container className="max-w-3xl">
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Terms & Conditions</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
        <p>By accessing and using the Threads by Archana website, you agree to be bound by these terms and conditions.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Products & Enquiries</h2>
        <p>All products displayed on this website are part of our curated catalogue. Please contact us on WhatsApp for current availability, product details, and order enquiries.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Ordering</h2>
        <p>Orders are placed directly via phone or WhatsApp. This website does not process online payments or orders. All orders are subject to availability and confirmation by our team.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Availability</h2>
        <p>Product availability is subject to change. We recommend contacting us to confirm availability before placing an order, especially for limited-edition or bridal pieces.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Intellectual Property</h2>
        <p>All content on this website, including images, text, and designs, is the property of Threads by Archana and may not be reproduced without permission.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Contact</h2>
        <p>For any queries regarding these terms, please reach out at hello@threadsbyarchana.com.</p>
        
        <p className="text-xs text-muted-foreground mt-10">Last updated: April 2026</p>
      </div>
    </Container>
  </section>
);

export default TermsConditions;
