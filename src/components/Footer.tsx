import React from 'react';
import { Linkedin, Mail, ArrowUp, GitGraph } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer id="contato" className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-slate-300 max-w-md">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em
              contato para discutirmos como posso contribuir para o seu projeto.
            </p>
          </div>
          <div className="space-y-4">
            <a href="mailto:matheuswts2011@gmail.com" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <Mail size={18} className="mr-2" />
              matheuswts2011@gmail.com
            </a>
            <a href="https://github.com/wallacewts" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <GitGraph size={18} className="mr-2" />
              github.com/wallacewts
            </a>
            <a href="https://linkedin.com/in/wallacewts" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <Linkedin size={18} className="mr-2" />
              linkedin.com/in/wallacewts
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Desenvolvedor Full Stack. Todos os
            direitos reservados.
          </p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center text-slate-400 hover:text-white transition-colors">
            Voltar ao topo
            <ArrowUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>;
}