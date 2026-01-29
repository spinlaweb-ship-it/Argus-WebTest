import React from 'react';
import { Flame, Wind, FireExtinguisher, Droplets, AlertTriangle, CheckCircle2 } from 'lucide-react';

const ProteccionIncendios: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      {/* Hero */}
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-firebrick"></div>
            <span className="text-silver uppercase tracking-[0.4em] text-xs font-bold">NFPA Standards</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-8">
            Protección Contra <span className="font-bold text-firebrick">Incendios</span>
          </h1>
          <p className="text-silver text-xl max-w-3xl font-light leading-relaxed">
            Sistemas certificados para detección temprana y supresión automática. Protegemos vidas y aseguramos la continuidad de su negocio reduciendo riesgos operativos.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="space-y-24">
          
          {/* Alarma y Detección */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 bg-platinum/30 p-8 border-l-4 border-firebrick">
              <Flame size={48} className="text-firebrick mb-6" />
              <h3 className="text-2xl font-heading font-bold text-raisin mb-4">Alarma y Detección</h3>
              <p className="text-silver text-sm leading-relaxed text-justify">
                La detección rápida es esencial para actuar de manera oportuna, permitiendo la evacuación inmediata y protegiendo activos.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Sistemas residenciales, comerciales e industriales",
                "Paneles direccionados inteligentes",
                "Sensores de humo, calor y flama",
                "Detectores de respuesta rápida",
                "Sistemas de voceo de evacuación"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white shadow-sm border border-platinum">
                  <CheckCircle2 size={18} className="text-firebrick flex-shrink-0" />
                  <span className="text-raisin text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gases Peligrosos */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="md:w-1/3 bg-platinum/30 p-8 border-r-4 border-firebrick text-right">
              <div className="flex justify-end mb-6"><Wind size={48} className="text-firebrick" /></div>
              <h3 className="text-2xl font-heading font-bold text-raisin mb-4">Detección de Gases</h3>
              <p className="text-silver text-sm leading-relaxed text-justify">
                Las fugas de Gas LP y monóxido de carbono representan riesgos mortales y de explosión. Nuestros sensores previenen desastres invisibles.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                "Sensores en tanques de GLP",
                "Válvulas de corte automático",
                "Dispositivos de alerta audiovisual",
                "Sistemas para estacionamientos (CO)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white shadow-sm border border-platinum">
                  <AlertTriangle size={18} className="text-firebrick flex-shrink-0" />
                  <span className="text-raisin text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extinción Agentes Limpios */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 bg-platinum/30 p-8 border-l-4 border-firebrick">
              <FireExtinguisher size={48} className="text-firebrick mb-6" />
              <h3 className="text-2xl font-heading font-bold text-raisin mb-4">Agentes Limpios</h3>
              <p className="text-silver text-sm leading-relaxed text-justify">
                Diseñados para áreas de alto valor (Data Centers, Museos) donde el agua no es opción. Operan sin dañar electrónicos y sin dejar residuos.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border border-platinum hover:border-firebrick transition-colors">
                  <span className="block text-firebrick font-bold mb-1">Gases Sustitutos Halon</span>
                  <span className="text-xs text-silver">Novec 1230, HFC236, FM200</span>
                </div>
                <div className="p-4 border border-platinum hover:border-firebrick transition-colors">
                  <span className="block text-firebrick font-bold mb-1">Agentes Físicos</span>
                  <span className="text-xs text-silver">Aerosoles, Gel, Polvo Químico, CO2</span>
                </div>
              </div>
              <p className="text-sm text-silver italic">Incluye sistemas automáticos y extintores manuales especializados.</p>
            </div>
          </div>

          {/* Extinción con Agua */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
             <div className="md:w-1/3 bg-platinum/30 p-8 border-r-4 border-firebrick text-right">
              <div className="flex justify-end mb-6"><Droplets size={48} className="text-firebrick" /></div>
              <h3 className="text-2xl font-heading font-bold text-raisin mb-4">Sistemas de Agua</h3>
              <p className="text-silver text-sm leading-relaxed text-justify">
                El método estándar para combate de incendios de gran magnitud. Reduce costos de pólizas de seguro y asegura la infraestructura.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Rociadores automáticos (Sprinklers)",
                "Sistemas de diluvio",
                "Redes de Hidrantes",
                "Tanques de almacenamiento",
                "Bombas normalizadas (Diésel/Eléctricas)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white shadow-sm border border-platinum">
                  <div className="w-2 h-2 bg-firebrick rounded-full"></div>
                  <span className="text-raisin text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProteccionIncendios;