import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './styles/global.css';
import './styles/features.css';

import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/feature';
import Exercises from './components/exercises';
import Step from './components/steps';
import Resources from './components/resources';
import Team from './components/team';
import Testimoni from './components/testimonial';
import Cta from './components/cta';
import Footer from './components/footer'
function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Features />
    <Exercises />
    <Step />
    <Resources />
    <Team />
    <Testimoni />
    <Cta />
    <Footer />
    <SpeedInsights />
    </>
  );
}

export default App;
