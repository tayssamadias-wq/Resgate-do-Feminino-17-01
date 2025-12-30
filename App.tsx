
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Monitor, 
  ShieldCheck, 
  Users, 
  Heart, 
  Sparkles,
  Zap
} from 'lucide-react';
import Hero from './components/Hero';
import Diagnosis from './components/Diagnosis';
import Transformation from './components/Transformation';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Mobile/Desktop CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 transition-all duration-300 transform ${showStickyBtn ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button 
          onClick={openModal}
          className="w-full max-w-lg mx-auto block bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-wider"
        >
          <Zap size={18} className="fill-current" />
          Quero Recuperar Meu Lugar
        </button>
      </div>

      <Hero onRegister={openModal} />
      
      <main>
        <Diagnosis />
        <Transformation onRegister={openModal} />
        <About />
        <FinalCTA onRegister={openModal} />
      </main>

      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Tayssa Machado. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Este site não faz parte do Google ou Facebook. Além disso, não é endossado por eles de nenhuma maneira.
          </p>
        </div>
      </footer>

      {isModalOpen && <RegistrationModal onClose={closeModal} />}
    </div>
  );
};

export default App;
