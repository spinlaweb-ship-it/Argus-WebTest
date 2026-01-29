import React from 'react';
import { Cctv, Smartphone, Fingerprint, ScanLine, Radio, Bell, Eye, Server, Cpu } from 'lucide-react';

const SolucionesElectronicas: React.FC = () => {
  const sections = [
    {
      title: "Video Vigilancia & IA",
      icon: <Eye size={32} />,
      desc: "Desde sistemas análogos hasta inteligencia artificial para monitoreo, control y seguridad forense. Cámaras para interior, exterior, a prueba de explosión y disuasión activa.",
      features: [
        "Detección facial", "Mapas de calor", "Detección de objetos estacionarios", 
        "Detección de peatones y vehículos", "Detección de sonidos inusuales", 
        "Detección de intrusión perimetral", "Detección de placas (LPR)", 
        "Conteo de cruces de línea"
      ]
    },
    {
      title: "Protección Perimetral",
      icon: <ScanLine size={32} />,
      desc: "Múltiples capas y anillos de protección para disuadir, detectar, demorar y responder.",
      features: [
        "Sensores PIR & Dual (Exteriores)",
        "Sistemas de Detección en Cercas (Corte/Escalamiento)",
        "Sensores de Microondas (Áreas abiertas)",
        "Cable Enterrado (Protección encubierta)",
        "Sensores Infrarrojos Activos/Pasivos"
      ]
    },
    {
      title: "Control de Accesos",
      icon: <Fingerprint size={32} />,
      desc: "Formalice quién tiene permiso para acceder a determinadas instalaciones. Basado en autenticación y autorización para reducir riesgos.",
      features: [
        "Biometría (Huella/Facial)", "Lectores de Tarjetas", 
        "Acceso Móvil", "Gestión de Visitas", "Historiales de acceso"
      ]
    },
    {
      title: "Video Móvil",
      icon: <Smartphone size={32} />,
      desc: "Control y seguridad en carros, camiones, maquinaria pesada y grúas torre. Video, audio bidireccional y ubicación satelital integrada.",
      features: []
    },
    {
      title: "Vigilancia y Automatización",
      icon: <Cpu size={32} />,
      desc: "Sistemas de alarma evolucionados con domótica. Seguridad para niños, adultos mayores, mascotas y control de dispositivos móviles.",
      features: ["Sistemas híbridos", "Autogestión App", "Verificación de video", "Botones de auxilio"]
    },
    {
      title: "Video Porteros",
      icon: <Bell size={32} />,
      desc: "Sepa quién llega sin abrir la puerta. Apertura remota y registro de rostros incluso cuando no se encuentra en el lugar.",
      features: []
    },
    {
      title: "Monitoreo 24/7",
      icon: <Radio size={32} />,
      desc: "Desde autogestión hasta videovigilancia profesional con operadores capacitados. Rondas virtuales programadas en perímetros críticos.",
      features: ["Respuesta a emergencias", "Monitoreo de alarmas", "Vigilancia remota de activos"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      {/* Hero */}
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-firebrick"></div>
            <span className="text-silver uppercase tracking-[0.4em] text-xs font-bold">Smart Security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-8">
            Soluciones <span className="font-bold text-firebrick">Electrónicas</span> y Tecnológicas
          </h1>
          <p className="text-silver text-xl max-w-3xl font-light leading-relaxed text-justify md:text-left">
            Vivimos interconectados. Los nuevos equipos de seguridad electrónica van más allá de ser solo seguridad; se integran en el ambiente personal y operativo. 
            Cuidamos la seguridad de su seguridad con <span className="text-white font-bold">Ciberseguridad e Inteligencia Artificial</span>.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((item, idx) => (
            <div key={idx} className={`p-8 border border-platinum hover:border-firebrick transition-all duration-300 bg-white shadow-sm hover:shadow-xl group ${item.features.length > 6 ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-raisin/5 text-firebrick rounded-sm group-hover:bg-firebrick group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-raisin mb-4 group-hover:text-firebrick transition-colors">{item.title}</h3>
                  <p className="text-silver text-sm leading-relaxed mb-6 text-justify">
                    {item.desc}
                  </p>
                  
                  {item.features.length > 0 && (
                    <div className="bg-platinum/20 p-6 rounded-sm">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-raisin mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-firebrick rounded-full"></div>
                        Capacidades & Características
                      </h4>
                      <ul className={`grid ${item.features.length > 4 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-x-8 gap-y-2`}>
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-sm text-raisin/80 flex items-center gap-2">
                            <span className="text-firebrick opacity-50">•</span> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ciberseguridad Note */}
      <section className="bg-raisin text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <Server size={64} className="text-firebrick flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">Seguridad de la Información</h3>
            <p className="text-silver text-sm max-w-2xl">
              Nuestros equipos de última generación no solo vigilan su entorno físico, sino que están blindados con protocolos de ciberseguridad para proteger su red de datos contra vulnerabilidades digitales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolucionesElectronicas;