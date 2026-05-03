import React from 'react';
import { ArrowRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="ventures" className="px-6 sm:px-12 py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-medium tracking-tighter text-[#0B0F0E] text-stroke opacity-100 leading-none select-none">
            VENTURES
          </h2>
        </div>

        <div className="space-y-32">

          {/* Item 1: AI Consulting — primary focus, image left / text right */}
          <div id="consulting" className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#7CFF98] blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600&h=900"
                  alt="AI Consulting"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#7CFF98] font-mono text-sm border border-[#7CFF98]/30 px-2 py-0.5 rounded">Service</span>
                <span className="text-neutral-500 font-mono text-sm uppercase tracking-wide">Cross-Industry</span>
              </div>
              <h3 className="text-4xl font-normal text-white mb-4 group-hover:text-[#7CFF98] transition-colors">AI Consulting</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed font-thin text-xl">
                We work with research labs, academic departments, and businesses across industries to map their workflows, identify high-leverage opportunities, and deploy AI solutions that generate immediate, measurable impact.
              </p>
              <ul className="flex flex-wrap gap-2 mb-8 font-mono text-sm text-neutral-500">
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">Research Labs</li>
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">Academic Teams</li>
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">SMEs</li>
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">Super Individuals</li>
              </ul>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { type: 'consultation' } }))}
                className="inline-flex items-center gap-2 text-lg text-white border-b border-white/30 pb-1 hover:border-[#7CFF98] hover:text-[#7CFF98] transition-all cursor-pointer"
                aria-label="Book a consultation"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Item 2: Refeedo — text left / image right (alternating) */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#7CFF98] font-mono text-sm border border-[#7CFF98]/30 px-2 py-0.5 rounded">Product</span>
                <span className="text-neutral-500 font-mono text-sm uppercase tracking-wide">Scientific Discovery</span>
              </div>
              <h3 className="text-4xl font-normal text-white mb-4 group-hover:text-[#7CFF98] transition-colors">Refeedo</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed font-thin text-xl">
                An AI-powered platform for scientific literature discovery, helping researchers track and digest RSS feeds with ease.
              </p>
              <ul className="flex flex-wrap gap-2 mb-8 font-mono text-sm text-neutral-500">
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">AI Analysis</li>
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">RSS</li>
                <li className="px-2 py-1 bg-white/5 rounded border border-white/5">Research</li>
              </ul>
              <a href="https://www.refeedo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg text-white border-b border-white/30 pb-1 hover:border-[#7CFF98] hover:text-[#7CFF98] transition-all">
                Explore Refeedo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-7 order-2 relative">
              <div className="absolute inset-0 bg-[#7CFF98] blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <a href="https://www.refeedo.com" target="_blank" rel="noopener noreferrer" className="block relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-neutral-900 cursor-pointer">
                <img
                  src="https://picsum.photos/id/180/1600/900"
                  alt="Refeedo Interface"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </a>
            </div>
          </div>

          {/* Pre-Accelerator — hidden until program relaunches */}
          {/* <div id="accelerator" className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            ...
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Work;