import { motion } from 'motion/react';
import { Code2, Zap, Server, Users } from 'lucide-react';

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const differentials = [
  {
    icon: Code2,
    title: 'Automação real, não só promessa',
    description:
      'Cada fluxo que entrego é testado em produção. Não vendo PowerPoint — entrego sistemas rodando que eliminam horas de trabalho manual por dia.',
  },
  {
    icon: Zap,
    title: 'Velocidade de entrega sem atalhos',
    description:
      'Uso Python, n8n e APIs battle-tested para entregar rápido sem criar dívida técnica. Você vê resultado em dias, não em meses.',
  },
  {
    icon: Server,
    title: 'Sistemas que rodam enquanto você dorme',
    description:
      'Automações robustas com retry, alertas e monitoramento. Quando algo falha, o sistema se recupera — você nem fica sabendo.',
  },
  {
    icon: Users,
    title: 'Parceiro técnico, não fornecedor',
    description:
      'Entendo o seu processo antes de escrever uma linha de código. A solução é moldada ao seu negócio — não o contrário.',
  },
];

export function DifferentialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl"></div>
        {/* Tech lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-full backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-violet-300">Nossos Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-white">Por que trabalhar </span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              comigo
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Não entrego projetos. Entrego resultados que ficam e sistemas que trabalham por você.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex gap-6 p-8 bg-gradient-to-br from-[#0d0d1a] to-[#110d22] rounded-2xl border border-violet-500/20 hover:border-violet-400/50 transition-all duration-400 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]"
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-900/40 group-hover:shadow-violet-500/50 group-hover:scale-105 transition-all duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-violet-600 rounded-full text-xs text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
