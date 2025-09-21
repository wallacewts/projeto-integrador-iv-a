import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, GitBranch, Terminal } from 'lucide-react';
export function AboutMe() {
  const skills = [{
    name: 'Frontend',
    icon: <Code size={24} />,
    items: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS']
  }, {
    name: 'Backend',
    icon: <Server size={24} />,
    items: ['Node.js', 'NestJS', 'Express', 'REST API', 'gRPC']
  }, {
    name: 'Banco de Dados',
    icon: <Database size={24} />,
    items: ['PostgreSQL', 'DynamoDB', 'TypeORM']
  }, {
    name: 'DevOps',
    icon: <GitBranch size={24} />,
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Git']
  }, {
    name: 'Outros',
    icon: <Terminal size={24} />,
    items: ['Testes Unitários', 'Microserviços', 'RabbitMQ', 'Scrum', 'UML']
  }];
  return <section id="sobre" className="py-20">
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
    }} className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div whileHover={{
            scale: 1.02
          }} className="bg-white rounded-xl shadow-lg p-6 h-full">
              <div className="w-40 h-40 rounded-full bg-blue-100 mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Desenvolvedor Full Stack
              </h3>
              <p className="text-center text-slate-600">
                5 anos de experiência
              </p>
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <motion.div whileHover={{
            scale: 1.01
          }} className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-slate-700 leading-relaxed">
                Com 5 anos de experiência em Angular e Node, atuo como
                desenvolvedor de software especializado em tecnologias web.
                Minha expertise inclui a criação de microserviços, a
                implementação de APIs robustas, e a construção de UI amigáveis.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Estou constantemente atualizado com as mais recentes tecnologias
                e metodologias, o que me permite fornecer soluções eficientes e
                de alta qualidade. No meu trabalho, foco na manutenção e
                versionamento de APIs, no gerenciamento de CI/CD, e na
                utilização de serviços de terceiros como a AWS.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Além disso, sou comprometido com a excelência do código,
                mantendo uma cobertura mínima de testes de 95% e realizando code
                reviews rigorosos. Colaboro efetivamente com equipes
                multifuncionais, incluindo QA, SM, PO, TL e Designers, para
                oferecer a melhor experiência ao usuário. Meus colegas me
                reconhecem como uma pessoa focada, comprometida e pragmática,
                sempre disposta a apoiar membros menos experientes e a
                compartilhar conhecimentos técnicos.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => <motion.div key={index} initial={{
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
            scale: 1.03
          }} className="bg-white rounded-xl shadow-md p-5">
                <div className="flex items-center mb-3 text-blue-600">
                  {skill.icon}
                  <h4 className="ml-2 font-semibold">{skill.name}</h4>
                </div>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => <li key={i} className="text-sm text-slate-600">
                      {item}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </motion.div>
    </section>;
}