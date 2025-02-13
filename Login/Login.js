import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);
    const isFocused = useIsFocused(); // Detecta si la pantalla está activa

    // Restablece el estado cada vez que la pantalla está enfocada
    useEffect(() => {
        if (isFocused) {
            setLoading(false);
            setIsNavigating(false);
        }
    }, [isFocused]);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setIsNavigating(true); // Evita renderizar el login durante la navegación
            navigation.navigate('Home'); // Navega a la pantalla principal
        }, 2000);
    };

    if (isNavigating) {
        return null; // Evita renderizar la pantalla login mientras navegas
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo_original.png')} 
                style={styles.logo} 
            />
            {loading ? (
                <LottieView
                    source={require('./login.json')} 
                    autoPlay
                    loop={false} 
                    style={styles.animation}
                    onAnimationFinish={() => { 
                        setIsNavigating(true); 
                        navigation.navigate('Home'); 
                    }} 
                />
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Comenzar a Reciclar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F8FF', 
    },
    logo: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#005B4F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: '60%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    animation: {
        width: 200,
        height: 200,
    },
});

export default LoginScreen;
