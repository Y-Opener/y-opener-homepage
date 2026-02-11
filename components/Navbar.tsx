import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center pointer-events-auto">
        <a href="#" onClick={handleScrollTop} className="group flex items-center gap-4 decoration-0">
          <Logo className="w-12 h-12 text-[#7CFF98] transition-transform group-hover:scale-105 duration-500" />
          <span 
            className="text-2xl font-bold tracking-widest uppercase transition-all duration-300 select-none"
            style={{
                color: 'transparent',
                WebkitTextStroke: '1px #7CFF98',
                textShadow: '0 0 10px rgba(124, 255, 152, 0.5), 0 0 20px rgba(124, 255, 152, 0.3)',
                fontFamily: '"Geist", sans-serif'
            }}
          >
            Y Opener
          </span>
        </a>
        
        <div className="hidden sm:flex items-center gap-1 p-1 rounded-full glass-panel">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="px-5 py-2.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">About</a>
          <a href="#ventures" onClick={(e) => handleScroll(e, 'ventures')} className="px-5 py-2.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">Ventures</a>
          <a href="#accelerator" onClick={(e) => handleScroll(e, 'accelerator')} className="px-5 py-2.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">Accelerator</a>
          <a href="#consulting" onClick={(e) => handleScroll(e, 'consulting')} className="px-5 py-2.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">Consulting</a>
          <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="px-5 py-2.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">Team</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-5 py-2.5 text-sm font-normal text-[#0B0F0E] bg-[#7CFF98] hover:bg-[#DFFFE8] transition-colors rounded-full font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;