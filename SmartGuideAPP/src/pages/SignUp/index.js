import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/Background';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
      <Container>
        <Image source={logoImage} />

        <Form>
          <FormInput
            icon="user"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
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
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.thirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />

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
            icon="lock"
            secureTextEntry={true}
            placeholder="Sua senha secreta"
            returnKeyType="go"
            ref={input => {
              inputs.thirdTextInput = input;
            }}
          />

          <FormInput
            icon="lock"
            secureTextEntry={true}
            placeholder="Confirme sua senha"
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
