import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FaultyTerminal from './FaultyTerminal';
import GlowingText from './GlowingText';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col justify-end">
      
      {/* Background - Integrated Faulty Terminal */}
      <div className="absolute inset-0 z-0">
         <FaultyTerminal 
           tint="#7CFF98"
           brightness={0.7}
           timeScale={0.2}
           mouseStrength={0.5}
         />
         {/* Overlay gradient to fade bottom into next section */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F0E] z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full pb-12 sm:pb-20 px-6 sm:px-12 pt-32 max-w-[1400px] mx-auto pointer-events-none flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-0">
        
        {/* Left Info */}
        <div className="max-w-xs space-y-8 order-2 lg:order-1 pointer-events-auto">
          <p className="text-lg leading-relaxed text-neutral-400 font-normal font-mono">
            <span className="text-[#7CFF98] block mb-2">● AI-Native Venture Studio</span>
            We build future-ready software, accelerate founders, and transform SMEs.
          </p>
          <div className="flex flex-col gap-4 items-start">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-white hover:text-[#7CFF98] transition-colors"
            >
              <span className="border-b border-white/20 group-hover:border-[#7CFF98] pb-1 transition-colors">Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
             <button 
              onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-white pb-1 transition-colors">View Our Products</span>
            </button>
          </div>
        </div>

        {/* Right Title */}
        <div className="order-1 lg:order-2 pointer-events-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white select-none mix-blend-difference">
            <span className="block">Unlocking</span>
            <GlowingText className="block text-neutral-600">the "Why"</GlowingText>
            <span className="block">with AI.</span>
          </h1>
          <div className="flex items-center justify-end gap-4 mt-6">
            <div className="h-px w-20 bg-[#7CFF98]/30"></div>
            <p className="text-xl md:text-2xl text-[#7CFF98] font-thin tracking-tight font-mono">est. 2025</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;