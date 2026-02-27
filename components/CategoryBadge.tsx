import { ThemedText } from '@/components/themed-text';
import type { Category } from '@/constants/mock-data';
import { SagaColors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    category: Category;
    isSelected?: boolean;
    onPress?: () => void;
};

export function CategoryBadge({ category, isSelected, onPress }: Props) {
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const textColor = useThemeColor({}, 'text');
    const defaultColor = '#888888';
    const sagaColor = SagaColors[category.name] ?? defaultColor;

    const hexToRgba = (hex: string, alpha: number) => {
        const h = hex.length === 4 ? '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
        const r = parseInt(h.slice(1, 3), 16);
        const g = parseInt(h.slice(3, 5), 16);
        const b = parseInt(h.slice(5, 7), 16);
        return `rgba(${isNaN(r) ? 136 : r}, ${isNaN(g) ? 136 : g}, ${isNaN(b) ? 136 : b}, ${alpha})`;
    };

    return (
        <Pressable onPress={onPress}>
            {({ pressed }) => (
                <View
                    style={[
                        styles.badge,
                        {
                            backgroundColor: isSelected ? hexToRgba(sagaColor, 0.15) : cardBg,
                            borderColor: isSelected ? sagaColor : cardBorder,
                            opacity: pressed ? 0.8 : 1,
                        },
                    ]}>
                    <ThemedText
                        type="defaultSemiBold"
                        style={[
                            styles.text,
                            { color: isSelected ? sagaColor : textColor },
                        ]}
                        numberOfLines={1}>
                        {category.name}
                    </ThemedText>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.5,
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
});
