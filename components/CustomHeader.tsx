import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    onMenuPress: () => void;
};

export function CustomHeader({ onMenuPress }: Props) {
    const bg = useThemeColor({}, 'card');
    const border = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    return (
        <View style={[styles.header, { backgroundColor: bg, borderBottomColor: border }]}>
            <Pressable onPress={onMenuPress} style={styles.iconButton}>
                <ThemedText style={styles.icon}>☰</ThemedText>
            </Pressable>

            <ThemedText type="defaultSemiBold" style={[styles.logo, { color: accent }]}>
                ⚔️ MerchanSagas
            </ThemedText>

            <Pressable style={styles.iconButton}>
                <ThemedText style={styles.icon}>🛒</ThemedText>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        zIndex: 10,
    },
    iconButton: {
        padding: 8,
    },
    icon: {
        fontSize: 24,
    },
    logo: {
        fontSize: 20,
        fontWeight: '900',
    },
});
