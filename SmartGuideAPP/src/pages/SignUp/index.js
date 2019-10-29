import React, {Component} from 'react';

import DismissKeyboard from '~/components/DismissKeyboard';
import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
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

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      newUser: '',
      newUserPassword: '',
      newUserEmail: '',
    };
  }

  showPass = () => {
    const {press, showPass} = this.state;

    this.setState({showPass: !showPass, press: !press});
  };

  createUser = () => {
    api.post('auth/register/',
      {
        username: this.state.newUser,
        password: this.state.newUserPassword
      }
    ).then(result => {
      console.log('User registered')
      console.log(result.data)
      global.user_token = result.data.token
      // global.username = result.data.username
      api.get(`user/${global.username}/`,{
        headers: {
          Authorization: `Token ${global.user_token}`
        }
      }).then(response => {
        global.user_data = response.data
      }).catch(error => console.log(error));

      this.props.navigation.navigate('MyAccount')
    }).catch(error => console.log(error));
  }

  render() {
    const {navigation} = this.props;
    const {newUser, newUserPassword, newUserEmail} = this.state;

    return (
      <BackgroundColor>
        <DismissKeyboard>
          <Container>
            <Image source={logoImage} />
            <LogoText>SmartGuide</LogoText>

            <Form>
              <FormInput
                icon="user"
                blurOnSubmit={false}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome de usuário"
                returnKeyType="next"
                value={newUser}
                onChangeText={text =>  this.setState({newUser: text})}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
              />

              <FormInput
                icon="mail"
                autoCorrect={false}
                blurOnSubmit={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                keyboardType={'email-address'}
                returnKeyType="next"
                value={newUserEmail}
                onChangeText={text =>  this.setState({newUserEmail: text})}
                onSubmitEditing={() => {
                  this.thirdTextInput.focus();
                }}
                ref={input => {
                  this.secondTextInput = input;
                }}
              />

              <FormInput
                icon="lock"
                onShowPass={this.showPass}
                secureTextEntry={this.state.showPass}
                placeholder="Sua senha secreta"
                returnKeyType="go"
                value={newUserPassword}
                onChangeText={text =>  this.setState({newUserPassword: text})}
                onSubmitEditing={this.createUser}
                ref={input => {
                  this.thirdTextInput = input;
                }}
              />

              <SubmitButton
                // onPress={() => navigation.navigate('SignUp')}>
                onPress={this.createUser}>
                Cadastrar
              </SubmitButton>
            </Form>

            <SignLink onPress={() => navigation.navigate('SignIn')}>
              <SignLinkText>Voltar</SignLinkText>
            </SignLink>
          </Container>
        </DismissKeyboard>
      </BackgroundColor>
    );
  }
}
