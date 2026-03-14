import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8 z-10"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={heroItem} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-violet-300">Software de Alta Performance</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Engenharia que
              </span>
              <br />
              <span className="text-white">Escala com Você</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Construímos produtos digitais que dominam mercados. Da arquitetura ao deploy — cada linha de código pensada para converter, escalar e impressionar.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Iniciar Projeto</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="px-8 py-4 border-2 border-violet-500/50 hover:border-violet-400 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-violet-500/10 backdrop-blur-sm"
            >
              Ver Portfólio
            </button>
          </motion.div>

          {/* Feature Chips */}
          <motion.div variants={heroItem} className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/30 group-hover:bg-orange-500/20 transition-colors">
                <Zap size={20} className="text-orange-500" />
              </div>
              <span>Performance de elite</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/30 group-hover:bg-violet-500/20 transition-colors">
                <TrendingUp size={20} className="text-violet-400" />
              </div>
              <span>Arquitetura escalável</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors">
                <Shield size={20} className="text-purple-400" />
              </div>
              <span>Segurança de produção</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content — 3D Floating Element */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 80, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Subtle radial glow behind the orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 bg-violet-600/20 rounded-full blur-3xl"></div>
          </div>

          {/* Floating container — animate-float drives continuous vertical motion */}
          <div className="animate-float relative flex justify-center items-center w-full max-w-lg aspect-square">
            {/* 3D perspective wrapper */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: '800px' }}
            >
              {/* Inner card in 3D space */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ transform: 'rotateX(15deg) rotateY(-10deg)', transformStyle: 'preserve-3d' }}
              >
                {/* Rotating rings — violet/purple/fuchsia only */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute w-full h-full border-2 border-violet-500/40 rounded-full animate-spin"
                    style={{ animationDuration: '20s' }}
                  ></div>
                  <div
                    className="absolute w-4/5 h-4/5 border-2 border-purple-400/30 rounded-full animate-spin"
                    style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                  ></div>
                  <div
                    className="absolute w-3/5 h-3/5 border-2 border-fuchsia-500/20 rounded-full animate-spin"
                    style={{ animationDuration: '10s' }}
                  ></div>
                </div>

                {/* Center sphere */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-2xl">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/50 via-purple-700/60 to-fuchsia-700/40 animate-neon-pulse blur-xl"></div>

                    {/* Network image overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-60"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MXx8fHwxNzczMzYxNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                      }}
                    ></div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-purple-600/20"></div>
                  </div>
                </div>

                {/* Floating data badges */}
                <div className="absolute top-10 right-10 px-3 py-2 bg-violet-500/10 backdrop-blur-md border border-violet-500/30 rounded-lg">
                  <div className="text-xs text-violet-300 font-mono">99.9% Uptime</div>
                </div>
                <div className="absolute bottom-16 left-10 px-3 py-2 bg-violet-500/10 backdrop-blur-md border border-violet-500/30 rounded-lg">
                  <div className="text-xs text-violet-300 font-mono">AI-Powered</div>
                </div>
                <div className="absolute top-1/2 right-0 px-3 py-2 bg-violet-500/10 backdrop-blur-md border border-violet-500/30 rounded-lg">
                  <div className="text-xs text-violet-300 font-mono">Zero Downtime</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
