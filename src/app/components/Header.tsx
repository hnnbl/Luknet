import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-violet-500/20 shadow-[0_4px_30px_rgba(124,58,237,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              <span className="text-white font-bold text-xl tracking-tight">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Luknet
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Serviços', id: 'servicos' },
              { label: 'Notícias', id: 'noticias' },
              { label: 'Contato', id: 'contato' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-400 hover:text-violet-300 transition-colors duration-300 text-sm font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] active:scale-95"
          >
            Fale Conosco
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 rounded-lg text-gray-400 hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 px-2 flex flex-col gap-1 border-t border-violet-500/20 mt-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Serviços', id: 'servicos' },
                  { label: 'Notícias', id: 'noticias' },
                  { label: 'Contato', id: 'contato' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-200 text-left px-4 py-3 rounded-lg text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-violet-500/10">
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  >
                    Fale Conosco
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
