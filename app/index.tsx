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
  const cardBg = useThemeColor({}, 'card');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(p => p.saga === selectedCategory)
    : PRODUCTS.filter(p => p.featured);

  const suggestions = searchQuery.trim().length > 0
    ? PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.saga.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  const navigateToCatalog = () => router.push('/explore');

  const handleSelectSuggestion = (id: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    router.push(`/product/${id}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.topSpacer} />

        {/* Search Bar & Autocomplete */}
        <View style={styles.searchWrapper}>
          <View style={[styles.searchContainer, { backgroundColor: searchBg }]}>
            <TextInput
              placeholder="Buscar productos, sagas..."
              placeholderTextColor={subtleText}
              style={[styles.searchInput, { color: textColor }]}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                setShowSuggestions(text.length > 0);
              }}
              onFocus={() => setShowSuggestions(searchQuery.length > 0)}
            />
          </View>

          {showSuggestions && suggestions.length > 0 && (
            <View style={[styles.suggestionsList, { backgroundColor: cardBg, borderColor: cardBorder }]}>
              {suggestions.map((item) => (
                <Pressable
                  key={item.id}
                  style={({ pressed }) => [
                    styles.suggestionItem,
                    { borderBottomColor: cardBorder, opacity: pressed ? 0.7 : 1 }
                  ]}
                  onPress={() => handleSelectSuggestion(item.id)}
                >
                  <View>
                    <ThemedText style={styles.suggestionName}>{item.name}</ThemedText>
                    <ThemedText style={styles.suggestionSaga}>{item.saga}</ThemedText>
                  </View>
                  <ThemedText style={[styles.suggestionPrice, { color: accent }]}>{item.price.toFixed(2)}€</ThemedText>
                </Pressable>
              ))}
            </View>
          )}
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
          title={selectedCategory ? `Viendo ${selectedCategory}` : "Destacados"}
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
  searchWrapper: {
    zIndex: 100,
    position: 'relative',
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
  searchInput: {
    flex: 1,
    fontSize: 15,
    padding: 0,
  },
  suggestionsList: {
    position: 'absolute',
    top: 68,
    left: 20,
    right: 20,
    borderRadius: 16,
    borderWidth: 1,
    padding: 8,
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
  },
  suggestionName: {
    fontSize: 15,
    fontWeight: '600',
  },
  suggestionSaga: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 2,
  },
  suggestionPrice: {
    fontSize: 14,
    fontWeight: '700',
  },
  promoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    zIndex: 1,
  },
  promoContent: {
    flex: 1,
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


