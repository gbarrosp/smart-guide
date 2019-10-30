import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import bgImage from '~/assets/background.jpg';
import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
// import BackgroundColor from '~/components/Background';
import DismissKeyboard from '~/components/DismissKeyboard';
import api from '../../services/api';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  LogoText,
} from './styles';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      user: '',
      password: '',
    };
  }

  showPass = () => {
    const {press, showPass} = this.state;

    this.setState({showPass: !showPass, press: !press});
  };

  loginUser = () => {
    api.post('auth/login/',
      {
        username: this.state.user,
        password: this.state.password
      }
    ).then(result => {
      console.log('User authenticated')
      global.user_token = result.data.token
      global.username = this.state.user
      console.log(global.username)
      api.get(`user/${global.username}/`,{
        headers: {
          Authorization: `Token ${global.user_token}`
        }
      }).then(response => {
        global.user_data = response.data
        console.log(global.user_data)
      }).catch(error => console.log(error));

      this.props.navigation.navigate('Home')
    }).catch(error => console.log(error));

  }


  render() {
    const {navigation} = this.props;
    const {user, password} = this.state;

    return (
      <BackgroundColor source={bgImage}>
        <DismissKeyboard>
          <Container>
            <Image source={logoImage} />
            <LogoText>SmartGuide</LogoText>
            <Form>
              <FormInput
                icon="user"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Usuário"
                returnKeyType="next"
                value={user}
                onChangeText={text =>  this.setState({user: text})}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
              />

              <FormInput
                icon="lock"
                onShowPass={this.showPass}
                secureTextEntry={this.state.showPass}
                placeholder="Senha"
                returnKeyType="go"
                value={password}
                onChangeText={text =>  this.setState({password: text})}
                onSubmitEditing={this.loginUser}
                ref={input => {
                  this.secondTextInput = input;
                }}
              />

              <SubmitButton onPress={this.loginUser}>
                Entrar
              </SubmitButton>
              <SubmitButton onPress={() => navigation.navigate('SignUp')}>
                Cadastrar
              </SubmitButton>
            </Form>

            {/* <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>Esqueci minha senha</SignLinkText>
            </SignLink> */}
          </Container>
        </DismissKeyboard>
        {/* <ImageBackground source={bgImage} style={styles.backgroundContainer}> */}
      </BackgroundColor>
    );
  }
}
const styles = StyleSheet.create({
  // backgroundContainer: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // backgroundColor: '#125fdb',
  // },
});

// export default App;
