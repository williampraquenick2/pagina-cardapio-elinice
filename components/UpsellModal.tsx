
import React from 'react';
import { UPSELL_PRODUCT } from '../constants';

interface UpsellModalProps {
  onAdd: () => void;
  onSkip: () => void;
}

const UpsellModal: React.FC<UpsellModalProps> = ({ onAdd, onSkip }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
      
      <div className="relative bg-gray-900 w-full max-w-sm rounded-[2.5rem] overflow-hidden border-4 border-yellow-400 shadow-[0_0_50px_rgba(255,242,0,0.3)] animate-boom">
        <div className="bg-yellow-400 py-3 text-center">
            <h3 className="font-boom text-black text-xl">💣 BOOM DE SOBREMESA!</h3>
        </div>
        
        <div className="p-8 text-center">
          <div className="mb-6 relative">
            <img 
              src={UPSELL_PRODUCT.image} 
              alt="Pudim Delicioso" 
              className="w-full aspect-square object-cover rounded-3xl border-4 border-red-600 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-2xl rotate-12 font-boom shadow-lg">
              R$ {UPSELL_PRODUCT.price.toFixed(2)}
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mb-8">
            Quer aproveitar e levar um <strong className="text-white">PUDIM DE SOBREMESA</strong> artesanal para fechar com chave de ouro?
          </p>

          <div className="space-y-3">
            <button 
              onClick={onAdd}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-2xl font-boom text-lg transition-transform active:scale-95"
            >
              SIM! QUERO O PUDIM 🍮
            </button>
            <button 
              onClick={onSkip}
              className="w-full bg-transparent text-gray-500 hover:text-white py-2 text-sm uppercase tracking-widest font-bold"
            >
              Continuar sem sobremesa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;
