import type { Product } from '@/constants/mock-data';
import { SagaColors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    product: Product;
    onPress?: () => void;
};

export function ProductCard({ product, onPress }: Props) {
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const textColor = useThemeColor({}, 'text');
    const subtleText = useThemeColor({}, 'subtleText');
    const accent = useThemeColor({}, 'accent');
    const sagaColor = SagaColors[product.saga] ?? '#888';

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.card,
                {
                    backgroundColor: cardBg,
                    borderColor: cardBorder,
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                },
            ]}>
            <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>{product.emoji}</Text>
            </View>
            <View style={styles.info}>
                <Text style={[styles.name, { color: textColor }]} numberOfLines={2}>
                    {product.name}
                </Text>
                <View style={[styles.sagaBadge, { backgroundColor: sagaColor + '20' }]}>
                    <Text style={[styles.sagaText, { color: sagaColor }]}>{product.saga}</Text>
                </View>
                <Text style={[styles.price, { color: accent }]}>€{product.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        padding: 12,
        margin: 6,
        minWidth: 140,
        maxWidth: '48%' as any,
    },
    emojiContainer: {
        width: '100%',
        height: 80,
        borderRadius: 12,
        backgroundColor: 'rgba(128,128,128,0.08)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    emoji: {
        fontSize: 40,
    },
    info: {
        gap: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,
    },
    sagaBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        marginTop: 2,
    },
    sagaText: {
        fontSize: 11,
        fontWeight: '700',
    },
    price: {
        fontSize: 18,
        fontWeight: '800',
        marginTop: 4,
    },
});
