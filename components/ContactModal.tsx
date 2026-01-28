import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [propertyType, setPropertyType] = useState('');
  const [concerns, setConcerns] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log({ propertyType, concerns, name, email });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-raisin/90 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Decor */}
        <div className="h-2 bg-firebrick"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-raisin hover:text-firebrick transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto">
          {!submitted ? (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-firebrick text-white p-3 rounded-sm">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-raisin">Solicitar Asesoría Técnica</h2>
                  <p className="text-silver text-sm">Complete el formulario y un consultor experto se pondrá en contacto con usted.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Su nombre"
                      className="w-full bg-raisin text-white border-b-2 border-firebrick/30 focus:border-firebrick p-4 outline-none transition-all placeholder:text-silver/50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Correo Electrónico</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@ejemplo.com"
                      className="w-full bg-raisin text-white border-b-2 border-firebrick/30 focus:border-firebrick p-4 outline-none transition-all placeholder:text-silver/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Tipo de Propiedad / Activo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: Planta Industrial, Edificio de Oficinas, Condominio..."
                    className="w-full bg-raisin text-white border-b-2 border-firebrick/30 focus:border-firebrick p-4 outline-none transition-all placeholder:text-silver/50"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Descripción de Necesidades</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describa sus necesidades: vigilancia, cámaras, alarmas, etc."
                    className="w-full bg-raisin text-white border border-silver/30 focus:border-firebrick p-4 outline-none transition-all resize-none placeholder:text-silver/50"
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-firebrick hover:bg-barnred text-white py-5 font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} /> ENVIAR SOLICITUD
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-fadeIn">
              <div className="flex justify-center mb-6">
                <CheckCircle size={80} className="text-firebrick" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-raisin mb-4">¡Solicitud Enviada!</h2>
              <p className="text-silver mb-8 max-w-md mx-auto">
                Hemos recibido su información correctamente. Un asesor técnico de ARGUS Security se pondrá en contacto con usted en las próximas 24 horas.
              </p>
              <button 
                onClick={onClose}
                className="bg-raisin text-white px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-firebrick transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;