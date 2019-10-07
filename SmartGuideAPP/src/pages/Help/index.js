import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/Background';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  LogoText,
} from './styles';

export default function Home({navigation}) {

  return (
    <BackgroundColor>
      <Container>
        <Header>
          <LogoText onPress={() => navigation.navigate('Home')}>Ajuda</LogoText>
        </Header>
      </Container>
    </BackgroundColor>
  );
}
