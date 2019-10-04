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
        {/* This button is just for help developing */}
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundColor>
  );
}
