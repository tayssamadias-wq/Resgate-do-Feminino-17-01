
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://picsum.photos/seed/tayssa/600/750" 
                alt="Tayssa Machado" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full -z-0 opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-800 rounded-3xl -z-0"></div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-4 block">Sua Mentora</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              QUEM IRÁ TE GUIAR?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
              <p>
                <span className="font-bold text-gray-900">Tayssa Machado</span> é Psicóloga (em formação), Mentora de Mulheres e Especialista em Dinâmicas de Relacionamento.
              </p>
              <p>
                Diferente das dicas rasas de internet, Tayssa une a profundidade da psicologia com uma visão prática e moderna. Ela ajuda mulheres ambiciosas, que já têm sucesso em outras áreas, a pararem de falhar na sua vida amorosa.
              </p>
              <p>
                Sua missão é clara: te ensinar a construir um relacionamento onde você não precise anular sua essência para ser amada.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center text-white font-serif italic text-xl">T</div>
               <p className="text-gray-900 font-serif italic text-xl">Por relacionamentos mais profundos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
