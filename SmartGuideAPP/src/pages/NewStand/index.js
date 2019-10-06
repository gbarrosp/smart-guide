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

export default function NewStand({navigation}) {
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
            placeholder="Título da bancada"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.secondTextInput.focus();
            }}
          />


          <FormInput
            icon="at-sign"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descrição"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />


          <FormInput
            icon="at-sign"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Público alvo"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
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
