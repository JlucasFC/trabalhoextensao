import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">

      {/* GRID DIGITAL (FUNDO) */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      {/* SCAN EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        <div className="p-3 rounded-full bg-accent/10 border border-accent/30 mb-6">
          <ShieldCheck className="w-10 h-10 text-accent" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
          Segurança Digital Simples,
          <span className="text-accent"> para Todos.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
          Aprenda a se proteger de golpes, ataques e vazamentos de dados.
          Informações claras e práticas para manter sua vida online segura.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/praticas"
            className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition"
          >
            Começar Agora
          </Link>

          <Link
            href="/ataques-famosos"
            className="px-8 py-3 border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition"
          >
            Ver Riscos
          </Link>
        </div>
      </div>
    </section>
  );
}
  