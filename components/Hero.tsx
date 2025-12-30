
import React from 'react';
import { Calendar, Clock, Monitor } from 'lucide-react';

interface HeroProps {
  onRegister: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdf2f2] to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-red-700 uppercase bg-red-50 rounded-full border border-red-100">
          Workshop Online e Gratuito
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-red-800 leading-tight mb-8">
          PARA A MULHER QUE ESTÁ CANSADA DE SER A <span className="italic underline decoration-red-300">"MÃE"</span> DO PRÓPRIO MARIDO
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Descubra como sair do papel de sobrecarga, resgatar sua feminilidade e voltar a ser a mulher que ele admira, deseja e protege.
        </p>

        <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 mb-12 max-w-2xl mx-auto shadow-sm">
          <p className="text-lg text-gray-600 italic mb-6">
            "Você é uma mulher inteligente, resolve tudo no trabalho e na vida. Mas, dentro de casa, sente que está carregando o casamento nas costas?"
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold text-gray-800">
            <div className="flex items-center gap-2">
              <Calendar className="text-red-700" size={20} />
              <span>31 de Janeiro (Sábado)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-red-700" size={20} />
              <span>09h00 (Horário de Brasília)</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="text-red-700" size={20} />
              <span>100% Online</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onRegister}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 shadow-lg hover:shadow-red-200 animate-pulse-custom"
        >
          <span className="relative uppercase tracking-widest text-lg">Quero Recuperar Meu Lugar</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
