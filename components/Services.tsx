import React from 'react';
import { AppWindow, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 sm:px-12 py-24 border-t border-white/5 bg-[#0B0F0E]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-[#7CFF98] uppercase tracking-widest font-mono">Core Pillars</span>
              <div className="h-px w-8 bg-[#7CFF98]/20"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">We Build. We Transform.</h2>
          </div>
          <p className="text-neutral-500 font-mono text-lg max-w-sm text-right md:text-left">
            Two distinct approaches to solving complex information problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Venture Studio */}
          <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-500 flex flex-col">
            <div className="h-10 w-10 rounded-lg bg-[#7CFF98]/10 flex items-center justify-center text-[#7CFF98] mb-8 group-hover:scale-110 transition-transform duration-300 border border-[#7CFF98]/20">
              <AppWindow className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-normal text-white mb-3">Venture Studio</h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-mono mb-6 flex-grow">
              We don't just talk about AI; we build with it. Y Opener acts as a launchpad for internal AI-native software designed to solve complex information problems.
            </p>
            <a 
              href="https://www.refeedo.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#7CFF98] hover:underline text-sm font-mono tracking-wider"
              aria-label="Explore Refeedo (opens in new tab)"
            >
              EXPLORE REFEEDO &rarr;
            </a>
          </div>

          {/* Pre-Accelerator card — hidden until program relaunches */}
          {/* <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-500 flex flex-col">
            <div className="h-10 w-10 rounded-lg bg-[#7CFF98]/10 flex items-center justify-center text-[#7CFF98] mb-8 group-hover:scale-110 transition-transform duration-300 border border-[#7CFF98]/20">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-normal text-white mb-3">The Pre-Accelerator</h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-mono mb-6 flex-grow">
              We help founders build faster using AI-native workflows. Our programs are designed to take you from "Idea" to "MVP" without the technical bloat.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { type: 'cohort' } }))}
              className="text-[#7CFF98] hover:underline text-sm font-mono tracking-wider cursor-pointer"
              aria-label="Apply for next cohort"
            >
              APPLY FOR NEXT COHORT &rarr;
            </button>
          </div> */}

          {/* Card 3: AI Consulting */}
          <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-500 flex flex-col">
            <div className="h-10 w-10 rounded-lg bg-[#7CFF98]/10 flex items-center justify-center text-[#7CFF98] mb-8 group-hover:scale-110 transition-transform duration-300 border border-[#7CFF98]/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-normal text-white mb-3">AI Consulting</h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-mono mb-6 flex-grow">
              We partner with research labs, academic departments, and businesses across industries to identify workflow bottlenecks and implement AI solutions that drive real productivity gains.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { type: 'consultation' } }))}
              className="text-[#7CFF98] hover:underline text-sm font-mono tracking-wider cursor-pointer"
              aria-label="Book a consultation"
            >
              BOOK A CONSULTATION &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;