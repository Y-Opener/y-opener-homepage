import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 sm:px-12 py-24 sm:py-32 border-t border-white/5 bg-[#0B0F0E]/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait/Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7CFF98] to-[#0B0F0E] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-700"></div>
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-neutral-900 border border-white/10">
              {/* Using a placeholder that represents abstract connection/structure */}
              <img 
                src="https://picsum.photos/id/19/800/1000" 
                alt="Abstract Structure" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2">
                <Target className="text-[#7CFF98] w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wide">Mission Focused</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="text-[#7CFF98] w-5 h-5" />
              <span className="text-sm font-medium text-[#7CFF98] uppercase tracking-widest font-mono">Our Mission</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-8 tracking-tight leading-[1.1]">
              Technology should serve a <span className="text-neutral-500">purpose</span>. 
            </h2>
            
            <p className="text-2xl leading-relaxed text-neutral-400 mb-12 font-thin max-w-2xl">
              At Y Opener, we believe that technology helps founders and businesses unlock the "Why" behind their work. Whether we are building our own tools or helping you build yours, we use Artificial Intelligence to clear the path toward that vision.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white font-mono uppercase tracking-wide opacity-50">Core</h3>
                <ul className="text-lg text-neutral-400 space-y-2 font-mono">
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">Venture Building</li>
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">Founder Acceleration</li>
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">SME Transformation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white font-mono uppercase tracking-wide opacity-50">Tech</h3>
                <ul className="text-lg text-neutral-400 space-y-2 font-mono">
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">AI-Native</li>
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">Intelligent Workflows</li>
                  <li className="hover:text-[#7CFF98] transition-colors cursor-default">Scalable Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;