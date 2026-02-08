
import React from 'react';
import { CartItem, Product } from '../types';
import { BUSINESS_INFO } from '../constants';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClear: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onClear, isOpen, setIsOpen, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (items.length === 0 && !isOpen) return null;

  return (
    <>
      {/* Floating Button - REMOVED BOUNCE FOR STABILITY */}
      {!isOpen && items.length > 0 && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-[60] bg-red-600 text-white p-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-yellow-400 hover:scale-110 transition-transform active:scale-95"
        >
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-3xl"></i>
            <span className="absolute -top-5 -right-5 bg-yellow-400 text-black font-black rounded-full w-10 h-10 flex items-center justify-center text-lg border-2 border-black">
              {itemCount}
            </span>
          </div>
        </button>
      )}

      {/* Cart Sidebar/Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative bg-zinc-900 w-full max-w-xl md:rounded-[3rem] flex flex-col max-h-[95vh] shadow-2xl overflow-hidden border-t-8 border-yellow-400 md:border-8">
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-black">
              <h2 className="font-boom text-3xl text-yellow-400 tracking-tighter">MEU PEDIDO 🛒</h2>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-500 transition-colors">
                <i className="fa-solid fa-xmark text-4xl"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-zinc-900">
              {items.length === 0 ? (
                <div className="text-center py-16 text-white/20">
                  <i className="fa-solid fa-basket-shopping text-8xl mb-6 opacity-10"></i>
                  <p className="font-boom text-2xl uppercase">Seu carrinho está vazio!</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.product.id} className="flex items-center justify-between gap-6 bg-black p-5 rounded-3xl border-2 border-white/5">
                    <div className="flex-1">
                      <h4 className="font-black text-white text-xl uppercase leading-tight mb-1">{item.product.name}</h4>
                      <p className="text-yellow-400 font-boom text-lg">R$ {(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-12 h-12 rounded-2xl bg-zinc-800 text-white hover:bg-zinc-700 font-black text-2xl border-b-4 border-black active:translate-y-1 active:border-b-0"
                      >
                        -
                      </button>
                      <span className="font-black text-2xl w-8 text-center text-white">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-12 h-12 rounded-2xl bg-red-600 text-white hover:bg-red-500 font-black text-2xl border-b-4 border-red-900 active:translate-y-1 active:border-b-0"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-black border-t-4 border-yellow-400">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-white font-black uppercase tracking-widest text-lg">Total do Pedido</span>
                  <span className="text-5xl font-boom text-yellow-400 drop-shadow-lg">R$ {total.toFixed(2)}</span>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={onCheckout}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-6 rounded-3xl font-boom text-2xl tracking-wider transition-all transform active:scale-95 shadow-[0_8px_0_rgb(22,101,52)] active:shadow-none"
                  >
                    FINALIZAR PEDIDO <i className="fa-brands fa-whatsapp ml-3"></i>
                  </button>
                  <button 
                    onClick={onClear}
                    className="w-full text-white/40 text-sm font-bold hover:text-red-500 py-2 uppercase tracking-widest"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
