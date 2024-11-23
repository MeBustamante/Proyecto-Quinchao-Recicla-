import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuInferior from '../Menu_Inferior/MenuInferior';
import { useUser } from '../Login/UserContext';
import { AppContext } from '../ConfigGlobal/AppContext'; // Importa el contexto global
import Icon from 'react-native-vector-icons/MaterialIcons'; // Icono de notificación

const PantallaPrincipalScreen = ({ navigation }) => {
    const { nombre } = useUser();
    const { language } = useContext(AppContext); // Acceso al idioma desde el contexto global
    const nombreMayusculas = nombre.toUpperCase();

    // Estado para controlar la visibilidad de las notificaciones
    const [modalVisible, setModalVisible] = useState(false);

    // Traducciones dinámicas
    const translations = {
        es: {
            greeting: `HOLA ${nombreMayusculas}`,
            welcome: 'TE DAMOS LA BIENVENIDA A',
            reciclaje: {
                title: 'RECICLAJE',
                subtitle: 'Gestiona tus residuos y únete a la campaña de reciclaje.',
            },
            servicios: {
                title: 'SERVICIOS',
                subtitle: 'Solicita retiro de residuos y reporta microbasurales en tu comunidad.',
            },
            puntos: {
                title: 'PUNTOS DE RECICLAJE',
                subtitle: 'Ubica en el mapa los Puntos Verdes cercanos para reciclar de manera fácil y responsable.',
            },
            notifications: 'Notificaciones', // Título para las notificaciones
        },
        en: {
            greeting: `HELLO ${nombreMayusculas}`,
            welcome: 'WELCOME TO',
            reciclaje: {
                title: 'RECYCLING',
                subtitle: 'Manage your waste and join the recycling campaign.',
            },
            servicios: {
                title: 'SERVICES',
                subtitle: 'Request waste collection and report illegal dumping in your community.',
            },
            puntos: {
                title: 'RECYCLING POINTS',
                subtitle: 'Locate nearby Green Points to recycle easily and responsibly.',
            },
            notifications: 'Notifications', // Título para las notificaciones
        },
    };

    const currentLanguage = translations[language]; // Selección del idioma actual

    const handleReciclajeButtonPress = () => navigation.navigate('MenuReciclaje');
    const handleBoton2Press = () => navigation.navigate('Servicios');
    const handleBoton3Press = () => navigation.navigate('PuntosReciclaje');

    // Datos de ejemplo para las notificaciones
    const notifications = [
        { id: 1, text: 'Nueva campaña de reciclaje en tu área.' },
        { id: 2, text: '¡Ayúdanos a limpiar tu comunidad!' },
        { id: 3, text: 'Nuevo punto de reciclaje disponible cerca de ti.' },
    ];

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#A8E6CF', '#DCEDC1', '#FFF9C4', '#FFD54F']}
                style={styles.gradientBackground}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Encabezado con notificación */}
                    <View style={styles.headerContainer}>
                        <Image
                            source={require('../assets/p3.jpg')}
                            style={styles.backgroundImage}
                        />
                        <View style={styles.textOverlay}>
                            <Text style={styles.greetingText}>{currentLanguage.greeting}</Text>
                            <Text style={styles.welcomeText}>{currentLanguage.welcome}</Text>
                            <Image
                                source={require('../assets/LOG_AMBIENTE.jpg')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    {/* Botones */}
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonYellowBorder]}
                            onPress={handleReciclajeButtonPress}
                        >
                            <Text style={[styles.infoTitle, { color: '#FFC107' }]}>
                                {currentLanguage.reciclaje.title}
                            </Text>
                            <Text style={styles.infoSubtitle}>
                                {currentLanguage.reciclaje.subtitle}
                            </Text>
                            <Image
                                source={require('../assets/RG.jpg')}
                                style={styles.buttonImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonOrangeBorder]}
                            onPress={handleBoton2Press}
                        >
                            <Text style={[styles.infoTitle, { color: '#FF9800' }]}>
                                {currentLanguage.servicios.title}
                            </Text>
                            <Text style={styles.infoSubtitle}>
                                {currentLanguage.servicios.subtitle}
                            </Text>
                            <Image
                                source={require('../assets/servicio.jpg')}
                                style={styles.buttonImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonGreenBorder]}
                            onPress={handleBoton3Press}
                        >
                            <Text style={[styles.infoTitle, { color: '#4CAF50' }]}>
                                {currentLanguage.puntos.title}
                            </Text>
                            <Text style={styles.infoSubtitle}>
                                {currentLanguage.puntos.subtitle}
                            </Text>
                            <Image
                                source={require('../assets/mapa6.png')}
                                style={styles.buttonImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>

            {/* Menú inferior */}
            <View style={styles.menuInferiorContainer}>
                <MenuInferior />
            </View>

            {/* Ícono de notificación */}
            <TouchableOpacity
                style={styles.notificationIconContainer}
                onPress={() => setModalVisible(true)}
            >
                <Icon name="notifications" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Modal de Notificaciones */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{currentLanguage.notifications}</Text>
                        {notifications.map(notification => (
                            <Text key={notification.id} style={styles.notificationText}>
                                {notification.text}
                            </Text>
                        ))}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 80, // Espacio suficiente para que el último botón sea visible
    },
    headerContainer: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    textOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 10,
    },
    greetingText: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        textAlign: 'center',
        marginBottom: 5,
    },
    welcomeText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        textAlign: 'center',
        marginBottom: 5,
    },
    logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        marginTop: 0,
    },
    buttonsContainer: {
        width: '90%',
    },
    button: {
        marginVertical: 10,
        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        alignItems: 'center',
    },
    buttonYellowBorder: {
        borderColor: '#FFEB3B',
    },
    buttonOrangeBorder: {
        borderColor: '#FF9800',
    },
    buttonGreenBorder: {
        borderColor: '#4CAF50',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoSubtitle: {
        fontSize: 13,
        color: '#000',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    buttonImage: {
        width: '100%',
        height: 110,
    },
    menuInferiorContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    // Estilos para la notificación
    notificationIconContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10, // Asegura que el ícono esté encima de otros componentes
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '70%',
        overflow: 'scroll',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    notificationText: {
        fontSize: 16,
        marginVertical: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#FF9800',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PantallaPrincipalScreen;
