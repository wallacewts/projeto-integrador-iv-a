import React from 'react';
import { motion } from 'framer-motion';
import { Code, Calendar, GitBranch, ExternalLink } from 'lucide-react';
export function Projects() {
  const projects = [{
    name: 'fluxo-caixa-app-v2',
    isPublic: true,
    language: 'TypeScript',
    updated: '12 de Junho',
    url: 'https://github.com/username/fluxo-caixa-app-v2',
    description: 'Aplicação de gerenciamento de fluxo de caixa com TypeScript'
  }, {
    name: 'fluxo-caixa-app',
    isPublic: true,
    language: '',
    updated: '4 de Junho',
    url: 'https://github.com/username/fluxo-caixa-app',
    description: 'Versão inicial da aplicação de gerenciamento de fluxo de caixa'
  }, {
    name: 'desafio-backend-gac',
    isPublic: true,
    language: 'TypeScript',
    updated: '5 de Maio',
    url: 'https://github.com/username/desafio-backend-gac',
    description: 'Desafio técnico de backend com TypeScript'
  }, {
    name: 'projeto-integrador-3-ads-ead',
    isPublic: true,
    language: 'JavaScript',
    updated: '14 de Março',
    url: 'https://github.com/username/projeto-integrador-3-ads-ead',
    description: 'Projeto integrador para o curso de ADS na modalidade EAD'
  }, {
    name: 'IntegratorProject1CESMAC',
    isPublic: true,
    language: 'HTML',
    updated: '22 de Abril, 2024',
    url: 'https://github.com/username/IntegratorProject1CESMAC',
    description: 'Projeto integrador desenvolvido durante o curso na CESMAC'
  }, {
    name: 'test-mid-mdc-partners',
    isPublic: true,
    language: 'JavaScript',
    updated: '26 de Julho, 2023',
    url: 'https://github.com/username/test-mid-mdc-partners',
    description: 'Teste técnico para posição de desenvolvedor mid-level'
  }, {
    name: 'dotfiles',
    isPublic: true,
    isForked: true,
    forkedFrom: 'victoriadrake/dotfiles',
    language: 'CSS',
    updated: '20 de Março, 2023',
    url: 'https://github.com/username/dotfiles',
    description: 'Dotfiles e scripts de configuração automática para distribuições Linux'
  }];
  return <section id="projetos" className="py-20">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">
            Alguns dos meus projetos públicos no GitHub
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <motion.a key={index} href={project.url} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GitBranch size={18} className="text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg text-slate-800 truncate">
                      {project.name}
                    </h3>
                  </div>
                  {project.isPublic && <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Public
                    </span>}
                </div>
                {project.isForked && <p className="text-xs text-slate-500 mt-1">
                    Forked from {project.forkedFrom}
                  </p>}
                <p className="text-slate-600 mt-3 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="px-6 py-3 bg-slate-50 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  {project.language && <>
                      <Code size={14} className="text-slate-600 mr-1" />
                      <span className="text-slate-600">{project.language}</span>
                    </>}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="text-slate-600 mr-1" />
                  <span className="text-slate-600">
                    Atualizado em {project.updated}
                  </span>
                </div>
              </div>
            </motion.a>)}
        </div>
        <div className="mt-10 text-center">
          <a href="https://github.com/wallacewts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Ver mais no GitHub
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </motion.div>
    </section>;
}