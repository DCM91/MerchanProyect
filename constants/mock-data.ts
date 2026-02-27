/**
 * Datos mock para MerchanSagas.
 * Se reemplazarán por datos reales de una API en fases posteriores.
 */

export type Product = {
    id: string;
    name: string;
    saga: string;
    price: number;
    emoji: string;
    featured: boolean;
};

export type Category = {
    id: string;
    name: string;
    emoji: string;
};

export const CATEGORIES: Category[] = [
    { id: '1', name: 'Star Wars', emoji: '⚔️' },
    { id: '2', name: 'LOTR', emoji: '💍' },
    { id: '3', name: 'Harry Potter', emoji: '🧙' },
    { id: '4', name: 'Dragon Ball', emoji: '🐉' },
    { id: '5', name: 'Marvel', emoji: '🦸' },
    { id: '6', name: 'DC Comics', emoji: '🦇' },
    { id: '7', name: 'Pokémon', emoji: '⚡' },
    { id: '8', name: 'Naruto', emoji: '🍥' },
];

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Sable Láser Réplica',
        saga: 'Star Wars',
        price: 89.99,
        emoji: '🗡️',
        featured: true,
    },
    {
        id: '2',
        name: 'Anillo Único Edición Premium',
        saga: 'LOTR',
        price: 49.99,
        emoji: '💍',
        featured: true,
    },
    {
        id: '3',
        name: 'Varita de Saúco',
        saga: 'Harry Potter',
        price: 34.99,
        emoji: '✨',
        featured: true,
    },
    {
        id: '4',
        name: 'Bola de Dragón 4 Estrellas',
        saga: 'Dragon Ball',
        price: 24.99,
        emoji: '🔮',
        featured: true,
    },
    {
        id: '5',
        name: 'Escudo Capitán América',
        saga: 'Marvel',
        price: 129.99,
        emoji: '🛡️',
        featured: false,
    },
    {
        id: '6',
        name: 'Casco Mandalorian',
        saga: 'Star Wars',
        price: 199.99,
        emoji: '⛑️',
        featured: true,
    },
    {
        id: '7',
        name: 'Capa de Invisibilidad',
        saga: 'Harry Potter',
        price: 59.99,
        emoji: '🧥',
        featured: false,
    },
    {
        id: '8',
        name: 'Guantelete del Infinito',
        saga: 'Marvel',
        price: 149.99,
        emoji: '🧤',
        featured: true,
    },
    {
        id: '9',
        name: 'Espada Andúril',
        saga: 'LOTR',
        price: 179.99,
        emoji: '⚔️',
        featured: false,
    },
    {
        id: '10',
        name: 'Radar del Dragón',
        saga: 'Dragon Ball',
        price: 39.99,
        emoji: '📡',
        featured: false,
    },
    {
        id: '11',
        name: 'Batarang Colección',
        saga: 'DC Comics',
        price: 29.99,
        emoji: '🦇',
        featured: false,
    },
    {
        id: '12',
        name: 'Pikachu Peluche XL',
        saga: 'Pokémon',
        price: 44.99,
        emoji: '⚡',
        featured: true,
    },
];

export const PROMO_BANNER = {
    title: '🔥 Oferta Épica',
    subtitle: 'Hasta 40% en réplicas de Star Wars',
    emoji: '⚔️',
};
