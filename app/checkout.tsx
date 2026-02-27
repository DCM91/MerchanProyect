import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useCart } from '@/context/CartContext';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function CheckoutScreen() {
    const router = useRouter();
    const { cart, totalPrice, clearCart } = useCart();
    const bg = useThemeColor({}, 'background');
    const cardBg = useThemeColor({}, 'card');
    const border = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    const handleBack = () => {
        clearCart();
        router.push('/');
    };

    const renderSummaryItem = ({ item }: { item: any }) => (
        <View style={styles.itemRow}>
            <View style={styles.itemNameQty}>
                <ThemedText style={styles.itemQty}>{item.quantity}x</ThemedText>
                <ThemedText style={styles.itemName} numberOfLines={1}>{item.name}</ThemedText>
            </View>
            <ThemedText style={styles.itemPrice}>{(item.price * item.quantity).toFixed(2)}€</ThemedText>
        </View>
    );

    return (
        <ThemedView style={styles.container}>
            <Stack.Screen options={{ title: 'Resumen del Pedido', headerShown: true }} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.receiptCard, { backgroundColor: cardBg, borderColor: border }]}>
                    <View style={styles.header}>
                        <ThemedText type="subtitle" style={styles.title}>Pedido Confirmado</ThemedText>
                        <ThemedText style={styles.orderId}>#MSG-{Math.floor(Math.random() * 1000000)}</ThemedText>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.listContainer}>
                        {cart.map((item) => (
                            <View key={item.id} style={styles.itemRow}>
                                <View style={styles.itemNameQty}>
                                    <ThemedText style={styles.itemQty}>{item.quantity}x</ThemedText>
                                    <ThemedText style={styles.itemName} numberOfLines={1}>{item.name}</ThemedText>
                                </View>
                                <ThemedText style={styles.itemPrice}>{(item.price * item.quantity).toFixed(2)}€</ThemedText>
                            </View>
                        ))}
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.summarySection}>
                        <View style={styles.summaryRow}>
                            <ThemedText style={styles.summaryLabel}>Subtotal</ThemedText>
                            <ThemedText style={styles.summaryValue}>{totalPrice.toFixed(2)}€</ThemedText>
                        </View>
                        <View style={styles.summaryRow}>
                            <ThemedText style={styles.summaryLabel}>Envío</ThemedText>
                            <ThemedText style={[styles.summaryValue, { color: '#4CAF50' }]}>GRATIS</ThemedText>
                        </View>
                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <ThemedText type="defaultSemiBold" style={styles.totalLabel}>Total</ThemedText>
                            <ThemedText type="title" style={[styles.totalValue, { color: accent }]}>{totalPrice.toFixed(2)}€</ThemedText>
                        </View>
                    </View>

                    <View style={styles.footerInfo}>
                        <ThemedText style={styles.footerText}>
                            Gracias por confiar en MerchanSagas. Recibirás un correo de confirmación pronto.
                        </ThemedText>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.actionArea, { backgroundColor: bg, borderTopColor: border }]}>
                <Pressable
                    style={[styles.finishBtn, { backgroundColor: accent }]}
                    onPress={handleBack}
                >
                    <ThemedText style={styles.finishBtnText}>Volver a la Tienda</ThemedText>
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
        padding: 20,
        paddingBottom: 120,
    },
    receiptCard: {
        width: '100%',
        borderRadius: 24,
        borderWidth: 1,
        padding: 24,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 4,
    },
    orderId: {
        fontSize: 12,
        opacity: 0.5,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(128,128,128,0.1)',
        marginVertical: 20,
        borderStyle: 'dashed',
    },
    listContainer: {
        marginVertical: 10,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    itemNameQty: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    itemQty: {
        fontSize: 14,
        fontWeight: '800',
        opacity: 0.6,
        marginRight: 8,
        minWidth: 25,
    },
    itemName: {
        fontSize: 15,
        fontWeight: '500',
        flex: 1,
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: '700',
    },
    summarySection: {
        marginTop: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 14,
        opacity: 0.6,
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: '600',
    },
    totalRow: {
        marginTop: 16,
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 18,
    },
    totalValue: {
        fontSize: 28,
    },
    footerInfo: {
        marginTop: 30,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        textAlign: 'center',
        opacity: 0.5,
        lineHeight: 18,
    },
    actionArea: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: 40,
        borderTopWidth: 1,
    },
    finishBtn: {
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    finishBtnText: {
        color: '#000',
        fontWeight: '900',
        fontSize: 18,
    },
});
