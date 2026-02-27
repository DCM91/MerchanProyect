import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function ContactScreen() {
    const router = useRouter();
    const bg = useThemeColor({}, 'background');
    const accent = useThemeColor({}, 'accent');
    const cardBg = useThemeColor({}, 'card');
    const cardBorder = useThemeColor({}, 'cardBorder');

    const contactOptions = [
        { label: 'Ubicación', value: 'Bilbao, España', icon: '📍' },
        { label: 'Instagram', value: '@merchansagas', icon: '📸' },
        { label: 'TikTok', value: '@merchansagas_oficial', icon: '🤳' },
        { label: 'Horario', value: 'Lun - Vie, 10:00 - 20:00', icon: '🕒' },
    ];

    return (
        <ThemedView style={styles.container}>
            <Stack.Screen options={{ title: 'Contacto', headerShown: true }} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <ThemedText type="title" style={[styles.title, { color: accent }]}>
                        ¡Hablemos! ⚔️
                    </ThemedText>
                    <ThemedText style={styles.subtitle}>
                        ¿Tienes alguna duda sobre nuestras sagas o productos? Estamos aquí para ayudarte.
                    </ThemedText>
                </View>

                <View style={styles.optionsContainer}>
                    {contactOptions.map((option, index) => (
                        <View
                            key={index}
                            style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder }]}
                        >
                            <ThemedText style={styles.cardIcon}>{option.icon}</ThemedText>
                            <View>
                                <ThemedText style={styles.cardLabel}>{option.label}</ThemedText>
                                <ThemedText type="defaultSemiBold" style={styles.cardValue}>{option.value}</ThemedText>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={[styles.infoBanner, { backgroundColor: accent + '10', borderColor: accent }]}>
                    <ThemedText style={styles.infoText}>
                        Próximamente habilitaremos un formulario de contacto directo por email. ✉️
                    </ThemedText>
                </View>

                <Pressable
                    style={[styles.backButton, { backgroundColor: accent }]}
                    onPress={() => router.back()}
                >
                    <ThemedText style={styles.backButtonText}>Volver al Marketplace</ThemedText>
                </Pressable>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingTop: 40,
    },
    header: {
        marginBottom: 40,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        lineHeight: 22,
    },
    optionsContainer: {
        gap: 15,
        marginBottom: 40,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        gap: 20,
    },
    cardIcon: {
        fontSize: 24,
    },
    cardLabel: {
        fontSize: 12,
        opacity: 0.6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    cardValue: {
        fontSize: 16,
    },
    infoBanner: {
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 30,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'italic',
    },
    backButton: {
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#000',
        fontWeight: '800',
        fontSize: 16,
    },
});
