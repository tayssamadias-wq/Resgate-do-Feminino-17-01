
import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onRegister: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onRegister }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fdf2f2] to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-red-800 text-white rounded-lg text-sm font-bold animate-bounce">
          <ShieldCheck size={18} />
          ESTE WORKSHOP NÃO FICARÁ GRAVADO.
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
          Se você quer começar 2026 com uma nova dinâmica dentro da sua casa, você precisa estar ao vivo comigo.
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          O acesso é gratuito, mas as vagas na sala são limitadas para garantirmos a qualidade da transmissão.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 mb-12">
          <p className="text-lg text-gray-800 mb-10">
            Toque no botão abaixo e entre no <span className="font-bold text-green-600">Grupo VIP do WhatsApp</span> para receber o link de acesso e um presente exclusivo de boas-vindas.
          </p>

          <button 
            onClick={onRegister}
            className="w-full md:w-auto px-12 py-6 bg-red-700 hover:bg-red-800 text-white font-black text-xl rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter"
          >
            <MessageCircle size={28} className="fill-current" />
            GARANTIR MEU LUGAR GRATUITAMENTE
          </button>

          <p className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck size={16} />
            Seus dados estão seguros. Odeio spam tanto quanto você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
