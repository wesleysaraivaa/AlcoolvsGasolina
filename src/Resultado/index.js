import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Resultado(props) {

    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.text}> Compensa usar:  </Text>
                <Text style={[styles.text, { color: '#3D8E17' }]}>{props.qualMelhor} </Text>

                <Image
                    source={require('../img/gas.png')}
                    style={styles.img}
                />

                <Text style={styles.text}> Álcool: R$ {props.valorAlcool} </Text>
                <Text style={styles.text}> Gasolina: R$ {props.valorGasolina} </Text>

                <TouchableOpacity style={styles.button} onPress={props.fechar}>
                    <Text style={styles.buttonText}> Calcular novamente </Text>
                </TouchableOpacity>

            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        alignItems: 'center',
    },
    text: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
    },
    img: {
        marginTop: 40,
        marginBottom: 40,
        width: 170,
        height: 170
    },
    button: {
        height: 50,
        width: '50%',
        backgroundColor: '#cd3e1d',
        padding: 10,
        borderRadius: 12,
        marginTop: 40
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    }
})