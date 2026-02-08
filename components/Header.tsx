
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-red-700 text-white relative z-50 border-b-8 border-yellow-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Decorative Background Explosions to fill space */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <i className="fa-solid fa-explosion text-[40rem] absolute -top-40 -left-40 text-yellow-400 animate-pulse"></i>
        <i className="fa-solid fa-explosion text-[35rem] absolute top-20 -right-40 text-black"></i>
      </div>

      {/* Alert Banner */}
      <div className="relative z-20 bg-black text-yellow-400 px-4 py-3 text-center text-xs md:text-sm font-black animate-pulse uppercase tracking-[0.1em] border-b-2 border-yellow-400/30">
        🔥 AVISO: TRABALHAMOS COM ENCOMENDAS AGENDADAS! 
        <a 
          href={BUSINESS_INFO.deliveryLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-3 inline-block bg-yellow-400 text-black px-4 py-1 rounded-full font-black hover:bg-white transition-colors shadow-lg"
        >
          VER PRONTA ENTREGA AGORA 🚀
        </a>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center relative z-10">
        {/* MASSIVE LOGO AREA */}
        <div className="relative group mb-6 w-full flex justify-center">
            {/* Radial glow to fill space */}
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-[120px] opacity-50 animate-pulse scale-150"></div>
            
            <img 
              src={BUSINESS_INFO.logo} 
              alt="BOOM SALGADOS" 
              className="relative w-auto h-80 md:h-[42rem] max-w-[98vw] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-700 ease-out z-10"
            />
        </div>
        
        {/* IMPACT COPY - REMOVED ITALIC */}
        <div className="text-center max-w-5xl mx-auto mt-4">
          <h1 className="font-boom text-6xl md:text-9xl text-yellow-400 drop-shadow-[0_8px_0_rgba(0,0,0,1)] uppercase leading-none tracking-tighter">
            BOOM SALGADOS
          </h1>
          <div className="relative inline-block mt-6">
            <h2 className="font-boom text-2xl md:text-5xl text-white drop-shadow-md relative z-10 uppercase tracking-tight">
              "O SABOR QUE <span className="text-black bg-yellow-400 px-4 py-2 rounded-lg shadow-[0_5px_0_rgba(0,0,0,0.3)]">EXPLODE</span> NA SUA BOCA!" 💥
            </h2>
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-12">
            <p className="text-black bg-white font-black px-12 py-4 rounded-2xl text-xl md:text-3xl shadow-2xl uppercase tracking-widest border-4 border-black rotate-[-0.5deg]">
              Salgados Fritos & Assados Premium
            </p>
            <p className="text-yellow-100 font-bold text-lg md:text-2xl flex items-center justify-center gap-3 bg-black/50 px-8 py-3 rounded-full backdrop-blur-md border border-white/20">
              <i className="fa-solid fa-location-dot text-yellow-400"></i> {BUSINESS_INFO.address}
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-6xl">
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            className="flex flex-col items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white p-8 rounded-[2.5rem] font-black transition-all transform hover:-translate-y-3 shadow-[0_12px_0_rgb(22,101,52)] active:shadow-none active:translate-y-0"
          >
            <i className="fa-brands fa-whatsapp text-5xl"></i> 
            <span className="text-xl">WHATSAPP</span>
          </a>
          <a 
            href={BUSINESS_INFO.mapsLink}
            target="_blank"
            className="flex flex-col items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-[2.5rem] font-black transition-all transform hover:-translate-y-3 shadow-[0_12px_0_rgb(30,64,175)] active:shadow-none active:translate-y-0"
          >
            <i className="fa-solid fa-map-location-dot text-5xl"></i> 
            <span className="text-xl">LOCALIZAÇÃO</span>
          </a>
          <a 
            href={BUSINESS_INFO.deliveryLink}
            target="_blank"
            className="flex flex-col items-center justify-center gap-2 bg-black hover:bg-zinc-900 text-yellow-400 p-8 rounded-[2.5rem] font-black transition-all transform hover:-translate-y-3 shadow-[0_12px_0_rgb(39,39,42)] border-2 border-yellow-400/20 active:shadow-none active:translate-y-0"
          >
            <i className="fa-solid fa-truck-fast text-5xl"></i> 
            <span className="text-xl">DELIVERY</span>
          </a>
          <button 
            onClick={() => document.getElementById('menu-anchor')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black p-8 rounded-[2.5rem] font-black transition-all transform hover:-translate-y-3 shadow-[0_12px_0_rgb(202,138,4)] active:shadow-none active:translate-y-0"
          >
            <i className="fa-solid fa-utensils text-5xl"></i> 
            <span className="text-xl">CARDÁPIO</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
