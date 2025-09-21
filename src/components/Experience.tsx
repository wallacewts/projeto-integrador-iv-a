import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
export function Experience() {
  const experiences = [{
    company: 'VR SOFTWARE',
    role: 'Desenvolvedor Full Stack',
    period: 'Jan 2023 - Presente (2 anos 9 meses)',
    description: 'Como desenvolvedor full stack em uma equipe de especialistas em regras fiscais, meu papel é essencial para garantir que nosso ERP esteja sempre em conformidade com as rigorosas regulamentações fiscais em vigor. Atendemos mais de 3.000 clientes em várias regiões do Brasil, e um dos nossos principais desafios é desenvolver soluções que atendam aos requisitos fiscais específicos de cada região.',
    achievements: ['Integração com o serviço externo da SEFAZ para emissão de notas fiscais eletrônicas relacionadas aos produtos vendidos pelos nossos clientes', 'Integração com o serviço externo do IBPT para atualização das alíquotas fiscais nas notas fiscais eletrônicas', 'Integração com OAuth 2.0 através do Kong API Gateway para autenticar clientes que consomem diretamente nossas APIs'],
    responsibilities: ['Criar Diagrama de Relacionamento de Entidade (ERD) para documentação de banco de dados', 'Desenvolver microsserviços usando Node / NestJS - gRPC e REST Full', 'Consumir e produzir mensagens através do RabbitMQ', 'Desenvolver e manter pipelines de CI/CD', 'Corrigir bugs reportados em ambientes de produção/staging', 'Construir UI amigável com Angular', 'Fornecer suporte a membros menos experientes da equipe', 'Criar novas funcionalidades mantendo uma cobertura mínima de testes de 95%'],
    technologies: 'Git | GitHub | Node JS | Angular | Postgres | TypeORM | Nest JS | Jasmine | Jest | Docker | Docker Compose | RabbitMQ | RPC | gRPC | Argo CD | Kong'
  }, {
    company: 'Brasilprev (Banco do Brasil) - iBlue Consulting',
    role: 'Analista Desenvolvedor NodeJS',
    period: 'Ago 2022 - Fev 2023 (7 meses)',
    description: '',
    achievements: [],
    responsibilities: ["Realizar manutenção e versionamento de API's que são utilizados por vários clientes diferentes", 'Revisar códigos e dar feedbacks para outros membros da equipe', 'Trabalhar em conjunto com QA, SM, PO, TL e Designer a fim de proporcionar melhor experiência para o usuário', 'Gerenciamento e manutenção CI/CD do Azure Devops', 'Utilizar serviços da AWS (ECS, DynamoDB, Rekognition...)', 'Implementar testes unitários com cobertura mínima de 85% do código', 'Participar das principais cerimônias do scrum (Planning, daily, review e retrospective)'],
    technologies: 'Node.js, JavaScript e mais 3 competências'
  }, {
    company: 'Exedio Brasil',
    role: 'Desenvolvedor Full Stack',
    period: 'Jan 2022 - Ago 2022 (8 meses)',
    description: '',
    achievements: [],
    responsibilities: ['Criar micro serviços utilizando uma arquitetura baseada em eventos a partir de sistema monolítico legado', 'Utilizar os conceitos e ferramentas do vue storefront para desenvolver novas funcionalidades e dar manutenção no nosso sistema de E-commerce', 'Criar casos de testes E2E e automatizei sua execução com técnicas de integração contínua para garantir a qualidade de nossos produtos', 'Migrar ambiente docker tradicional para um cluster kubernetes de alta disponibilidide e escalabilidade, resiliente e tolerante a falhas', 'Implementar rotinas de entrega contínua a fim de garantir maior autonômia e agilidade do nosso time de desenvolvimento no lançamento de novas versões'],
    technologies: 'Node.js, JavaScript e mais 4 competências'
  }, {
    company: 'SENAI ALAGOAS',
    role: 'Desenvolvedor Full Stack',
    period: 'Jun 2019 - Dez 2021 (2 anos 7 meses)',
    location: 'Maceió, Alagoas, Brasil',
    description: '',
    achievements: [],
    responsibilities: ['Implementar testes unitários no desenvolvimento de novas funcionalidades mantendo sempre uma cobertura de no mínimo 85%', 'Responsável por fazer code review para equipes diferentes em projetos paralelos', 'Utilizar a técnica de mobile first na construção das interfaces dos sites', 'Criar repositórios utilizando uma arquitetura modularizada de monorepositório', 'Utilizar os principais conceitos da metodologia SCRUM (backlog, sprint planning, planning poker, daily)', 'Realizar manutenção em servidores de produção', 'Desenvolver e manter pipelines CI/CD', 'Realizar treinamentos de tecnologias específicas para colegas de trabalho menos experientes', 'Interpretar e criar diagramas UML, dicionário de dados e demais documentos de software em geral', 'Planejar e realizar apresentações sobre as soluções de software desenvolvidas', 'Desenvolver soluções desktop, mobile e serviços da web para empresas de negócios'],
    technologies: 'Node.js, JavaScript e mais 3 competências'
  }];
  return <section id="experiencia" className="py-20 ">
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
    }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          {experiences.map((exp, index) => <motion.div key={index} initial={{
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
        }} className={`relative mb-12 ${index % 2 === 0 ? 'md:pl-0 md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pr-0 md:pl-12 md:text-left md:mr-auto md:ml-1/2'} md:w-1/2`}>
              <div className="hidden md:block absolute top-0 bg-white rounded-full border-4 border-blue-500 w-5 h-5 transform md:translate-x-1/2 md:right-0 md:left-auto"></div>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-600">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-slate-700 mt-1">
                  {exp.company}
                </h4>
                <div className="flex items-center text-slate-500 mt-2 mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{exp.period}</span>
                  {exp.location && <>
                      <span className="mx-2">•</span>
                      <Briefcase size={16} className="mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </>}
                </div>
                {exp.description && <p className="text-slate-600 mb-4">{exp.description}</p>}
                {exp.achievements && exp.achievements.length > 0 && <div className="mb-4">
                    <h5 className="font-semibold text-slate-800 mb-2">
                      Conquistas:
                    </h5>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                    </ul>
                  </div>}
                {exp.responsibilities && exp.responsibilities.length > 0 && <div className="mb-4">
                    <h5 className="font-semibold text-slate-800 mb-2">
                      Responsabilidades:
                    </h5>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {exp.responsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
                    </ul>
                  </div>}
                {exp.technologies && <div className="mt-4 pt-4 border-t border-slate-200">
                    <h5 className="font-semibold text-slate-800 mb-2">
                      Tecnologias:
                    </h5>
                    <p className="text-slate-600 text-sm">{exp.technologies}</p>
                  </div>}
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
}