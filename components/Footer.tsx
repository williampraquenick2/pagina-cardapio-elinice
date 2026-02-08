
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 border-t-8 border-yellow-400 pt-16 pb-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full mb-10 shadow-2xl border-4 border-black">
            <img src={BUSINESS_INFO.logo} alt="Logo" className="h-32 hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h2 className="font-boom text-5xl text-yellow-400 mb-4 drop-shadow-[0_4px_0_rgba(0,0,0,1)]">BOOM SALGADOS</h2>
          <p className="text-white font-black text-xl mb-12 max-w-lg uppercase tracking-tight">
            ESPECIALISTAS EM SALGADOS QUE <span className="text-black bg-yellow-400 px-3 rounded">EXPLODEM</span> DE SABOR!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl bg-black p-10 rounded-[3rem] border-4 border-yellow-400 shadow-2xl mb-16">
            <div className="space-y-6 text-white text-lg text-center md:text-left">
              <h4 className="font-boom text-yellow-400 text-2xl mb-2">CONTATO</h4>
              <p className="flex items-center justify-center md:justify-start gap-4">
                <i className="fa-solid fa-location-dot text-yellow-400 text-2xl"></i>
                <span className="font-bold leading-tight">{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-4">
                <i className="fa-brands fa-whatsapp text-green-400 text-3xl"></i>
                <span className="font-black text-2xl">(11) 95460-9368</span>
              </p>
            </div>
            
            <div className="space-y-6">
               <h4 className="font-boom text-yellow-400 text-2xl mb-2">REDES SOCIAIS</h4>
               <div className="flex gap-8 justify-center md:justify-start">
                  <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" className="bg-zinc-900 p-6 rounded-3xl text-4xl text-white hover:text-pink-500 transition-all hover:scale-110 border-2 border-yellow-400/30">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" className="bg-zinc-900 p-6 rounded-3xl text-4xl text-white hover:text-green-500 transition-all hover:scale-110 border-2 border-yellow-400/30">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
               </div>
            </div>
          </div>

          <div className="text-sm text-yellow-400/60 uppercase tracking-[0.4em] font-black">
            &copy; {new Date().getFullYear()} BOOM SALGADOS - ITAQUAQUECETUBA/SP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
