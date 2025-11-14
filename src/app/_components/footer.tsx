import Link from "next/link";
import { Shield, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-semibold text-lg text-foreground">
              Segurança Web
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-foreground/70 hover:text-accent transition">
              Início
            </Link>
            <Link href="/praticas" className="text-foreground/70 hover:text-accent transition">
              Boas Práticas
            </Link>
            <Link href="/famosos" className="text-foreground/70 hover:text-accent transition">
              Ataques Famosos
            </Link>
            <Link href="/simulador" className="text-foreground/70 hover:text-accent transition">
              Simulador
            </Link>
            <Link href="/consequencias" className="text-foreground/70 hover:text-accent transition">
              Consequências
            </Link>
          </nav>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <a 
              href="https://github.com"
              target="_blank"
              className="text-foreground/70 hover:text-accent transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contato@email.com"
              className="text-foreground/70 hover:text-accent transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-border my-6"></div>

        {/* COPYRIGHT */}
        <p className="text-sm text-foreground/60 text-center">
          © {new Date().getFullYear()} Segurança Web — Protegendo vidas online.
        </p>

      </div>
    </footer>
  );
}
