import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

// Phase 4 complete: violet palette, whileInView animations, copy reviewed
const newsArticles = [
  {
    date: '10 de Março, 2026',
    title: 'Como automatizei 80% do atendimento de um e-commerce com n8n e IA',
    summary:
      'Um estudo de caso real: fluxo n8n + GPT-4 que classifica pedidos, responde clientes e escala promoções — sem contratar mais ninguém.',
  },
  {
    date: '02 de Março, 2026',
    title: 'Python para automação de negócios: por onde começar em 2026',
    summary:
      'Um guia prático sobre as bibliotecas e padrões que uso no dia a dia para construir pipelines de automação robustos e de baixo custo.',
  },
  {
    date: '22 de Fevereiro, 2026',
    title: 'n8n vs Zapier: qual escolher para automações de alto volume?',
    summary:
      'Comparativo técnico e de custo entre as duas plataformas com base em projetos reais rodados em produção.',
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function NewsSection() {
  return (
    <section id="noticias" className="relative py-24 px-6">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
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
            <span className="text-sm text-violet-300">Blog & Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Cases & Artigos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-gradient-to-br from-[#0d0d1a] to-[#110d22] backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-400 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-400 mb-6 leading-relaxed">{article.summary}</p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors group/btn">
                  Leia mais
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Gradient Border Effect */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
