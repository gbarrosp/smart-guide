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

export default function MyAccount({navigation}) {
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
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.secondTextInput.focus();
            }}
          />


          <FormInput
            icon="at-sign"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Usuário"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />


          <FormInput
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />


          <FormInput
            icon="smile"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Idade"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.thirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />


          <FormInput
            icon="bookmark"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Conhecimento"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.thirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />


          <SubmitButton onPress={() => navigation.navigate('SignUp')}>
            Salvar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Home')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundColor>
  );
}
