import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    title: string;
    actionText?: string;
    onActionPress?: () => void;
};

export function SectionHeader({ title, actionText = 'Ver todo', onActionPress }: Props) {
    const accent = useThemeColor({}, 'accent');

    return (
        <View style={styles.container}>
            <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
            {onActionPress && (
                <Pressable onPress={onActionPress}>
                    <ThemedText style={[styles.action, { color: accent }]}>{actionText}</ThemedText>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginBottom: 8,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
    },
    action: {
        fontSize: 14,
        fontWeight: '600',
    },
});
