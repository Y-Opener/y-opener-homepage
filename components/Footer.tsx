import React from 'react';
import { ArrowUpRight, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0B0F0E] pt-20 pb-10 px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div>
            <h2 className="text-5xl font-normal tracking-tight text-white mb-6">Let's build<br />something <span className="text-[#7CFF98]">new.</span></h2>
            <a 
              href="mailto:admin@yopener.com" 
              className="inline-flex items-center gap-3 text-xl text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
            >
              admin@yopener.com <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-mono text-[#7CFF98] uppercase tracking-wider mb-6">Sitemap</h4>
              <ul className="space-y-4 text-lg text-neutral-400 font-mono">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#ventures" className="hover:text-white transition-colors">Ventures</a></li>
                <li><a href="#accelerator" className="hover:text-white transition-colors">Accelerator</a></li>
                <li><a href="#consulting" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono text-[#7CFF98] uppercase tracking-wider mb-6">Connect</h4>
              <ul className="space-y-4 text-lg text-neutral-400 font-mono">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 font-mono">
          <p>© 2025 Y Opener. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7CFF98] rounded-full"></div>
            <p>Systems Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;