import React from 'react';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="px-6 sm:px-12 py-24 border-t border-white/5 bg-[#0B0F0E]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-sm font-semibold text-[#7CFF98] uppercase tracking-widest font-mono">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">Executive Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Profile 1 */}
          <div className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
            <h3 className="text-2xl text-white font-medium mb-1">Dr. Quinn Ye</h3>
            <p className="text-[#7CFF98] font-mono text-sm uppercase tracking-wider mb-6">Founder & Strategy Lead</p>
            <p className="text-neutral-400 leading-relaxed font-light text-lg mb-6">
              Founder of Refeedo and Y Opener with a PhD in Entrepreneurship & Innovation Strategy. Quinn leads the strategic vision for our ventures, championing gender equality and curiosity. She builds products and enables founders and SMEs to unlock their true potential through AI-native workflows.
            </p>
            <div className="flex gap-4">
               <a href="https://www.linkedin.com/company/yopener" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
            <h3 className="text-2xl text-white font-medium mb-1">Dr. Melody Jin</h3>
            <p className="text-[#7CFF98] font-mono text-sm uppercase tracking-wider mb-6">Founder & Tech Lead</p>
            <p className="text-neutral-400 leading-relaxed font-light text-lg mb-6">
              An AI technical leader with a strong research foundation in Data Science and Deep Learning. Melody leads the engineering vision for our ventures, specializing in LLMs and computer vision. She translates complex R&D into deployable products, building the robust, AI-native infrastructure that powers Y Opener’s solutions.
            </p>
            <div className="flex gap-4">
               <a href="https://www.linkedin.com/company/yopener" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;