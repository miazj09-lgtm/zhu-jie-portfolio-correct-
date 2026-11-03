/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-apricot-50 font-sans selection:bg-moss-200 selection:text-moss-900 leading-normal antialiased">
      {/* 1. Navigation Panel Header */}
      <Navbar />

      {/* 2. Interactive Profile & Bio */}
      <Hero />

      {/* 3. Education Journey Timeline */}
      <Education />

      {/* 4. Experience Chronicles */}
      <Experience />

      {/* 5. Central Portfolio Showcase with Filters & Modal reviews */}
      <Portfolio />

      {/* 6. Interlocking Contact Block & Feedback Form */}
      <Contact />
    </div>
  );
}

