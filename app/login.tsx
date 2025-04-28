import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logoodpv.png')} style={styles.logo} />
            <View style={styles.loginBox}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Digite suas credenciais..." placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Digite sua senha..." placeholderTextColor="#ffffff" secureTextEntry />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.replace('index')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    loginBox: {
        backgroundColor: '#a8f0ff',
        padding: 30,
        borderRadius: 10,
        width: 320,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        alignItems: 'center',
    },
    title: {
        color: '#003399',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#003399',
        color: '#ffffff',
    },
    button: {
        width: '100%',
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#4da6ff',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;