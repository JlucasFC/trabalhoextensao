import { 
  MailWarning, LockKeyhole, FileWarning, ShieldAlert, GlobeLock, Network, Bug, Key 
} from "lucide-react";

export default function AtaquesFamososPage() {
  const attacks = [
    {
      icon: MailWarning,
      title: "Phishing",
      desc: "Golpe que usa links falsos enviados por e-mail, WhatsApp ou redes sociais para roubar senhas e informações pessoais.",
      example: "Exemplo: mensagem falsa do banco pedindo atualização de dados.",
    },
    {
      icon: LockKeyhole,
      title: "Ransomware",
      desc: "Vírus que sequestra dados e exige pagamento (geralmente em criptomoedas) para liberar o acesso.",
      example: "Ex.: WannaCry afetou hospitais e empresas no mundo inteiro.",
    },
    {
      icon: FileWarning,
      title: "Malware",
      desc: "Programas maliciosos instalados sem permissão para roubar dados, espionar ou causar danos.",
      example: "Frequentemente escondidos em downloads piratas e jogos modificados.",
    },
    {
      icon: ShieldAlert,
      title: "Engenharia Social",
      desc: "Manipulação psicológica para enganar usuários e fazê-los entregar informações confidenciais.",
      example: "Atacante finge ser um funcionário do suporte para conseguir sua senha.",
    },
    {
      icon: Network,
      title: "Ataques em Wi-Fi Público",
      desc: "Hackers interceptam dados trafegados em redes abertas e desprotegidas.",
      example: "Roubo de senhas ao fazer login em redes públicas de shoppings e aeroportos.",
    },
    {
      icon: GlobeLock,
      title: "DNS Spoofing",
      desc: "Desvia o acesso do usuário para sites falsos mesmo digitando o endereço correto.",
      example: "Digitando ‘banco.com’, o usuário é levado para uma página falsa idêntica.",
    },
    {
      icon: Bug,
      title: "Exploração de Vulnerabilidades",
      desc: "Ataques que aproveitam falhas em sistemas, aplicativos ou servidores desatualizados.",
      example: "Falhas zero-day que permitem invasão sem que o fabricante saiba.",
    },
    {
      icon: Key,
      title: "Keylogger",
      desc: "Programa que registra tudo que o usuário digita, capturando senhas e conversas.",
      example: "Comum em computadores compartilhados e pen drives infectados.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 max-w-6xl mx-auto">

      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        Ataques Famosos
      </h1>

      <p className="text-foreground/70 text-center max-w-2xl mx-auto mt-4 text-lg">
        Conheça os tipos de ataques mais comuns usados por hackers para roubar dados, 
        invadir sistemas e aplicar golpes.
      </p>

      {/* Lista de ataques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {attacks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-xl shadow-lg hover:border-accent transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 border border-accent/30 rounded-lg">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>

              <p className="mt-4 text-foreground/70 leading-relaxed">
                {item.desc}
              </p>

              <p className="mt-3 text-sm text-foreground/50 italic">
                {item.example}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
