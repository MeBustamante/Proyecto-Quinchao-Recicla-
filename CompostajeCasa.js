import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuInferior from './MenuInferior';

const CompostajeCasa = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#81C784', '#388E3C']} style={styles.gradientBackground}>
                <View style={styles.contentContainer}>
                    <Text style={styles.infoTitle}>Compostaje en Casa</Text>
                    <Text style={styles.infoSubtitle}>
                        Aprende cómo hacer compostaje en tu hogar y contribuye al medio ambiente.
                    </Text>
                    <Text style={styles.objectivesTitle}>Objetivos:</Text>
                    <Text style={styles.objectives}>
                        - Reducir residuos orgánicos{'\n'}
                        - Producir compost de calidad{'\n'}
                        - Educar sobre sostenibilidad
                    </Text>
                    <Text style={styles.motivationalText}>
                        ¡Empieza a compostar hoy y marca la diferencia!
                    </Text>
                    <Image source={require('./assets/Compostaje.png')} style={styles.image} />
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.backButtonText}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <MenuInferior />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    gradientBackground: { flex: 1, width: '100%', alignItems: 'center', paddingVertical: 20 },
    contentContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#4CAF50',
        marginTop: 20,
    },
    infoTitle: { fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 10 },
    infoSubtitle: { fontSize: 14, color: 'black', textAlign: 'center', marginBottom: 10 },
    objectivesTitle: { fontSize: 16, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 5 },
    objectives: { fontSize: 14, color: 'black', textAlign: 'center', marginBottom: 15 },
    motivationalText: { fontSize: 14, color: 'black', fontStyle: 'italic', textAlign: 'center', marginBottom: 20 },
    image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 20 },
    backButton: { backgroundColor: '#4CAF50', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 },
    backButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default CompostajeCasa;