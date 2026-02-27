import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PRODUCTS } from '@/constants/mock-data';
import { SagaColors } from '@/constants/theme';
import { useCart } from '@/context/CartContext';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = React.useState(1);

    const product = PRODUCTS.find((p) => p.id === id);

    const bg = useThemeColor({}, 'background');
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    if (!product) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText>Producto no encontrado</ThemedText>
            </ThemedView>
        );
    }

    const sagaColor = SagaColors[product.saga as keyof typeof SagaColors] || accent;

    return (
        <ThemedView style={styles.container}>
            <Stack.Screen options={{ title: product.name, headerShown: true }} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.imageWrapper, { backgroundColor: cardBg, borderColor: cardBorder }]}>
                    {product.image ? (
                        <Image
                            source={product.image}
                            style={styles.mainImage}
                            contentFit="contain"
                        />
                    ) : (
                        <ThemedText style={styles.emojiFallback}>{product.emoji}</ThemedText>
                    )}
                </View>

                <View style={styles.details}>
                    <View style={styles.headerInfo}>
                        <View style={[styles.sagaBadge, { backgroundColor: sagaColor }]}>
                            <ThemedText style={styles.sagaText}>{product.saga}</ThemedText>
                        </View>
                        <ThemedText style={[styles.price, { color: accent }]}>
                            {product.price.toFixed(2)}€
                        </ThemedText>
                    </View>

                    <ThemedText type="title" selectable style={styles.name}>{product.name}</ThemedText>

                    <View style={styles.divider} />

                    <ThemedText type="subtitle" style={styles.sectionTitle}>Descripción</ThemedText>
                    <ThemedText selectable style={styles.description}>
                        {product.description}
                    </ThemedText>

                    <View style={styles.divider} />

                    <View style={styles.quantitySection}>
                        <ThemedText type="defaultSemiBold">Cantidad</ThemedText>
                        <View style={styles.quantityControls}>
                            <Pressable
                                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                                style={[styles.qtyBtn, { borderColor: cardBorder }]}
                            >
                                <ThemedText style={styles.qtyBtnText}>-</ThemedText>
                            </Pressable>
                            <ThemedText style={styles.qtyLabel}>{quantity}</ThemedText>
                            <Pressable
                                onPress={() => setQuantity(quantity + 1)}
                                style={[styles.qtyBtn, { borderColor: cardBorder }]}
                            >
                                <ThemedText style={styles.qtyBtnText}>+</ThemedText>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.spacer} />
                </View>
            </ScrollView>

            <View style={[styles.footer, { backgroundColor: bg, borderTopColor: cardBorder }]}>
                <Pressable
                    style={[styles.buyButton, { backgroundColor: accent }]}
                    onPress={() => {
                        addToCart(product, quantity);
                        router.push('/cart');
                    }}
                >
                    <ThemedText style={styles.buyButtonText}>Añadir {quantity > 1 ? `(${quantity})` : ''} al Carrito 🛒</ThemedText>
                </Pressable>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 150,
    },
    imageWrapper: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    emojiFallback: {
        fontSize: 120,
    },
    details: {
        padding: 24,
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sagaBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    sagaText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#000',
        textTransform: 'uppercase',
    },
    price: {
        fontSize: 24,
        fontWeight: '800',
    },
    name: {
        fontSize: 28,
        marginBottom: 20,
        lineHeight: 34,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(128,128,128,0.1)',
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        opacity: 0.9,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.7,
    },
    quantitySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    qtyBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyBtnText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    qtyLabel: {
        fontSize: 18,
        fontWeight: '800',
        minWidth: 30,
        textAlign: 'center',
    },
    spacer: {
        height: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: 40,
        borderTopWidth: 1,
    },
    buyButton: {
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    buyButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '900',
    },
});
