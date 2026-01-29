import React from 'react';

const certifications = [
  {
    name: "ALAS",
    sub: "Asociación Latinoamericana de Seguridad",
    img: "https://placehold.co/400x200/e5e5e5/272727?text=ALAS+Logo"
  },
  {
    name: "NFPA",
    sub: "National Fire Protection Association",
    img: "https://placehold.co/400x200/e5e5e5/272727?text=NFPA+Logo"
  },
  {
    name: "ASIS",
    sub: "ASIS International",
    img: "https://placehold.co/400x200/e5e5e5/272727?text=ASIS+Logo"
  },
  {
    name: "ISO 9001",
    sub: "Certificación de Calidad",
    img: "https://placehold.co/400x200/e5e5e5/272727?text=ISO+9001"
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-platinum">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-firebrick uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Respaldo Internacional</h3>
        <h2 className="text-3xl font-heading font-light text-raisin mb-16">
          Nuestras <span className="font-bold">Certificaciones</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6 group w-full max-w-[200px]">
              <div className="w-full aspect-[3/2] flex items-center justify-center p-4 transition-all duration-300 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
                <img 
                  src={cert.img} 
                  alt={`${cert.name} Logo`} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-center">
                <div className="h-[2px] w-8 bg-firebrick mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-xs font-bold text-raisin block mb-1">{cert.name}</span>
                <span className="text-[9px] text-silver uppercase tracking-wider">{cert.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;