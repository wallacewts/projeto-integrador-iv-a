import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Sobre',
    href: '#sobre'
  }, {
    name: 'Experiência',
    href: '#experiencia'
  }, {
    name: 'Projetos',
    href: '#projetos'
  }, {
    name: 'Contato',
    href: '#contato'
  }];
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Desenvolvedor Full Stack
            </a>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                {item.name}
              </a>)}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">
                <div size={20} />
              </a>
              <a href="https://linkedin.com/in/wallacewts" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 hover:text-blue-600">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile Navigation */}
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.2
      }} className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors">
                  {item.name}
                </a>)}
              <div className="flex items-center space-x-6 pt-2">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">
                  <div size={20} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contato@email.com" className="text-slate-700 hover:text-blue-600">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>}
      </div>
    </header>;
}