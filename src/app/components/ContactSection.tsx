import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const leftPanelVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const rightPanelVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } },
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="relative py-24 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-violet-300 text-sm font-medium">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={leftPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#0d0d1a] to-[#110d22] backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_0_2px_rgba(124,58,237,0.2)] transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_0_2px_rgba(124,58,237,0.2)] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_0_2px_rgba(124,58,237,0.2)] transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_0_2px_rgba(124,58,237,0.2)] transition-colors resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={rightPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#0d0d1a] to-[#110d22] backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-white">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-gray-400">
                      Eduardo Souza – Luknet
                      <br />
                      Trav Timbó
                      <br />
                      Belém – PA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-gray-400">(91) 99192-0911</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">contato@luknet.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#0d0d1a] to-[#110d22] backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20">
              <h4 className="text-lg font-semibold text-white mb-3">Horário de Atendimento</h4>
              <p className="text-gray-400 leading-relaxed">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
