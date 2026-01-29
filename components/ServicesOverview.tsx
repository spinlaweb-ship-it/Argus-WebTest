import React from 'react';
import { Shield, Cctv, Flame, Briefcase, ChevronRight } from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate?: (view: string) => void;
}

const services = [
  {
    id: "seguridad-vigilancia",
    title: "Seguridad & Vigilancia",
    desc: "Personal altamente capacitado para resguardo físico de instalaciones críticas y comerciales.",
    image: "https://drive.google.com/thumbnail?id=1liyy7athnwprW237aGs6g28Y3jVSweZI&sz=w1000",
    icon: <Shield size={24} />,
    tag: "HUMAN TALENT"
  },
  {
    id: "soluciones-electronicas",
    title: "Soluciones Electrónicas",
    desc: "CCTV con analítica avanzada, control de acceso biométrico e integración de sistemas inteligentes.",
    image: "https://drive.google.com/thumbnail?id=1mpBpUOYBlCKniwpasFc_o0_oNxoDkx47&sz=w1000",
    icon: <Cctv size={24} />,
    tag: "SMART TECH"
  },
  {
    id: "proteccion-incendios",
    title: "Protección Contra Incendios",
    desc: "Diseño, instalación y monitoreo de sistemas de detección y supresión bajo normas internacionales.",
    image: "https://drive.google.com/thumbnail?id=1UxSCdudpS9-Hx_iTQ1IYwFiVwmye_-aE&sz=w1000",
    icon: <Flame size={24} />,
    tag: "CERTIFIED"
  },
  {
    id: "servicios-corporativos",
    title: "Servicios Corporativos",
    desc: "Consultoría de riesgos, auditorías de seguridad y programas de prevención de pérdidas.",
    image: "https://drive.google.com/thumbnail?id=1UmtXpMAoT6PDZs3OE8Rc5KuYD9y2llr_&sz=w1000",
    icon: <Briefcase size={24} />,
    tag: "STRATEGY"
  }
];

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const handleServiceClick = (serviceId: string) => {
    if (onNavigate) {
      onNavigate(serviceId);
    }
  };

  return (
    <section id="services-overview" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-platinum/30 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-platinum text-firebrick text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            Especialistas en Integración
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-raisin mb-4">
            Nuestros <span className="font-bold">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-firebrick mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group relative bg-white border border-platinum overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-raisin/40 group-hover:bg-firebrick/20 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-firebrick text-white p-3 rounded-sm shadow-lg">
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-raisin mb-4">{s.title}</h3>
                <p className="text-silver text-sm leading-relaxed mb-6 h-16 line-clamp-3">
                  {s.desc}
                </p>
                <button 
                  onClick={() => handleServiceClick(s.id)}
                  className="flex items-center gap-2 text-firebrick text-xs font-bold tracking-widest uppercase hover:text-barnred transition-colors"
                >
                  Más Información <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;