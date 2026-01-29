import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'sectores', label: 'Sectores' },
  ];

  const ArgusLogo = () => (
    <div className="flex flex-col items-start">
      <img 
        src="https://drive.google.com/thumbnail?id=1n8xP9p0oIbsohQjlYCvG92_yhZhyN4RM&sz=w1000" 
        alt="ARGUS Security Logo" 
        className="h-8 md:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-raisin/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity group"
        >
          <ArgusLogo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-silver text-xs uppercase tracking-[0.2em] font-bold">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-all border-b-2 pb-1 ${currentView === link.id ? 'text-white border-firebrick' : 'border-transparent text-silver/60 hover:text-white hover:border-white/20'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            <a href="tel:+50642050094" className="flex items-center gap-2 text-white font-bold text-sm hover:text-firebrick transition-colors">
              <div className="w-8 h-8 rounded-full bg-firebrick/10 flex items-center justify-center">
                <Phone size={14} className="text-firebrick" />
              </div>
              <span className="tracking-tight">+506 4205-0094</span>
            </a>
            <button 
              onClick={onCtaClick}
              className="bg-firebrick hover:bg-barnred text-white px-8 py-2.5 rounded-sm text-xs font-bold tracking-[0.2em] transition-all shadow-xl hover:translate-y-[-2px] border border-transparent"
            >
              CONTACTO
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-raisin border-t border-white/10 p-8 flex flex-col gap-6 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsOpen(false); }}
              className={`text-2xl font-heading font-bold text-left uppercase tracking-widest ${currentView === link.id ? 'text-firebrick' : 'text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-white/10 my-2"></div>
          <a href="tel:+50642050094" className="flex items-center gap-4 text-white text-xl font-bold">
            <Phone size={24} className="text-firebrick" />
            +506 4205-0094
          </a>
          <button 
            onClick={() => { setIsOpen(false); onCtaClick(); }}
            className="bg-firebrick text-white py-5 rounded-sm font-bold text-lg tracking-widest"
          >
            CONTACTO
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;