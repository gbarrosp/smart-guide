import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const {width: WIDTH} = Dimensions.get('window');

import bgImage from '~/../images/background.jpg';
import logoImage from '~/../images/logo.png';
import BackgroundColor from '~/components/Background';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  render() {
    return (
      <BackgroundColor style={styles.backgroundContainer}>
        {/* <ImageBackground source={bgImage} style={styles.backgroundContainer}> */}
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.logoText}>SmartGuide</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={'user'}
            size={28}
            color={'white'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            returnKeyType={'next'}
            placeholder={'Usuário'}
            placeholderTextColor={'white'}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            blurOnSubmit={false}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={'lock'}
            size={28}
            color={'white'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Senha'}
            returnKeyType={'go'}
            placeholderTextColor={'white'}
            secureTextEntry={this.state.showPass}
            underlineColorAndroid="transparent"
            ref={input => {
              this.secondTextInput = input;
            }}
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Icon
              name={this.state.press == false ? 'eye' : 'eye-off'}
              size={26}
              color={'white'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>

        <Text
          style={styles.passForgot}
          // onPress = {this.props.navigation.navigate('page')}
        >
          Esqueci minha senha
        </Text>
        {/* </ImageBackground> */}
      </BackgroundColor>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#125fdb',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
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
    color: 'white',
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
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#125fdb',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  btnRegister: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#125fdb',
    justifyContent: 'center',
    marginTop: 10,
  },
  passForgot: {
    color: 'white',
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 40,
    opacity: 0.8,
  },
});

// export default App;
