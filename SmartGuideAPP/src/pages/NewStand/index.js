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
  DescriptionInput,
} from './styles';

export default function NewStand({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
      <Container>
        <Image source={logoImage} />

        <Form>
          <FormInput
            icon="map-pin"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Título da bancada"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.secondTextInput.focus();
            }}
          />


          <DescriptionInput
            icon="align-center"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descrição"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.thirdTextInput.focus();
            }}
            ref={input => {
              inputs.secondTextInput = input;
            }}
          />


          <FormInput
            icon="image"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Foto"
            returnKeyType="next"
            onSubmitEditing={() => {
              inputs.fourthTextInput.focus();
            }}
            ref={input => {
              inputs.thirdTextInput = input;
            }}
          />


          <FormInput
            icon="users"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Público alvo"
            returnKeyType="next"
            ref={input => {
              inputs.fourthTextInput = input;
            }}
          />


          <SubmitButton onPress={() => navigation.navigate('SignUp')}>
            Adicionar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Home')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundColor>
  );
}
