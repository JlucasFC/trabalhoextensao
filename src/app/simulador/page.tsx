"use client";

import { useState } from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";

export default function SimuladorPhishingPage() {
  const scenarios = [
    {
      question: "Qual desses links é falso?",
      options: [
        { text: "https://www.nubank.com.br", fake: false },
        { text: "https://nubank-atendimento-pix.com", fake: true },
      ],
    },
    {
      question: "Qual link é golpe?",
      options: [
        { text: "https://www.netflix.com/br/login", fake: false },
        { text: "https://netfIix-login-br.com", fake: true }, // i maiúsculo no lugar do L
      ],
    },
    {
      question: "Identifique o site falso:",
      options: [
        { text: "https://www.amazon.com.br/ofertas", fake: false },
        { text: "https://amazon-bra-oficial.store", fake: true },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [result, setResult] = useState<null | "correct" | "wrong">(null);

  const handleAnswer = (fake: boolean) => {
    if (fake) setResult("correct");
    else setResult("wrong");

    setTimeout(() => {
      setResult(null);
      setStep((prev) => (prev + 1 < scenarios.length ? prev + 1 : 0));
    }, 1500);
  };

  const current = scenarios[step];

  return (
    <section className="w-full py-20 px-6 max-w-4xl mx-auto">

      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        Simulador de Phishing
      </h1>

      <p className="text-foreground/70 text-center max-w-2xl mx-auto mt-4 text-lg">
        Você consegue identificar um golpe?  
        Escolha o link falso em cada cenário.
      </p>

      {/* CARD DO CENÁRIO */}
      <div className="bg-card border border-border p-8 rounded-xl shadow-xl mt-16">
        <h2 className="text-2xl font-semibold text-foreground text-center">
          {current.question}
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          {current.options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(opt.fake)}
              className="
                w-full py-4 px-4 rounded-lg border border-border bg-background 
                text-left text-foreground hover:border-accent transition
              "
            >
              {opt.text}
            </button>
          ))}
        </div>

        {/* FEEDBACK */}
        {result && (
          <div className="mt-10 text-center">
            {result === "correct" ? (
              <div className="text-green-500 flex items-center justify-center gap-2 text-xl font-semibold">
                <ShieldCheck /> Correto! 🎉
              </div>
            ) : (
              <div className="text-red-500 flex items-center justify-center gap-2 text-xl font-semibold">
                <ShieldAlert /> Você caiu no golpe! 😬
              </div>
            )}
          </div>
        )}
      </div>

    </section>
  );
}
