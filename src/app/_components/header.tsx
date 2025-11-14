"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/praticas", label: "Boas Práticas" },
    { href: "/famosos", label: "Ataques Famosos" },
    { href: "/simulador", label: "Simulador" },
    { href: "/consequencias", label: "Consequências" },
  ];

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg text-foreground">
            Segurança Web
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-foreground/80 hover:text-accent transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 flex flex-col gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-foreground/90 hover:text-accent transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
