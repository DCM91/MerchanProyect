import type { Category } from '@/constants/mock-data';
import { SagaColors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
    category: Category;
    isSelected?: boolean;
    onPress?: () => void;
};

export function CategoryBadge({ category, isSelected, onPress }: Props) {
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');
    const textColor = useThemeColor({}, 'text');
    const accent = useThemeColor({}, 'accent');
    const sagaColor = SagaColors[category.name] ?? '#888';

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.badge,
                {
                    backgroundColor: isSelected ? sagaColor + '25' : cardBg,
                    borderColor: isSelected ? sagaColor : cardBorder,
                    opacity: pressed ? 0.8 : 1,
                },
            ]}>
            <Text style={styles.emoji}>{category.emoji}</Text>
            <Text
                style={[
                    styles.text,
                    { color: isSelected ? sagaColor : textColor },
                ]}
                numberOfLines={1}>
                {category.name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 24,
        borderWidth: 1.5,
        marginRight: 10,
    },
    emoji: {
        fontSize: 18,
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
    },
});
