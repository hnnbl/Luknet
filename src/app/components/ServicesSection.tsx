import { Headphones, FileText, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'Suporte',
    description: 'Atendimento personalizado para resolver suas dúvidas e garantir o sucesso do seu projeto.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Bem Documentado',
    description: 'Documentação completa e detalhada para facilitar o uso e manutenção do seu sistema.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Tempo de Resposta',
    description: 'Agilidade no desenvolvimento e entrega de soluções dentro do prazo estabelecido.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Segurança da Web',
    description: 'Proteção avançada e boas práticas de segurança para manter seus dados protegidos.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 px-6">
      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-purple-300">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Serviços
            </span>{' '}
            <span className="text-white">Premium</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Soluções construídas para durar — não para entregar e esquecer.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}