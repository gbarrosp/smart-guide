import React, {Component} from 'react';

import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/Background';

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

export default function SignUp({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
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
              inputs.secondTextInput.focus();
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
              inputs.thirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />


          <FormInput
            icon="lock"
            secureTextEntry={true}
            placeholder="Sua senha secreta"
            returnKeyType="go"
            ref={input => {
              inputs.thirdTextInput = input;
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
    </BackgroundColor>
  );
}
