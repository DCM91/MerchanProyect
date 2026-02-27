import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export function SideMenu({ isOpen, onClose }: Props) {
    const router = useRouter();
    const bg = useThemeColor({}, 'background');
    const cardBg = useThemeColor({}, 'card');
    const accent = useThemeColor({}, 'accent');

    const navigate = (path: string) => {
        onClose();
        router.push(path as any);
    };

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="none"
            onRequestClose={onClose}>
            <View style={styles.overlay}>
                <Pressable style={styles.dismiss} onPress={onClose} />
                <View style={[styles.menu, { backgroundColor: bg }]}>
                    <View style={styles.header}>
                        <ThemedText type="subtitle" style={{ color: accent }}>Menú</ThemedText>
                        <Pressable onPress={onClose} style={styles.closeButton}>
                            <ThemedText style={styles.closeIcon}>✕</ThemedText>
                        </Pressable>
                    </View>

                    <View style={styles.links}>
                        <Pressable style={styles.link} onPress={() => navigate('/')}>
                            <ThemedText style={styles.linkEmoji}>🏠</ThemedText>
                            <ThemedText type="defaultSemiBold">Home</ThemedText>
                        </Pressable>

                        <Pressable style={styles.link} onPress={() => navigate('/explore')}>
                            <ThemedText style={styles.linkEmoji}>📦</ThemedText>
                            <ThemedText type="defaultSemiBold">Catálogo</ThemedText>
                        </Pressable>

                        <Pressable style={styles.link} onPress={() => navigate('/contact')}>
                            <ThemedText style={styles.linkEmoji}>✉️</ThemedText>
                            <ThemedText type="defaultSemiBold">Contacto</ThemedText>
                        </Pressable>
                    </View>

                    <View style={styles.footer}>
                        <ThemedText style={styles.version}>MerchanSagas v1.0.0</ThemedText>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
    },
    dismiss: {
        flex: 1,
    },
    menu: {
        width: 280,
        height: '100%',
        paddingTop: 60,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    closeButton: {
        padding: 10,
    },
    closeIcon: {
        fontSize: 20,
    },
    links: {
        gap: 20,
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 10,
    },
    linkEmoji: {
        fontSize: 22,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
    },
    version: {
        fontSize: 12,
        opacity: 0.5,
    },
});
