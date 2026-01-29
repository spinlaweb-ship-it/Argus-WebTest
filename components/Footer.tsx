import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'sectores', label: 'Sectores' },
  ];

  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const ArgusLogo = () => (
    <div className="flex flex-col items-start">
      <img 
        src="https://drive.google.com/thumbnail?id=1n8xP9p0oIbsohQjlYCvG92_yhZhyN4RM&sz=w1000" 
        alt="ARGUS Security Logo" 
        className="h-10 md:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  return (
    <footer className="bg-raisin text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <ArgusLogo />
            </div>
            <p className="text-silver text-sm leading-relaxed max-w-xs">
              Líderes en soluciones integrales de seguridad en Costa Rica. Fusión de inteligencia humana y tecnológica para una protección sin precedentes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 border-l-2 border-firebrick pl-4">Enlaces</h4>
            <ul className="space-y-4 text-silver text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNav(link.id)}
                    className="hover:text-firebrick transition-colors text-left uppercase tracking-widest text-[11px] font-bold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 border-l-2 border-firebrick pl-4">Contacto</h4>
            <ul className="space-y-6 text-silver text-sm">
              <li className="flex gap-4">
                <MapPin className="text-firebrick shrink-0" size={20} />
                <span>San José, Costa Rica.<br />Edificio Argus, Paseo Colón.</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-firebrick shrink-0" size={20} />
                <a href="tel:+50642050094" className="hover:text-white transition-colors">+506 4205-0094</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-firebrick shrink-0" size={20} />
                <a href="mailto:info@argus.cr" className="hover:text-white transition-colors">info@argus.cr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-silver text-[10px] uppercase tracking-[0.3em] text-center">
          <p>© {new Date().getFullYear()} ARGUS Security CR. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;