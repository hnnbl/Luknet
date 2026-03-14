import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Phase 4 complete: violet palette, whileInView animations, copy reviewed
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#050008]/80 border-t border-violet-500/20">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Luknet
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Tecnologia sob medida para negócios que não querem ser genéricos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('noticias')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Notícias
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Desenvolvimento Web</li>
              <li className="text-gray-400 text-sm">Sistemas Personalizados</li>
              <li className="text-gray-400 text-sm">Design Responsivo</li>
              <li className="text-gray-400 text-sm">Consultoria Digital</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-violet-600 border border-violet-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-violet-600 border border-violet-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-violet-600 border border-violet-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-violet-600 border border-violet-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8" />
        <div className="border-t border-violet-500/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Luknet - Soluções Web. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-violet-300 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-violet-300 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
