
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAdd = () => {
    setIsAnimating(true);
    onAddToCart(product);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const descriptionItems = product.description?.split(',').map(s => s.trim());

  return (
    <div className={`relative bg-black border-4 ${isAnimating ? 'border-white scale-105' : 'border-yellow-400'} rounded-[2.5rem] p-6 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-2xl hover:shadow-yellow-400/20`}>
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all duration-700 transform group-hover:rotate-[360deg] group-hover:scale-150">
        <i className="fa-solid fa-explosion text-9xl text-yellow-400"></i>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="font-boom text-2xl text-white leading-tight drop-shadow-[0_2px_0_rgba(234,179,8,1)] uppercase">
            {product.name}
          </h3>
          {product.unitLabel && (
            <span className="bg-red-600 text-[10px] px-3 py-1 rounded-lg font-boom text-white border-2 border-white shadow-md">
              {product.unitLabel}
            </span>
          )}
        </div>
        
        {/* HIGH CONTRAST DESCRIPTION - YELLOW BOX - NO ITALICS */}
        <div className="bg-yellow-400 p-4 rounded-2xl mb-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-2 border-black transform group-hover:scale-[1.02] transition-transform">
          <ul className="space-y-2">
            {descriptionItems?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-black font-black text-sm md:text-base uppercase leading-tight">
                <i className="fa-solid fa-bolt text-red-600"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t-2 border-yellow-400/30">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Preço Especial</span>
          <div className="text-3xl font-boom text-white drop-shadow-lg flex items-baseline gap-1">
            <span className="text-xs text-yellow-400 font-black">R$</span>
            {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
        </div>
        
        <button 
          onClick={handleAdd}
          className={`flex items-center justify-center w-16 h-16 rounded-2xl transition-all shadow-xl border-b-4 ${
            isAnimating 
            ? 'bg-white text-black border-zinc-300 scale-125' 
            : 'bg-red-600 text-white border-red-900 hover:bg-red-500 hover:scale-110 active:translate-y-1 active:border-b-0'
          }`}
        >
          {isAnimating ? (
            <i className="fa-solid fa-explosion text-3xl"></i>
          ) : (
            <i className="fa-solid fa-cart-arrow-down text-3xl"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
