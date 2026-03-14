import { useState } from 'react';
import { Bot, Workflow, Plug, Code2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Automação com IA',
    description: 'Agentes inteligentes que trabalham 24/7 — triagem de leads, respostas automáticas, decisões baseadas em dados.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Workflow,
    title: 'Fluxos n8n',
    description: 'Workflows visuais que conectam seus sistemas sem escrever uma linha de código. Do CRM ao WhatsApp em minutos.',
    color: 'from-purple-500 to-fuchsia-600',
  },
  {
    icon: Plug,
    title: 'Integração de APIs',
    description: 'Conectamos qualquer plataforma — ERP, e-commerce, WhatsApp, bancos — em pipelines robustos e confiáveis.',
    color: 'from-fuchsia-500 to-violet-600',
  },
  {
    icon: Code2,
    title: 'Backend Python',
    description: 'Scripts, bots e serviços back-end em Python que automatizam processos repetitivos e liberam sua equipe.',
    color: 'from-violet-600 to-purple-500',
  },
];

export function ServicesSection() {
  const [tilts, setTilts] = useState<{ x: number; y: number }[]>(
    services.map(() => ({ x: 0, y: 0 }))
  );

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
              O que
            </span>{' '}
            <span className="text-white">eu construo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Automações que eliminam trabalho manual e sistemas que escalam com o seu negócio.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} style={{ perspective: '800px' }}>
                <div
                  className="group relative bg-gradient-to-br from-[#0d0d1a] to-[#130d2a] backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
                    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 15;
                    setTilts(prev => prev.map((t, i) => i === index ? { x, y } : t));
                  }}
                  onMouseLeave={() => setTilts(prev => prev.map((t, i) => i === index ? { x: 0, y: 0 } : t))}
                  style={{
                    transform: `rotateX(${tilts[index].x}deg) rotateY(${tilts[index].y}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                >
                  {/* Holographic top highlight line */}
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent rounded-full" />

                  {/* Holographic shimmer overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
