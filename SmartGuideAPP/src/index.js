import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const {width: WIDTH} = Dimensions.get('window');

import bgImage from '../images/background.jpg';
import logoImage from '../images/logo.png';

const App = () => {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.logoText}>SmartGuide</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name={'user'}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Usuário'}
          placeholderTextColor={'white'}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name={'lock'}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Senha'}
          placeholderTextColor={'white'}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#125fdb',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontFamily: 'roboto',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 10,
    opacity: 1,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
});

export default App;
