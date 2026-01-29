import React from 'react';
import { FileCheck, Users, BarChart, GraduationCap, FileText, UserCheck, ShieldAlert } from 'lucide-react';

const ServiciosCorporativos: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
       {/* Hero */}
       <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-firebrick"></div>
            <span className="text-silver uppercase tracking-[0.4em] text-xs font-bold">Business Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-8">
            Servicios <span className="font-bold text-firebrick">Corporativos</span>
          </h1>
          <p className="text-silver text-xl max-w-3xl font-light leading-relaxed">
            Consultoría estratégica para la mitigación de riesgos internos y externos. Aseguramos la integridad de su estructura organizacional.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        
        {/* AMITAI & Trust Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <UserCheck size={40} className="text-firebrick" />
            <h2 className="text-3xl font-heading font-bold text-raisin">Control de Confianza & Contratación</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-platinum bg-white shadow-sm hover:border-firebrick transition-all">
              <h3 className="text-xl font-bold text-raisin mb-4">AMITAI</h3>
              <p className="text-silver text-sm leading-relaxed text-justify mb-4">
                Servicio de evaluaciones líder en Latinoamérica. Asegure una contratación segura y mejores prácticas internacionales para programas de Integridad, Ética y Cumplimiento.
              </p>
            </div>
            
            <div className="p-8 border border-platinum bg-white shadow-sm hover:border-firebrick transition-all">
              <h3 className="text-xl font-bold text-raisin mb-4">Honestidad Laboral</h3>
              <p className="text-silver text-sm leading-relaxed text-justify mb-4">
                Reduzca riesgos de robo, soborno, acoso, fraude y deslealtad. Evaluamos eficazmente la honestidad de candidatos y colaboradores activos.
              </p>
            </div>

            <div className="p-8 border border-platinum bg-white shadow-sm hover:border-firebrick transition-all">
              <h3 className="text-xl font-bold text-raisin mb-4">Integri-Line & E-Survey</h3>
              <p className="text-silver text-sm leading-relaxed text-justify mb-4">
                Canales de denuncia anónima disponibles 24/7 y encuestas de clima laboral online para detectar vulnerabilidades internas en su organización.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="mb-24 bg-platinum/30 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-firebrick/5 rounded-bl-full"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <ShieldAlert size={32} className="text-firebrick" />
                <h2 className="text-3xl font-heading font-bold text-raisin">Análisis de Riesgos</h2>
              </div>
              <p className="text-raisin leading-relaxed text-justify mb-6">
                Para asegurar una inversión en seguridad es vital cuantificar las pérdidas potenciales. Realizamos estudios profundos para establecer prioridades.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <BarChart size={20} className="text-firebrick" />
                  <span className="text-sm font-bold text-raisin uppercase tracking-wider">Análisis de Riesgo Rápido (ARR)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText size={20} className="text-firebrick" />
                  <span className="text-sm font-bold text-raisin uppercase tracking-wider">Estudios de Vulnerabilidad Física</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Visual representation of risk matrix */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
                <div className="bg-firebrick h-24 flex items-center justify-center text-white font-bold text-xs uppercase p-2 text-center">Alta Probabilidad<br/>Alto Impacto</div>
                <div className="bg-firebrick/60 h-24 flex items-center justify-center text-white font-bold text-xs uppercase p-2 text-center">Baja Probabilidad<br/>Alto Impacto</div>
                <div className="bg-firebrick/60 h-24 flex items-center justify-center text-white font-bold text-xs uppercase p-2 text-center">Alta Probabilidad<br/>Bajo Impacto</div>
                <div className="bg-silver/40 h-24 flex items-center justify-center text-raisin font-bold text-xs uppercase p-2 text-center">Baja Probabilidad<br/>Bajo Impacto</div>
              </div>
            </div>
          </div>
        </div>

        {/* Training & Other */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border-l-4 border-firebrick shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap size={32} className="text-firebrick" />
              <h3 className="text-2xl font-heading font-bold text-raisin">Capacitación</h3>
            </div>
            <p className="text-silver text-sm mb-6">
              El personal debe saber actuar bajo presión. Capacitamos no solo a guardias, sino a todo su equipo.
            </p>
            <ul className="space-y-2 text-sm text-raisin font-medium">
              <li>• Temas técnicos de sistemas de seguridad</li>
              <li>• Evacuación y apoyo a brigadas</li>
              <li>• Manejo de situaciones peligrosas</li>
            </ul>
          </div>

          <div className="p-8 border-l-4 border-silver shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <FileText size={32} className="text-silver" />
              <h3 className="text-2xl font-heading font-bold text-raisin">Protocolos & Manuales</h3>
            </div>
            <p className="text-silver text-sm mb-6">
              Documentación esencial para estandarizar la seguridad y el control en sus instalaciones.
            </p>
            <ul className="space-y-2 text-sm text-raisin font-medium">
              <li>• Manuales de seguridad a medida</li>
              <li>• Protocolos de emergencia</li>
              <li>• Esquemas de evacuación</li>
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ServiciosCorporativos;