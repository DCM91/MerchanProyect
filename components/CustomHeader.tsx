import { ThemedText } from '@/components/themed-text';
import { useCart } from '@/context/CartContext';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    onMenuPress: () => void;
};

export function CustomHeader({ onMenuPress }: Props) {
    const router = useRouter();
    const { totalItems } = useCart();
    const bg = useThemeColor({}, 'card');
    const border = useThemeColor({}, 'cardBorder');
    const accent = useThemeColor({}, 'accent');

    return (
        <View style={[styles.header, { backgroundColor: bg, borderBottomColor: border }]}>
            <Pressable onPress={onMenuPress} style={styles.iconButton}>
                <ThemedText style={styles.icon}>☰</ThemedText>
            </Pressable>

            <Pressable onPress={() => router.push('/')}>
                <ThemedText type="defaultSemiBold" style={[styles.logo, { color: accent }]}>
                    MerchanSagas
                </ThemedText>
            </Pressable>

            <Pressable onPress={() => router.push('/cart')} style={styles.iconButton}>
                <View style={styles.cartContainer}>
                    <ThemedText style={styles.icon}>🛒</ThemedText>
                    {totalItems > 0 && (
                        <View style={[styles.badge, { backgroundColor: accent }]}>
                            <ThemedText style={styles.badgeText}>{totalItems}</ThemedText>
                        </View>
                    )}
                </View>
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
    cartContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -6,
        right: -6,
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    badgeText: {
        color: '#000',
        fontSize: 10,
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 12,
    },
});
