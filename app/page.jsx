"use client";

import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Technology from './components/Technology';

const HomePage = () => (
  <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Technology />
    <ContactForm />
  </main>
);

export default HomePage;
