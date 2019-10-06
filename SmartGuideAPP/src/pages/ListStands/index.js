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

        <SignLink onPress={() => navigation.navigate('Home')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundColor>
  );
}
