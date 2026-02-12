import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551636272590?text=" +
  encodeURIComponent(
    "Olá, estou em busca de ar condicionado e preciso de atendimento, com quem falo?"
  );

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 font-heading text-lg font-bold text-whatsapp-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-105 active:scale-95 animate-pulse-glow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className="h-6 w-6" />
      Fale conosco no WhatsApp
    </motion.a>
  );
};

export default WhatsAppButton;
