
import React from 'react';
import { Sparkles, Heart, Users, ShieldCheck } from 'lucide-react';

interface TransformationProps {
  onRegister: () => void;
}

const Transformation: React.FC<TransformationProps> = ({ onRegister }) => {
  const items = [
    {
      icon: <Users className="text-red-700" />,
      title: "Sair do Arquétipo da Mãe",
      text: "Como parar de tratar seu marido como filho e ativar a postura de homem dele (sem precisar brigar)."
    },
    {
      icon: <Sparkles className="text-red-700" />,
      title: "O Resgate da Feminilidade Real",
      text: "Não é sobre usar vestido florido e falar baixo. É sobre recuperar sua energia receptiva para sair da exaustão e voltar a ser cuidada."
    },
    {
      icon: <Heart className="text-red-700" />,
      title: "A Dinâmica da Admiração",
      text: "O segredo para que ele volte a te olhar com desejo e não apenas como a 'gerente da casa'."
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a] text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#fdf2f2]">
            CHEGA DE TENTAR "AGRADAR" OU FAZER MAIS. É HORA DE FAZER DO JEITO CERTO.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            Muitas mulheres acham que para salvar o casamento precisam se humilhar ou fazer "joguinhos". Eu sou totalmente contra isso.
          </p>
        </div>

        <div className="mb-16">
          <p className="text-center text-xl mb-12 font-light">
            No Workshop do dia 31 de Janeiro, eu, <span className="font-bold text-red-400">Tayssa Machado</span>, vou te guiar através de um olhar profundo e psicológico (sem clichês) para:
          </p>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onRegister}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-red-50 transition-all text-lg shadow-xl"
          >
            Quero Minha Vaga no Workshop
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
