import { 
  CheckCircle, Lock, KeyRound, Shield, Eye, Smartphone, Wifi, AlertTriangle 
} from "lucide-react";

export default function BoasPraticasPage() {
  const practices = [
    {
      icon: KeyRound,
      title: "Use Senhas Fortes",
      desc: "Evite datas, nomes e padrões previsíveis. Utilize combinações longas com números, letras e símbolos.",
    },
    {
      icon: Lock,
      title: "Ative Autenticação de 2 Fatores",
      desc: "Mesmo que sua senha vaze, o atacante não consegue entrar sem o segundo código.",
    },
    {
      icon: Eye,
      title: "Verifique Links e URLs",
      desc: "Golpes de phishing usam URLs falsas. Confira se o endereço possui HTTPS e não contém erros.",
    },
    {
      icon: Smartphone,
      title: "Baixe Apps Somente das Lojas Oficiais",
      desc: "Evite APKs de grupos ou sites desconhecidos. Muitos contêm vírus.",
    },
    {
      icon: Wifi,
      title: "Cuidado com Wi-Fi Público",
      desc: "Redes abertas podem interceptar seus dados. Evite logins sensíveis nesse tipo de conexão.",
    },
    {
      icon: Shield,
      title: "Mantenha Dispositivos Atualizados",
      desc: "As atualizações corrigem falhas de segurança exploradas por atacantes.",
    },
    {
      icon: AlertTriangle,
      title: "Desconfie de Ofertas 'Boas Demais'",
      desc: "Golpes usam promoções irreais para atrair vítimas. Sempre verifique a fonte.",
    },
    {
      icon: CheckCircle,
      title: "Pense Antes de Postar",
      desc: "Evite expor localização, rotina ou documentos. Sua privacidade é valiosa.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 max-w-6xl mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        Boas Práticas de Segurança
      </h1>

      <p className="text-foreground/70 text-center max-w-2xl mx-auto mt-4 text-lg">
        Adotar hábitos simples pode impedir golpes, roubos de dados e ataques online. 
        Aqui estão as práticas essenciais para manter sua navegação segura.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {practices.map((item, index) => {
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
