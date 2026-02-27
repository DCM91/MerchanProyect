/**
 * Datos mock para MerchanSagas.
 * Se reemplazarán por datos reales de una API en fases posteriores.
 */

// Importación de imágenes de productos
const lightsaberImg = require('@/assets/images/products/lightsaber.png');
const oneRingImg = require('@/assets/images/products/one_ring.png');
const capShieldImg = require('@/assets/images/products/cap_shield.png');
const elderWandImg = require('@/assets/images/products/elder_wand.png');
const gokuFigureImg = require('@/assets/images/products/goku_figure.png');
const gauntletImg = require('@/assets/images/products/gauntlet.png');
const mandoHelmetImg = require('@/assets/images/products/mando_helmet.jpeg');
const pikachuPlushImg = require('@/assets/images/products/pikachu_plush.jpeg');

export type Product = {
    id: string;
    name: string;
    saga: string;
    price: number;
    emoji?: string;
    description: string;
    image?: any;
    featured: boolean;
};

export type Category = {
    id: string;
    name: string;
    emoji?: string;
    image?: any;
};

export const CATEGORIES: Category[] = [
    { id: '1', name: 'Star Wars' },
    { id: '2', name: 'LOTR' },
    { id: '3', name: 'Harry Potter' },
    { id: '4', name: 'Dragon Ball' },
    { id: '5', name: 'Marvel' },
    { id: '6', name: 'DC Comics' },
    { id: '7', name: 'Pokémon' },
    { id: '8', name: 'Naruto' },
];

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Sable Láser Réplica',
        saga: 'Star Wars',
        price: 89.99,
        emoji: '🗡️',
        description: 'Siente el poder de la Fuerza con esta réplica artesanal. Fabricado con un mango de duraluminio pulido y una hoja de policarbonato ultrarresistente.',
        image: lightsaberImg,
        featured: true,
    },
    {
        id: '2',
        name: 'Anillo Único Edición Premium',
        saga: 'LOTR',
        price: 49.99,
        emoji: '💍',
        description: 'Un anillo para gobernarlos a todos. Réplica chapada en oro de 18K con inscripciones grabadas por láser en la lengua negra de Mordor.',
        image: oneRingImg,
        featured: true,
    },
    {
        id: '3',
        name: 'Varita de Saúco',
        saga: 'Harry Potter',
        price: 34.99,
        emoji: '✨',
        description: 'La varita más poderosa del mudo mágico. Una pieza de colección indispensable para cualquier mago que aspire a dominar las Artes Oscuras.',
        image: elderWandImg,
        featured: true,
    },
    {
        id: '4',
        name: 'Estatua Goku Super Saiyan',
        saga: 'Dragon Ball',
        price: 124.99,
        emoji: '🐉',
        description: 'Figura de colección premium que captura el momento legendario de la transformación de Goku en Namek. Detalles increibles en el aura y la vestimenta.',
        image: gokuFigureImg,
        featured: true,
    },
    {
        id: '5',
        name: 'Escudo Capitán América',
        saga: 'Marvel',
        price: 129.99,
        emoji: '🛡️',
        description: 'Forjado con un material que simula el vibranium, este escudo es el símbolo de la libertad. Tamaño real 1:1 con correas de cuero ajustables.',
        image: capShieldImg,
        featured: false,
    },
    {
        id: '6',
        name: 'Casco Mandalorian',
        saga: 'Star Wars',
        price: 199.99,
        emoji: '⛑️',
        description: 'Perteneciente a la Hermandad de los Mandalorianos. Fabricado en metal pulido con visor ahumado para una autenticidad total. Este es el camino.',
        image: mandoHelmetImg,
        featured: true,
    },
    {
        id: '7',
        name: 'Capa de Invisibilidad',
        saga: 'Harry Potter',
        price: 59.99,
        emoji: '🧥',
        description: 'Tejida por la mismísima Muerte. Tela de satín iridiscente que simula el efecto de transparencia bajo cualquier luz temática.',
        featured: false,
    },
    {
        id: '8',
        name: 'Guantelete del Infinito',
        saga: 'Marvel',
        price: 149.99,
        emoji: '🧤',
        description: 'Controla el tiempo, el espacio y la realidad. Incluye 6 gemas con iluminación LED independiente y efectos de sonido cinematográficos.',
        image: gauntletImg,
        featured: true,
    },
    {
        id: '9',
        name: 'Espada Andúril',
        saga: 'LOTR',
        price: 179.99,
        emoji: '⚔️',
        description: 'La Llama del Oeste. Forjada de nuevo a partir de los fragmentos de Narsil. Una obra maestra de la herrería fantástica.',
        featured: false,
    },
    {
        id: '10',
        name: 'Radar del Dragón',
        saga: 'Dragon Ball',
        price: 39.99,
        emoji: '📡',
        description: 'Dispositivo electrónico que localiza las señales de las Bolas de Dragón. Imprescindible para cualquier buscador de deseos.',
        featured: false,
    },
    {
        id: '11',
        name: 'Batarang Colección',
        saga: 'DC Comics',
        price: 29.99,
        emoji: '🦇',
        description: 'El arma predilecta del Caballero Oscuro. Fabricado en acero negro mate equilibrado para un realismo absoluto.',
        featured: false,
    },
    {
        id: '12',
        name: 'Pikachu Peluche XL',
        saga: 'Pokémon',
        price: 44.99,
        emoji: '⚡',
        description: 'El compañero de aventuras más suave que encontrarás. Tamaño ultra grande con materiales de alta gama y bordados detallados.',
        image: pikachuPlushImg,
        featured: true,
    },
];

export const PROMO_BANNER = {
    title: 'Oferta Épica',
    subtitle: 'Hasta 40% en réplicas de Star Wars',
};
