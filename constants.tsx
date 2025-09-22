
import React from 'react';
import { BinCategory, WasteItem, Level, Sticker } from './types';

export const BINS: Record<BinCategory, { name: string; color: string; hoverColor: string; icon: JSX.Element; }> = {
  [BinCategory.ORGANIC]: {
    name: 'Orgánica',
    color: 'bg-green-600',
    hoverColor: 'bg-green-500',
    icon: <span role="img" aria-label="leaf">🌿</span>,
  },
  [BinCategory.NON_RECYCLABLE]: {
    name: 'No Reciclable',
    color: 'bg-gray-800',
    hoverColor: 'bg-gray-700',
    icon: <span role="img" aria-label="skull">☠️</span>,
  },
  [BinCategory.RECYCLABLE]: {
    name: 'Reciclable',
    color: 'bg-blue-500',
    hoverColor: 'bg-blue-400',
    icon: <span role="img" aria-label="recycle">♻️</span>,
  },
};

export const WASTE_ITEMS: Record<string, WasteItem> = {
  // Organic
  'banana-peel': { id: 'banana-peel', name: 'Cáscara de Plátano', emoji: '🍌', category: BinCategory.ORGANIC, explanation: 'Las cáscaras de frutas se descomponen y se convierten en abono para las plantas.' },
  'apple-core': { id: 'apple-core', name: 'Corazón de Manzana', emoji: '🍎', category: BinCategory.ORGANIC, explanation: 'Los restos de comida son orgánicos y ayudan a la tierra.' },
  'egg-shells': { id: 'egg-shells', name: 'Cáscaras de Huevo', emoji: '🥚', category: BinCategory.ORGANIC, explanation: 'Las cáscaras de huevo se deshacen y nutren el suelo.' },
  'dead-leaves': { id: 'dead-leaves', name: 'Hojas Secas', emoji: '🍂', category: BinCategory.ORGANIC, explanation: 'Las hojas y ramas secas son material perfecto para el compost.' },
  'wilted-flowers': { id: 'wilted-flowers', name: 'Flores Marchitas', emoji: '🥀', category: BinCategory.ORGANIC, explanation: 'Las plantas y flores viejas vuelven a la tierra de forma natural.' },
  // Non-recyclable
  'battery': { id: 'battery', name: 'Pila Usada', emoji: '🔋', category: BinCategory.NON_RECYCLABLE, explanation: 'Las pilas contienen químicos peligrosos y deben ir a un contenedor especial.' },
  'diaper': { id: 'diaper', name: 'Pañal Sucio', emoji: '👶', category: BinCategory.NON_RECYCLABLE, explanation: 'Los pañales usados no se pueden reciclar y van a la basura común.' },
  'rags': { id: 'rags', name: 'Trapo Roto', emoji: ' rags ', category: BinCategory.NON_RECYCLABLE, explanation: 'Las telas muy sucias o rotas no se reciclan fácilmente.' },
  'cigarette-butts': { id: 'cigarette-butts', name: 'Cenizas', emoji: '🚬', category: BinCategory.NON_RECYCLABLE, explanation: 'Las cenizas y colillas de cigarro contaminan y no se reciclan.' },
  'pills': { id: 'pills', name: 'Medicamentos Vencidos', emoji: '💊', category: BinCategory.NON_RECYCLABLE, explanation: 'Los medicamentos viejos son residuos especiales y no deben mezclarse.' },
  // Recyclable
  'paper': { id: 'paper', name: 'Papel', emoji: '📄', category: BinCategory.RECYCLABLE, explanation: 'El papel se recicla para hacer nuevos cuadernos y libros.' },
  'cardboard': { id: 'cardboard', name: 'Cartón', emoji: '📦', category: BinCategory.RECYCLABLE, explanation: 'Las cajas de cartón se convierten en nuevo material de empaque.' },
  'can': { id: 'can', name: 'Lata de Aluminio', emoji: '🥫', category: BinCategory.RECYCLABLE, explanation: 'Las latas de metal se pueden derretir y usar una y otra vez.' },
  'glass-bottle': { id: 'glass-bottle', name: 'Botella de Vidrio', emoji: '🍾', category: BinCategory.RECYCLABLE, explanation: 'El vidrio se recicla para crear nuevas botellas y frascos.' },
  'newspaper': { id: 'newspaper', name: 'Periódico', emoji: '📰', category: BinCategory.RECYCLABLE, explanation: 'Los periódicos viejos se reciclan para hacer más papel.' },
};

export const LEVELS: Level[] = [
  { level: 1, bins: [BinCategory.ORGANIC, BinCategory.NON_RECYCLABLE], items: ['banana-peel', 'apple-core', 'battery', 'diaper', 'egg-shells'], title: 'Nivel 1: Lo Básico', introMessage: '¡Empecemos! Clasifica entre lo que vuelve a la tierra (verde) y lo que no (negro).' },
  { level: 2, bins: [BinCategory.ORGANIC, BinCategory.RECYCLABLE], items: ['paper', 'cardboard', 'dead-leaves', 'wilted-flowers', 'can'], title: 'Nivel 2: ¡A Reciclar!', introMessage: '¡Ahora con reciclables! El papel y el cartón se pueden reutilizar (azul).' },
  { level: 3, bins: [BinCategory.ORGANIC, BinCategory.NON_RECYCLABLE, BinCategory.RECYCLABLE], items: ['glass-bottle', 'pills', 'apple-core', 'newspaper', 'rags', 'banana-peel', 'cigarette-butts'], title: 'Nivel 3: ¡Los Tres Contenedores!', introMessage: '¡Genial! Ahora usemos los tres contenedores. ¡Tú puedes hacerlo!' },
  { level: 4, bins: [BinCategory.ORGANIC, BinCategory.NON_RECYCLABLE, BinCategory.RECYCLABLE], items: ['diaper', 'can', 'egg-shells', 'cardboard', 'battery', 'dead-leaves', 'paper', 'pills'], title: 'Nivel 4: Mezcla Desafiante', introMessage: '¡Un poco más difícil! Fíjate bien en cada objeto antes de arrastrarlo.' },
  { level: 5, bins: [BinCategory.ORGANIC, BinCategory.NON_RECYCLABLE, BinCategory.RECYCLABLE], items: Object.keys(WASTE_ITEMS).sort(() => 0.5 - Math.random()).slice(0, 10), title: 'Nivel 5: Super Eco-Héroe', introMessage: '¡El desafío final! Demuestra que eres un verdadero Super Eco-Héroe.' },
];

export const STICKERS: Record<string, Sticker> = {
  'tree': { id: 'tree', name: 'Árbol Fuerte', emoji: '🌳' },
  'recycler-robot': { id: 'recycler-robot', name: 'Robot Reciclador', emoji: '🤖' },
  'clean-planet': { id: 'clean-planet', name: 'Planeta Feliz', emoji: '🌍' },
  'water-drop': { id: 'water-drop', name: 'Gota de Agua', emoji: '💧' },
  'eco-hero-badge': { id: 'eco-hero-badge', name: 'Medalla Eco-Héroe', emoji: '🏅' },
};

export const LEVEL_STICKER_MAP: Record<number, string> = {
    1: 'tree',
    2: 'recycler-robot',
    3: 'clean-planet',
    4: 'water-drop',
    5: 'eco-hero-badge',
};
