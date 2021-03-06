import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';


import wateringImg from '../assets/watering.png';
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
      >
        Gerencie{'\n'}
        suas plantas de forma {'\n'}
        fácil
      </Text>

      {
        visible &&
        <Image
          style={styles.image}
          source={wateringImg}
        />
      }

      <Text
        style={styles.subtitle}
      >
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.</Text>

      <Button 
        onPress={handleVisibility} title=">" 
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    height: 56,
    width: 56,

  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
    fontSize: 28,
  }
})