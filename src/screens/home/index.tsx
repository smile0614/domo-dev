'use client';

import Aos from 'aos';
import { FC, useEffect } from 'react';

import 'aos/dist/aos.css';

import About from '@/screens/home/components/about';
import Docs from '@/screens/home/components/docs';
import MainBlock from '@/screens/home/components/mainBlock';
import Roadmap from '@/screens/home/components/roadmap';
import Tokenomics from '@/screens/home/components/tokenomics';

const HomeScreen: FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    });
  }, []);

  return (
    <main>
      <MainBlock />
      <About />
      <Docs />
      <Tokenomics />
      <Roadmap />
    </main>
  );
};

export default HomeScreen;
