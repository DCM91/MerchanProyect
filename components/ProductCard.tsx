import { ThemedText } from '@/components/themed-text';
import type { Product } from '@/constants/mock-data';
import { SagaColors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    product: Product;
};

export function ProductCard({ product }: Props) {
    const router = useRouter();
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    // Color de la saga para el badge
    const sagaColor = SagaColors[product.saga as keyof typeof SagaColors] || accent;

    return (
        <Pressable
            onPress={() => router.push(`/product/${product.id}` as any)}
            style={({ pressed }) => [
                styles.card,
                { backgroundColor: cardBg, borderColor: cardBorder },
                pressed && { transform: [{ scale: 0.98 }] }
            ]}
        >
            <View style={styles.imageContainer}>
                {product.image ? (
                    <Image
                        source={product.image}
                        style={styles.productImage}
                        contentFit="cover"
                        transition={500}
                    />
                ) : (
                    <ThemedText style={styles.emoji}>{product.emoji}</ThemedText>
                )}
                <View style={[styles.sagaBadge, { backgroundColor: sagaColor }]}>
                    <ThemedText style={styles.sagaText}>{product.saga}</ThemedText>
                </View>
            </View>

            <View style={styles.content}>
                <ThemedText type="defaultSemiBold" numberOfLines={1} style={styles.name}>
                    {product.name}
                </ThemedText>
                <ThemedText type="defaultSemiBold" style={[styles.price, { color: accent }]}>
                    {product.price.toFixed(2)}€
                </ThemedText>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '45%',
        margin: '2.5%',
        borderRadius: 20,
        borderWidth: 1,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageContainer: {
        height: 160,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    emoji: {
        fontSize: 60,
    },
    sagaBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    sagaText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#000',
        textTransform: 'uppercase',
    },
    content: {
        padding: 12,
    },
    name: {
        fontSize: 14,
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: '800',
    },
});
