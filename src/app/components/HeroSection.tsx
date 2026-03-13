import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-300">Tecnologia de Ponta</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Soluções Web
              </span>
              <br />
              <span className="text-white">Inteligentes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Criamos páginas e sistemas web estruturados conforme o perfil do seu negócio.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm"
            >
              Conhecer Serviços
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/30 group-hover:bg-orange-500/20 transition-colors">
                <Zap size={20} className="text-orange-500" />
              </div>
              <span>Sites modernos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors">
                <TrendingUp size={20} className="text-blue-500" />
              </div>
              <span>Alta performance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 group cursor-default">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors">
                <Shield size={20} className="text-purple-500" />
              </div>
              <span>Tecnologia segura</span>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Tech Visual */}
        <div className="relative flex justify-center items-center">
          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Main 3D sphere container */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Rotating rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-4/5 h-4/5 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute w-3/5 h-3/5 border-2 border-orange-500/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>

            {/* Center 3D sphere with network image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/30">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-pink-500/40 blur-2xl animate-pulse"></div>
                
                {/* Network image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MXx8fHwxNzczMzYxNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                  }}
                ></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
              <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-purple-500 to-transparent"></div>
            </div>

            {/* Floating data points */}
            <div className="absolute top-10 right-10 px-3 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 rounded-lg">
              <div className="text-xs text-blue-300 font-mono">99.9% Uptime</div>
            </div>
            <div className="absolute bottom-16 left-10 px-3 py-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg">
              <div className="text-xs text-purple-300 font-mono">AI Powered</div>
            </div>
            <div className="absolute top-1/2 right-0 px-3 py-2 bg-orange-500/10 backdrop-blur-md border border-orange-500/30 rounded-lg">
              <div className="text-xs text-orange-300 font-mono">Fast Deploy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
