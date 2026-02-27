/**
 * MerchanSagas Theme
 * Paleta épica para marketplace de merchandising de sagas míticas.
 */

import { Platform } from 'react-native';

const tintColorLight = '#2D1B69';
const tintColorDark = '#D4A843';

export const Colors = {
  light: {
    text: '#1A1A2E',
    background: '#FAF6F0',
    tint: tintColorLight,
    icon: '#6B5B8A',
    tabIconDefault: '#9B8FB0',
    tabIconSelected: tintColorLight,
    card: '#FFFFFF',
    cardBorder: '#E8E0D4',
    searchBg: '#F0EBE3',
    accent: '#D4A843',
    accentSecondary: '#2D1B69',
    subtleText: '#7A7585',
    promo: '#1A1A2E',
    promoText: '#FAF6F0',
  },
  dark: {
    text: '#ECEDEE',
    background: '#0B0D17',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#5A5F65',
    tabIconSelected: tintColorDark,
    card: '#141827',
    cardBorder: '#1E2235',
    searchBg: '#141827',
    accent: '#D4A843',
    accentSecondary: '#8B6FD4',
    subtleText: '#7A7D85',
    promo: '#1A1132',
    promoText: '#FAF6F0',
  },
};

export const Layout = {
  radius: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 24,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
};

export const SagaColors: Record<string, string> = {
  'Star Wars': '#FFE81F',
  'LOTR': '#2E7D32',
  'Harry Potter': '#7B1FA2',
  'Dragon Ball': '#FF6F00',
  'Marvel': '#D32F2F',
  'DC Comics': '#1565C0',
  'Pokémon': '#FBC02D',
  'Naruto': '#E65100',
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
