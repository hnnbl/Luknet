import { ArrowRight, Calendar } from 'lucide-react';

const newsArticles = [
  {
    date: '15 de Março, 2026',
    title: 'Como a transformação digital pode impulsionar seu negócio',
    summary:
      'Descubra como a adoção de tecnologias modernas pode aumentar a eficiência e competitividade da sua empresa no mercado atual.',
  },
  {
    date: '08 de Março, 2026',
    title: 'Tendências de design web para 2026',
    summary:
      'Conheça as principais tendências de design que estão moldando a experiência do usuário e criando sites mais engajadores.',
  },
  {
    date: '01 de Março, 2026',
    title: 'A importância da segurança em aplicações web',
    summary:
      'Entenda por que a segurança digital é fundamental para proteger seus dados e garantir a confiança dos seus clientes.',
  },
];

export function NewsSection() {
  return (
    <section id="noticias" className="relative py-24 px-6">
      {/* Diagonal tech lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-300">Blog & Notícias</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Últimas Notícias
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-400 mb-6 leading-relaxed">{article.summary}</p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group/btn">
                  Leia mais
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Gradient Border Effect */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}