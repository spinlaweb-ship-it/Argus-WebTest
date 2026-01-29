import React from 'react';
import { ShieldCheck, Truck, Siren, MonitorPlay, Building2 } from 'lucide-react';

const SeguridadVigilancia: React.FC = () => {
  const services = [
    {
      title: "OFICIALES INTRAMUROS",
      desc: "Oficiales autorizados y capacitados para control de ingresos de personas y vehículos, servicio al cliente, rondas, personal masculino y femenino, armados o desarmados, o armas no letales.",
      icon: <Building2 size={40} />
    },
    {
      title: "CUSTODIOS y ESCOLTAS",
      desc: "Custodios que viajan en cabina o motocicleta para escoltar vehículos y mercancías. En rutas semanales en la ciudad o en carretera.",
      icon: <Truck size={40} />
    },
    {
      title: "PATRULLAJES",
      desc: "Oficiales motorizados que realizan rondas predeterminadas en zonas residenciales, comerciales o industriales, pueden incluir recepción de alarmas, botones de pánico, y visualización de cámaras específicas. Patrullajes diurnos o nocturnos.",
      icon: <Siren size={40} />
    },
    {
      title: "OFICIAL DE CENTRO DE OPERACIONES",
      desc: "Personal entrenado para monitorear su centro de operaciones de seguridad, diseño de protocolos e integración de los sistemas. Y si no lo tiene… se lo instalamos.",
      icon: <MonitorPlay size={40} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      {/* Hero Section */}
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-firebrick"></div>
            <span className="text-silver uppercase tracking-[0.4em] text-xs font-bold">Servicios Especializados</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-8">
            Seguridad & <span className="font-bold text-firebrick">Vigilancia</span>
          </h1>
          <p className="text-silver text-xl max-w-3xl font-light leading-relaxed text-justify md:text-left">
            Oficiales capacitados, equipados y supervisados con estrategias y protocolos diseñados especialmente para cada puesto. 
            Personal adscrito y autorizado por la DSSP del Ministerio de Seguridad Pública.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row gap-6 p-8 border border-platinum hover:border-firebrick transition-all duration-300 bg-white shadow-sm hover:shadow-xl">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-raisin text-white flex items-center justify-center rounded-sm group-hover:bg-firebrick transition-colors">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-raisin mb-4 uppercase tracking-wider group-hover:text-firebrick transition-colors">
                  {service.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break / CTA */}
      <section className="py-20 bg-platinum relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <ShieldCheck className="mx-auto text-firebrick mb-6" size={64} />
          <h2 className="text-3xl font-heading font-bold text-raisin mb-6">Estándares Internacionales</h2>
          <p className="max-w-2xl mx-auto text-raisin/70 mb-8">
            Cada uno de nuestros oficiales pasa por un riguroso proceso de selección, pruebas psicométricas, estudio de antecedentes y capacitación continua en manejo de crisis y atención al cliente.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-firebrick/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-firebrick/20"></div>
      </section>
    </div>
  );
};

export default SeguridadVigilancia;