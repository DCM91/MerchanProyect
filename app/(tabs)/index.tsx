import { CategoryBadge } from '@/components/CategoryBadge';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { CATEGORIES, PRODUCTS, PROMO_BANNER } from '@/constants/mock-data';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function HomeScreen() {
  const bg = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const searchBg = useThemeColor({}, 'searchBg');
  const subtleText = useThemeColor({}, 'subtleText');
  const accent = useThemeColor({}, 'accent');
  const promoBg = useThemeColor({}, 'promo');
  const promoText = useThemeColor({}, 'promoText');
  const cardBorder = useThemeColor({}, 'cardBorder');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.logo, { color: accent }]}>⚔️ MerchanSagas</Text>
          <Text style={[styles.tagline, { color: subtleText }]}>
            Tu tienda de sagas míticas
          </Text>
        </View>
        <Pressable style={[styles.cartButton, { borderColor: cardBorder }]}>
          <Text style={styles.cartEmoji}>🛒</Text>
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: searchBg }]}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Buscar productos, sagas..."
          placeholderTextColor={subtleText}
          style={[styles.searchInput, { color: textColor }]}
        />
      </View>

      {/* Promo Banner */}
      <View style={[styles.promoBanner, { backgroundColor: promoBg }]}>
        <View style={styles.promoContent}>
          <Text style={[styles.promoTitle, { color: accent }]}>{PROMO_BANNER.title}</Text>
          <Text style={[styles.promoSubtitle, { color: promoText }]}>
            {PROMO_BANNER.subtitle}
          </Text>
        </View>
        <Text style={styles.promoEmoji}>{PROMO_BANNER.emoji}</Text>
      </View>

      {/* Categories */}
      <SectionHeader title="Sagas" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}>
        {CATEGORIES.map((cat) => (
          <CategoryBadge
            key={cat.id}
            category={cat}
            isSelected={selectedCategory === cat.name}
            onPress={() =>
              setSelectedCategory(selectedCategory === cat.name ? null : cat.name)
            }
          />
        ))}
      </ScrollView>

      {/* Featured Products */}
      <SectionHeader title="⭐ Destacados" />
      <View style={styles.productsGrid}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: '900',
  },
  tagline: {
    fontSize: 13,
    marginTop: 2,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmoji: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    padding: 0,
  },
  promoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  promoSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  promoEmoji: {
    fontSize: 48,
    marginLeft: 12,
  },
  categoriesList: {
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
  },
  bottomSpacer: {
    height: 40,
  },
});
