import Image from "next/image";

const members = [
  {
    name: "José Lucas",
    role: "Desenvolvedor Full Stack",
    img: "/team/lucas.jpg", 
  },
  {
    name: "Maria Souza",
    role: "Analista de Segurança",
    img: "/team/maria.jpg",
  },
  {
    name: "Pedro Almeida",
    role: "Especialista em Redes",
    img: "/team/pedro.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Nosso Time
        </h2>

        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          Pessoas comprometidas em ensinar e criar consciência sobre segurança digital.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {members.map((member) => (
            <div 
              key={member.name}
              className="flex flex-col items-center bg-card border border-border p-6 rounded-xl shadow-sm"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border border-border mb-4">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {member.name}
              </h3>

              <p className="text-foreground/70">{member.role}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
