import { 
  UserX, CreditCard, EyeOff, AlertTriangle, BadgeInfo, LockOpen, Smartphone, Globe 
} from "lucide-react";

export default function ConsequenciasPage() {
  const consequences = [
    {
      icon: UserX,
      title: "Perda de Contas",
      desc: "Contas de redes sociais, jogos, e-mails e serviços podem ser roubadas e usadas para golpes.",
      example: "Golpistas usam contas invadidas para pedir dinheiro a amigos.",
    },
    {
      icon: CreditCard,
      title: "Golpes Financeiros",
      desc: "Criminosos usam seus dados vazados para realizar compras, criar cartões ou aplicar golpes via Pix.",
      example: "Cadastro de cartão de crédito em serviços sem autorização.",
    },
    {
      icon: EyeOff,
      title: "Vazamento de Fotos Pessoais",
      desc: "Imagens podem ser expostas, manipuladas ou usadas em golpes.",
      example: "Criminosos criam perfis falsos usando suas fotos.",
    },
    {
      icon: AlertTriangle,
      title: "Roubo de Identidade",
      desc: "Dados como CPF, e-mail e endereço permitem abrir contas falsas em seu nome.",
      example: "Pessoa descobre dívidas geradas por um criminoso.",
    },
    {
      icon: Smartphone,
      title: "Acesso ao Seu WhatsApp",
      desc: "Com número, tokens ou dados vazados, atacantes conseguem acessar conversas e contatos.",
      example: "Mensagens enviadas pedindo dinheiro ao seu nome.",
    },
    {
      icon: Globe,
      title: "Exposição em Sites Indevidos",
      desc: "Seus dados podem ser publicados em fóruns de crimes cibernéticos.",
      example: "Nome, CPF, telefone e até endereço circulando publicamente.",
    },
    {
      icon: LockOpen,
      title: "Invasão de Outros Serviços",
      desc: "Uma senha vazada pode abrir portas para várias contas se você usa a mesma em tudo.",
      example: "Invasão simultânea de e-mail, Instagram e banco.",
    },
    {
      icon: BadgeInfo,
      title: "Prejuízo na Reputação",
      desc: "Postagens e ações feitas por invasores podem prejudicar sua imagem pessoal ou profissional.",
      example: "Mensagens ofensivas enviadas por um invasor em seu perfil.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 max-w-6xl mx-auto">

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        Consequências de Dados Vazados
      </h1>

      <p className="text-foreground/70 text-center max-w-2xl mx-auto mt-4 text-lg">
        Quando seus dados caem nas mãos erradas, os impactos podem ir muito além de um simples 
        incômodo. Veja as principais consequências e como elas afetam sua vida digital.
      </p>

      {/* Lista */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {consequences.map((item, index) => {
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
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
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
    