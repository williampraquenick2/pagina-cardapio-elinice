
import React, { useState, useMemo } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import ProductCard from './components/ProductCard.tsx';
import Cart from './components/Cart.tsx';
import UpsellModal from './components/UpsellModal.tsx';
import { Product, CartItem, MenuTab } from './types.ts';
import { MENU_DATA, BUSINESS_INFO, UPSELL_PRODUCT } from './constants.tsx';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MenuTab>(MenuTab.COMBOS);
  const [showUpsell, setShowUpsell] = useState(false);

  const filteredProducts = useMemo(() => {
    return MENU_DATA.filter(p => p.category === activeTab);
  }, [activeTab]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCartItems([]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowUpsell(true);
  };

  const finalizeOrder = (withUpsell: boolean) => {
    let finalItems = [...cartItems];
    if (withUpsell) {
      const existingUpsell = finalItems.find(i => i.product.id === UPSELL_PRODUCT.id);
      if (existingUpsell) {
        finalItems = finalItems.map(i => i.product.id === UPSELL_PRODUCT.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        finalItems.push({ product: UPSELL_PRODUCT, quantity: 1 });
      }
    }

    const total = finalItems.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);
    const dateStr = new Date().toLocaleString('pt-BR');
    
    let message = `💥 *NOVO PEDIDO - BOOM SALGADOS* 💥\n`;
    message += `📅 Data: ${dateStr}\n\n`;
    message += `🛒 *ITENS DO PEDIDO:*\n`;
    
    finalItems.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 *VALOR TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    message += `⚠️ *AVISO:* Pedido agendado (encomenda). Favor informar data e horário de retirada/entrega abaixo:\n\n`;
    message += `---`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
    
    setShowUpsell(false);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-red-600 text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      
      <main id="menu-anchor" className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-16 bg-black p-4 rounded-[3rem] shadow-2xl border-4 border-yellow-400">
          <button 
            onClick={() => setActiveTab(MenuTab.COMBOS)}
            className={`px-8 py-5 rounded-full font-boom text-sm md:text-2xl transition-all shadow-lg border-b-8 ${
              activeTab === MenuTab.COMBOS 
              ? 'bg-yellow-400 text-black border-yellow-700 scale-110' 
              : 'bg-red-700 text-white border-red-900 hover:bg-red-600'
            }`}
          >
            🔥 COMBOS BOOM
          </button>
          <button 
            onClick={() => setActiveTab(MenuTab.KITS)}
            className={`px-8 py-5 rounded-full font-boom text-sm md:text-2xl transition-all shadow-lg border-b-8 ${
              activeTab === MenuTab.KITS 
              ? 'bg-yellow-400 text-black border-yellow-700 scale-110' 
              : 'bg-red-700 text-white border-red-900 hover:bg-red-600'
            }`}
          >
            🎉 KIT FESTA
          </button>
          <button 
            onClick={() => setActiveTab(MenuTab.INDIVIDUAL)}
            className={`px-8 py-5 rounded-full font-boom text-sm md:text-2xl transition-all shadow-lg border-b-8 ${
              activeTab === MenuTab.INDIVIDUAL 
              ? 'bg-yellow-400 text-black border-yellow-700 scale-110' 
              : 'bg-red-700 text-white border-red-900 hover:bg-red-600'
            }`}
          >
            🥟 SALGADOS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-24">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-black/40 rounded-[3rem] border-8 border-dashed border-yellow-400/20">
            <i className="fa-solid fa-explosion text-9xl text-yellow-400/20 mb-8"></i>
            <p className="text-yellow-400 font-boom text-3xl uppercase tracking-widest">Aguardando a próxima explosão de sabores!</p>
          </div>
        )}
      </main>

      <Footer />

      <Cart 
        items={cartItems} 
        onUpdateQuantity={updateQuantity} 
        onClear={clearCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        onCheckout={handleCheckout}
      />

      {showUpsell && (
        <UpsellModal 
          onAdd={() => finalizeOrder(true)} 
          onSkip={() => finalizeOrder(false)} 
        />
      )}
    </div>
  );
};

export default App;
