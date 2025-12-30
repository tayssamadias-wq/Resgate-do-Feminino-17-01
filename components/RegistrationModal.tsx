
import React, { useState } from 'react';
import { X, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // In a real app, window.location.href = 'WHATSAPP_LINK' would happen here
    }, 1500);
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Quase lá, {name.split(' ')[0]}!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sua vaga está pré-reservada. Agora você precisa entrar no Grupo VIP do WhatsApp para receber o link da aula e seu presente.
          </p>
          <a 
            href="https://wa.me/5500000000000" // Placeholder
            className="block w-full py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg text-lg"
          >
            ENTRAR NO GRUPO VIP
          </a>
          <p className="mt-4 text-xs text-gray-400">Você será redirecionada para o WhatsApp</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-serif text-red-800 mb-2">Garanta seu acesso</h2>
          <p className="text-gray-600">Preencha os dados abaixo para receber as instruções do Workshop.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Seu melhor Nome</label>
            <input 
              required
              type="text" 
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-100 focus:border-red-700 outline-none transition-all text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Seu melhor E-mail</label>
            <input 
              required
              type="email" 
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-100 focus:border-red-700 outline-none transition-all text-lg"
            />
          </div>

          <button 
            disabled={loading}
            className="w-full py-6 bg-red-700 hover:bg-red-800 text-white font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xl disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                EU QUERO MINHA VAGA
                <ArrowRight size={20} />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
            <ShieldCheck size={14} />
            Seus dados estão protegidos por criptografia.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
