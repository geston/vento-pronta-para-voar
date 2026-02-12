import { motion } from "framer-motion";
import { Wind, Snowflake, ThermometerSun, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Snowflake, label: "Split & Inverter" },
  { icon: Wind, label: "Diversos Modelos" },
  { icon: ThermometerSun, label: "Todas as Potências" },
  { icon: Phone, label: "Atendimento Especializado" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ComingSoonContent = () => {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl"
      >
        {/* Logo / Brand */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="font-heading text-lg font-semibold tracking-[0.3em] uppercase text-primary">
            Vento e Cia
          </h2>
          <p className="text-sm text-muted-foreground">www.ventoecia.com.br</p>
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            Em breve
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Estamos criando uma página{" "}
          <span className="text-gradient-brand">incrível</span> para você
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          Compre seu ar condicionado com os{" "}
          <span className="font-semibold text-foreground">
            melhores especialistas de Ribeirão Preto
          </span>
          .
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Enquanto isso, compre conosco diretamente pelo WhatsApp. Temos vários
          modelos, tipos e potências.{" "}
          <span className="font-semibold text-foreground">
            Precisa de um orçamento?
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mb-16 flex flex-col items-center gap-4">
          <WhatsAppButton />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 font-heading text-base font-semibold"
          >
            <a href="https://ventoecia.com.br">Retornar à Loja</a>
          </Button>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating WhatsApp FAB for mobile */}
      <a
        href={
          "https://wa.me/551636272590?text=" +
          encodeURIComponent(
            "Olá, estou em busca de ar condicionado e preciso de atendimento, com quem falo?"
          )
        }
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-glow sm:hidden"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default ComingSoonContent;
