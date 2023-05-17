import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Resultado from './src/Resultado';

export default function App() {

  const [modalV, setModalV] = useState(false);
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  function abrirModal() {
    setModalV(true);
  }

  function sairResultado() {
    setModalV(false);
  }

  let qualMelhor = function calcular() {
    const resul = parseFloat(alcool) / parseFloat(gasolina);
    if (resul < 0.7) {
      return 'Álcool '
    } else {
      return 'Gasolina '
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./src/img/logo.png')}
        style={styles.img}
      />

      <Text style={styles.text}> Qual combustível é mais rentável ? </Text>

      <Text style={{ color: '#FFF', fontSize: 18, paddingTop: 20 }}> Álcool (preço por litro): </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 4,60"
        keyboardType="numeric"
        onChangeText={setAlcool}
      />

      <Text style={{ color: '#FFF', fontSize: 18, paddingTop: 20, textAlign: 'left' }}> Gasolina (preço por litro): </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 4,60"
        keyboardType="numeric"
        onChangeText={setGasolina}
      />

      <TouchableOpacity style={styles.button} onPress={abrirModal}>
        <Text style={styles.buttonText}> Calcular </Text>
      </TouchableOpacity>

      <Modal animationType="slide" visible={modalV}>
        <Resultado
          fechar={sairResultado}
          qualMelhor={qualMelhor(alcool, gasolina)}
          valorAlcool={alcool}
          valorGasolina={gasolina} />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  img: {
    marginBottom: 20,
    marginTop: 70,
    width: 250,
    height: 170
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    fontSize: 18,
    width: '70%',
    height: 50,
    borderRadius: 12,
    marginBottom: 10
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