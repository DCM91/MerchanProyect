import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { CATEGORIES, PRODUCTS } from '@/constants/mock-data';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
  const bg = useThemeColor({}, 'background');

  // Agrupar productos por saga
  const productsBySaga = CATEGORIES.map((cat) => ({
    saga: cat,
    products: PRODUCTS.filter((p) => p.saga === cat.name),
  })).filter((group) => group.products.length > 0);

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]} showsVerticalScrollIndicator={false}>
      <View style={styles.headerSpacer} />

      {productsBySaga.map((group) => (
        <View key={group.saga.id}>
          <View style={styles.section}>
            <SectionHeader
              title={`${group.saga.emoji} ${group.saga.name}`}
            />
          </View>
          <View style={styles.productsGrid}>
            {group.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        </View>
      ))}

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSpacer: {
    height: 60,
  },
  section: {
    paddingHorizontal: 16,
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
