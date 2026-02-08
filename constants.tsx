
import { Product } from './types';

export const BUSINESS_INFO = {
  name: 'BOOM SALGADOS',
  address: 'Av. Altinópolis, 423 A – Jardim Santa Helena, Itaquaquecetuba | SP',
  whatsapp: '5511954609368',
  instagram: 'boomsalgados',
  deliveryLink: 'https://instadelivery.com.br/boomsalgados',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Altin%C3%B3polis,+423+A+-+Jardim+Santa+Helena+Itaquaquecetuba+SP',
  logo: 'https://i.imgur.com/DDYp38u.png',
  pudimImage: 'https://i.imgur.com/wLxUbp4.jpeg'
};

export const MENU_DATA: Product[] = [
  // COMBOS
  { id: 'c1', name: 'COMBO 1', description: '50 salgados, 10 churros, 1 refrigerante Dolly 2L', price: 48.00, category: 'COMBOS' },
  { id: 'c2', name: 'COMBO 2', description: '100 salgados, 1 refrigerante Sukita 2L', price: 65.00, category: 'COMBOS' },
  { id: 'c3', name: 'COMBO 3', description: '100 salgados, 20 churros, 1 refrigerante Coca-Cola 2L', price: 85.00, category: 'COMBOS' },
  { id: 'c4', name: 'COMBO 4', description: '150 salgados, 1 refrigerante Dolly 2L', price: 94.00, category: 'COMBOS' },
  { id: 'cp1', name: 'MINI PASTELZINHO (15un)', description: '15 mini pastelzinhos + 1 Coca-Cola lata (Carne, queijo ou calabresa)', price: 28.00, category: 'COMBOS' },
  { id: 'cp2', name: 'MINI PASTELZINHO (30un)', description: '30 mini pastelzinhos + 1 Guaraná Antarctica 1L (Carne, queijo ou calabresa)', price: 50.00, category: 'COMBOS' },
  { id: 'c6', name: 'COMBO 6', description: '50 salgados, 10 churros, 1 refrigerante Dolly 2L', price: 48.00, category: 'COMBOS' },
  { id: 'c7', name: 'COMBO 7', description: '100 salgados, 1 refrigerante Dolly 2L', price: 65.00, category: 'COMBOS' },
  { id: 'c8', name: 'COMBO 8', description: '150 salgados, 1 refrigerante Coca-Cola lata', price: 85.00, category: 'COMBOS' },

  // KIT FESTA
  { id: 'k30', name: 'KIT FESTA - 30 CONVIDADOS', description: '300 salgados, 30 lanchinhos, 30 doguinhos, 30 mini pizzas, 30 mini esfihas, 30 churros, 30 pastelzinhos', price: 415.00, category: 'KITS' },
  { id: 'k40', name: 'KIT FESTA - 40 CONVIDADOS', description: '400 salgados, 40 lanchinhos, 40 doguinhos, 40 mini pizzas, 40 mini esfihas, 40 churros, 40 pastelzinhos', price: 550.00, category: 'KITS' },
  { id: 'k50', name: 'KIT FESTA - 50 CONVIDADOS', description: '500 salgados, 50 lanchinhos, 50 doguinhos, 50 mini pizzas, 50 mini esfihas, 50 churros, 50 pastelzinhos', price: 670.00, category: 'KITS' },
  { id: 'k70', name: 'KIT FESTA - 70 CONVIDADOS', description: '700 salgados, 70 lanchinhos, 70 doguinhos, 70 mini pizzas, 70 mini esfihas, 70 churros, 70 pastelzinhos', price: 965.00, category: 'KITS' },
  { id: 'k100', name: 'KIT FESTA - 100 CONVIDADOS', description: '1000 salgados, 100 lanchinhos, 100 doguinhos, 100 mini pizzas, 100 mini esfihas, 100 churros, 100 pastelzinhos', price: 1290.00, category: 'KITS' },

  // SALGADOS INDIVIDUAIS
  { id: 'f50', name: 'FRITOS (50un)', description: 'Coxinha (frango/calabresa), Queijo, Risole, Salsicha, Kibe, Croquete Apimentado', price: 30.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'f100', name: 'FRITOS (100un)', description: 'Coxinha (frango/calabresa), Queijo, Risole, Salsicha, Kibe, Croquete Apimentado', price: 55.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'a50', name: 'ASSADOS (50un)', description: 'Esfiha de carne ou frango', price: 60.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'a100', name: 'ASSADOS (100un)', description: 'Esfiha de carne ou frango', price: 100.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'mp50', name: 'MINI PIZZA (50un)', description: 'Calabresa ou queijo', price: 55.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'mp100', name: 'MINI PIZZA (100un)', description: 'Calabresa ou queijo', price: 95.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'e20', name: 'EMPADAS (20un)', description: 'Frango', price: 35.00, category: 'INDIVIDUAL', unitLabel: '20 unid' },
  { id: 'ch50', name: 'CHURROS (50un)', description: 'Doce de leite', price: 32.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'ch100', name: 'CHURROS (100un)', description: 'Doce de leite', price: 60.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'd50', name: 'DOGUINHO (50un)', description: 'Salsicha e molho especial', price: 100.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'd100', name: 'DOGUINHO (100un)', description: 'Salsicha e molho especial', price: 195.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'l50', name: 'LANCHINHO (50un)', description: 'Presunto e queijo ou frango', price: 90.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'l100', name: 'LANCHINHO (100un)', description: 'Presunto e queijo ou frango', price: 175.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
  { id: 'p50', name: 'PASTELZINHO (50un)', description: 'Carne, queijo ou calabresa', price: 65.00, category: 'INDIVIDUAL', unitLabel: '50 unid' },
  { id: 'p100', name: 'PASTELZINHO (100un)', description: 'Carne, queijo ou calabresa', price: 120.00, category: 'INDIVIDUAL', unitLabel: '100 unid' },
];

export const UPSELL_PRODUCT: Product = {
  id: 'upsell-pudim',
  name: 'PUDIM DE SOBREMESA',
  description: 'Aquele toque final irresistível!',
  price: 16.90,
  category: 'EXTRA',
  image: BUSINESS_INFO.pudimImage
};
