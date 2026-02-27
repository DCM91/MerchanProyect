import { CategoryBadge } from '@/components/CategoryBadge';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CATEGORIES, PRODUCTS, PROMO_BANNER } from '@/constants/mock-data';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const textColor = useThemeColor({}, 'text');
  const searchBg = useThemeColor({}, 'searchBg');
  const subtleText = useThemeColor({}, 'subtleText');
  const accent = useThemeColor({}, 'accent');
  const promoBg = useThemeColor({}, 'promo');
  const promoText = useThemeColor({}, 'promoText');
  const cardBorder = useThemeColor({}, 'cardBorder');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(p => p.saga === selectedCategory)
    : PRODUCTS.filter(p => p.featured);

  const navigateToCatalog = () => router.push('/explore');

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topSpacer} />

        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: searchBg }]}>
          <ThemedText style={styles.searchIcon}>🔍</ThemedText>
          <TextInput
            placeholder="Buscar productos, sagas..."
            placeholderTextColor={subtleText}
            style={[styles.searchInput, { color: textColor }]}
          />
        </View>

        {/* Promo Banner */}
        <Pressable
          onPress={navigateToCatalog}
          style={[styles.promoBanner, { backgroundColor: promoBg }]}>
          <View style={styles.promoContent}>
            <ThemedText type="subtitle" style={{ color: accent }}>{PROMO_BANNER.title}</ThemedText>
            <ThemedText style={{ color: promoText }}>
              {PROMO_BANNER.subtitle}
            </ThemedText>
          </View>
          <ThemedText style={styles.promoEmoji}>{PROMO_BANNER.emoji}</ThemedText>
        </Pressable>

        {/* Categories */}
        <SectionHeader title="Sagas" onActionPress={navigateToCatalog} />
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

        {/* Featured / Filtered Products */}
        <SectionHeader
          title={selectedCategory ? `Viendo ${selectedCategory}` : "⭐ Destacados"}
          onActionPress={navigateToCatalog}
        />
        <View style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <ThemedText style={styles.emptyText}>No hay productos en esta saga aún.</ThemedText>
          )}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSpacer: {
    height: 10,
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
    justifyContent: 'flex-start',
  },
  emptyText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.6,
  },
  bottomSpacer: {
    height: 40,
  },
});
