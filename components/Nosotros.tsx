import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const Nosotros: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      {/* Hero Section Page */}
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-heading font-light text-white mb-4">
            Sobre <span className="font-bold text-firebrick text-6xl">ARGUS</span>
          </h1>
          <p className="text-silver text-xl max-w-2xl font-light">
            Definiendo el estándar de seguridad corporativa en Costa Rica desde hace más de una década.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-6">
        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <p className="text-xl text-raisin leading-relaxed font-light text-justify md:text-center">
            Argus nace con la experiencia y compromiso de una fusión de empresas de larga trayectoria nacional que por más de 15 años han trabajado en sistemas de seguridad y de protección contra incendios.
          </p>
          <p className="text-lg text-silver leading-relaxed text-justify md:text-center">
            Nos dedicamos a proteger personas y bienes, brindando tranquilidad a través del uso de tecnología inteligente.
            Aplicamos soluciones modernas que convierten los riesgos en confianza y aportan valor real a la seguridad de nuestros clientes.
          </p>
          <p className="text-lg text-silver leading-relaxed text-justify md:text-center">
            Contamos con amplia experiencia brindando servicios de seguridad a clientes en sectores como construcción,
            financiero, centros de llamadas, educación, distribución, comercio e industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="text-firebrick"><Target size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Misión</h3>
            <p className="text-silver leading-relaxed">
              Proporcionar tranquilidad y continuidad operativa a nuestros clientes mediante la integración inteligente de recursos humanos de élite y tecnología de vanguardia.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-firebrick"><Eye size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Visión</h3>
            <p className="text-silver leading-relaxed">
              Ser el referente absoluto en seguridad de alta gama en la región, anticipándonos a los riesgos mediante el uso estratégico de sistemas tecnológicos avanzados.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-firebrick"><Award size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Valores</h3>
            <ul className="text-silver space-y-2">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Integridad Absoluta</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Innovación Constante</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Excelencia Operativa</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Compromiso con el Cliente</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;