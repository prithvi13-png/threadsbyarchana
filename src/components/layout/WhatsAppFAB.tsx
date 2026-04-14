import { SITE_CONFIG } from "@/data/siteConfig";
import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => (
  <a
    href={SITE_CONFIG.whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppFAB;
