import React, {Component} from 'react';

import DismissKeyboard from '~/components/DismissKeyboard';
import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';

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
    };
  }

  showPass = () => {
    const {press, showPass} = this.state;

    this.setState({showPass: !showPass, press: !press});
  };

  render() {
    const {navigation} = this.props;

    return (
      <BackgroundColor>
        <DismissKeyboard>
          <Container>
            <Image source={logoImage} />
            <LogoText>SmartGuide</LogoText>

            <Form>
              <FormInput
                icon="user"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome de usuário"
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
              />

              <FormInput
                icon="mail"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                keyboardType={'email-address'}
                returnKeyType="next"
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
                ref={input => {
                  this.thirdTextInput = input;
                }}
              />

              <SubmitButton onPress={() => navigation.navigate('SignUp')}>
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
