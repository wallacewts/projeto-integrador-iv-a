import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutMe />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>;
}