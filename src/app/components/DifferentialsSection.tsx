import { Code2, Zap, Server, Users } from 'lucide-react';

const differentials = [
  {
    icon: Code2,
    title: 'Desenvolvimento moderno',
    description: 'Utilizamos as tecnologias mais atuais do mercado para criar soluções inovadoras e escaláveis.',
  },
  {
    icon: Zap,
    title: 'Sites rápidos e responsivos',
    description: 'Performance otimizada e design adaptável para todos os dispositivos e tamanhos de tela.',
  },
  {
    icon: Server,
    title: 'Infraestrutura segura',
    description: 'Hospedagem confiável com segurança de ponta e backups automáticos.',
  },
  {
    icon: Users,
    title: 'Suporte técnico especializado',
    description: 'Equipe dedicada pronta para ajudar você sempre que precisar.',
  },
];

export function DifferentialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"></div>
        {/* Tech lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-orange-300">Nossos Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Por que escolher a </span>
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Luknet
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex gap-6 p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}