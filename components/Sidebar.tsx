import React from 'react';
import { Home, Target, AppWindow, Rocket, TrendingUp, Users, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3 glass-panel rounded-full p-2 items-center">
        <NavButton icon={<Home size={20} />} label="Home" onClick={scrollToTop} />
        <NavButton icon={<Target size={20} />} label="About" href="#about" />
        <NavButton icon={<AppWindow size={20} />} label="Ventures" href="#ventures" />
        <NavButton icon={<Rocket size={20} />} label="Accelerator" href="#accelerator" />
        <NavButton icon={<TrendingUp size={20} />} label="Consulting" href="#consulting" />
        <NavButton icon={<Users size={20} />} label="Team" href="#team" />
        <NavButton icon={<Mail size={20} />} label="Contact" href="#contact" />
      </div>
    </aside>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, onClick, href }) => {
  const Component = href ? 'a' : 'button';
  
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    if (href) {
      e.preventDefault();
      if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Component 
      href={href}
      onClick={handleClick}
      className="group grid place-items-center text-neutral-500 hover:text-[#7CFF98] w-10 h-10 rounded-full transition-all relative"
    >
      {icon}
      <span className="absolute left-14 glass-panel text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono tracking-wide -translate-x-2 group-hover:translate-x-0 duration-300 pointer-events-none">
        {label}
      </span>
    </Component>
  );
};

export default Sidebar;