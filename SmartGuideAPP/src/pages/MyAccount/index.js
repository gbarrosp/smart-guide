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
              inputs.ThirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />


          <FormInput
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType={'email-address'}
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.FourthTextInput.focus();
            }}
            ref={input => {
              inputs.ThirdTextInput = input;
            }}
          />


          <FormInput
            icon="smile"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType={'numeric'}
            placeholder="Idade"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.FifthTextInput.focus();
            }}
            ref={input => {
              inputs.FourthTextInput = input;
            }}

          />


          <FormInput
            icon="bookmark"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Conhecimento"
            returnKeyType="go"
            ref={input => {
              inputs.FifthTextInput = input;
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
