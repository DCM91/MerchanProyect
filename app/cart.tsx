import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useCart } from '@/context/CartContext';
import { useThemeColor } from '@/hooks/use-theme-color';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

export default function CartScreen() {
    const router = useRouter();
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    const bg = useThemeColor({}, 'background');
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    const renderItem = ({ item }: { item: any }) => (
        <View style={[styles.itemCard, { backgroundColor: cardBg, borderColor: cardBorder }]}>
            <View style={styles.itemImageWrapper}>
                {item.image ? (
                    <Image source={item.image} style={styles.itemImage} contentFit="contain" />
                ) : (
                    <ThemedText style={styles.itemEmoji}>{item.emoji}</ThemedText>
                )}
            </View>

            <View style={styles.itemInfo}>
                <ThemedText type="defaultSemiBold" numberOfLines={1}>{item.name}</ThemedText>
                <ThemedText style={[styles.itemPrice, { color: accent }]}>{item.price.toFixed(2)}€</ThemedText>

                <View style={styles.quantityControls}>
                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            updateQuantity(item.id, item.quantity - 1);
                        }}
                        style={[styles.qtyBtn, { borderColor: cardBorder }]}
                    >
                        <ThemedText>-</ThemedText>
                    </Pressable>
                    <ThemedText style={styles.qtyText}>{item.quantity}</ThemedText>
                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            updateQuantity(item.id, item.quantity + 1);
                        }}
                        style={[styles.qtyBtn, { borderColor: cardBorder }]}
                    >
                        <ThemedText>+</ThemedText>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                            removeFromCart(item.id);
                        }}
                        style={styles.removeBtn}
                    >
                        <ThemedText style={styles.removeIcon}>🗑️</ThemedText>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <ThemedView style={styles.container}>
            <Stack.Screen options={{ title: `Carrito (${totalItems})`, headerShown: true }} />

            {cart.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <ThemedText style={styles.emptyEmoji}>🛒</ThemedText>
                    <ThemedText type="subtitle">Tu carrito está vacío</ThemedText>
                    <ThemedText style={styles.emptySub}>¡Explora nuestras sagas y añade algo épico!</ThemedText>
                    <Pressable
                        style={[styles.exploreBtn, { backgroundColor: accent }]}
                        onPress={() => router.push('/')}
                    >
                        <ThemedText style={styles.exploreBtnText}>Ir a la Tienda</ThemedText>
                    </Pressable>
                </View>
            ) : (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={styles.listContent}
                    />

                    <View style={[styles.summary, { backgroundColor: cardBg, borderTopColor: cardBorder }]}>
                        <View style={styles.summaryRow}>
                            <ThemedText>Subtotal</ThemedText>
                            <ThemedText type="defaultSemiBold">{totalPrice.toFixed(2)}€</ThemedText>
                        </View>
                        <View style={styles.summaryRow}>
                            <ThemedText>Envío</ThemedText>
                            <ThemedText style={{ color: '#4CAF50' }}>GRATIS</ThemedText>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryRow}>
                            <ThemedText type="subtitle">Total</ThemedText>
                            <ThemedText type="title" style={{ color: accent }}>{totalPrice.toFixed(2)}€</ThemedText>
                        </View>

                        <Pressable
                            onPress={() => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                                router.push('/checkout');
                            }}
                            style={[styles.checkoutBtn, { backgroundColor: accent }]}
                        >
                            <ThemedText style={styles.checkoutText}>Finalizar Pedido</ThemedText>
                        </Pressable>
                    </View>
                </>
            )}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        padding: 16,
        paddingBottom: 200,
    },
    itemCard: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 16,
        borderWidth: 1,
        marginBottom: 12,
        alignItems: 'center',
    },
    itemImageWrapper: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(128,128,128,0.05)',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: '100%',
        height: '100%',
    },
    itemEmoji: {
        fontSize: 40,
    },
    itemInfo: {
        flex: 1,
        marginLeft: 16,
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: '800',
        marginTop: 4,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 12,
    },
    qtyBtn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyText: {
        fontSize: 16,
        fontWeight: '700',
        minWidth: 20,
        textAlign: 'center',
    },
    removeBtn: {
        marginLeft: 'auto',
        padding: 8,
    },
    removeIcon: {
        fontSize: 18,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    emptyEmoji: {
        fontSize: 80,
        marginBottom: 20,
        opacity: 0.2,
    },
    emptySub: {
        textAlign: 'center',
        opacity: 0.6,
        marginTop: 10,
        marginBottom: 30,
    },
    exploreBtn: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 12,
    },
    exploreBtnText: {
        fontWeight: '800',
        color: '#000',
    },
    summary: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: 40,
        borderTopWidth: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(128,128,128,0.1)',
        marginVertical: 12,
    },
    checkoutBtn: {
        marginTop: 20,
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    checkoutText: {
        color: '#000',
        fontWeight: '900',
        fontSize: 18,
    },
});
