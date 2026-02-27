import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
    actionText?: string;
    onActionPress?: () => void;
};

export function SectionHeader({ title, actionText = 'Ver todo', onActionPress }: Props) {
    const textColor = useThemeColor({}, 'text');
    const accent = useThemeColor({}, 'accent');

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
            {onActionPress && (
                <Pressable onPress={onActionPress}>
                    <Text style={[styles.action, { color: accent }]}>{actionText}</Text>
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
