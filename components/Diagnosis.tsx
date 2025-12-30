
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Diagnosis: React.FC = () => {
  const situations = [
    {
      title: "A Gestora do Lar",
      description: "Se você não lembrar, ninguém faz. Você decide o que comer, quando pagar as contas e até onde está a toalha dele. Você se sente exausta mentalmente."
    },
    {
      title: "A Solidão a Dois",
      description: "Vocês estão juntos na mesma casa, mas a conexão profunda sumiu. As conversas são apenas logísticas ('comprou pão?', 'pagou a luz?')."
    },
    {
      title: "A Perda da Doçura",
      description: "Para dar conta de tudo, você precisou ficar 'dura', rígida e controladora. Você sente saudade de ser leve, mas tem medo de que, se soltar, tudo desmorone."
    },
    {
      title: "Libido no Automático",
      description: "O sexo virou mais uma tarefa na sua lista de afazeres interminável, ou pior, algo que você evita porque está cansada demais para ser 'mulher'."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            VOCÊ SE RECONHECE EM ALGUMA DESSAS SITUAÇÕES?
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {situations.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-2xl bg-[#fafafa] border border-gray-100 transition-hover duration-300 hover:shadow-md">
              <div className="flex-shrink-0">
                <CheckCircle2 className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 bg-red-50 rounded-3xl border border-red-100 text-center">
          <p className="text-lg md:text-xl text-red-900 font-medium leading-relaxed">
            Se você marcou <span className="font-bold underline">"sim"</span> para alguma dessas, o problema não é o seu marido, nem a falta de amor. 
            O problema é que você está ocupando o <span className="font-bold">LUGAR ERRADO</span> na dinâmica do relacionamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
