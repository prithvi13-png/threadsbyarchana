import Container from "@/components/common/Container";

const PrivacyPolicy = () => (
  <section className="py-16 md:py-24">
    <Container className="max-w-3xl">
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
        <p>At Threads by Archana, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Information We Collect</h2>
        <p>We may collect your name, phone number, email address, and messaging details when you contact us for orders or enquiries via phone, WhatsApp, or our contact form.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">How We Use Your Information</h2>
        <p>Your information is used solely to process your enquiries, assist with orders, and provide personalised service. We do not sell or share your personal data with third parties.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Data Security</h2>
        <p>We implement reasonable measures to protect your personal information from unauthorised access. However, no method of transmission over the internet is 100% secure.</p>
        
        <h2 className="font-serif text-xl text-foreground mt-8 mb-3">Contact</h2>
        <p>For any privacy-related questions, please contact us at hello@threadsbyarchana.com.</p>
        
        <p className="text-xs text-muted-foreground mt-10">Last updated: April 2026</p>
      </div>
    </Container>
  </section>
);

export default PrivacyPolicy;
