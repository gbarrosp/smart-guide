import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/BackgroundImage';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Header, Title, Text} from './styles';

export default function About({navigation}) {
  return (
    <BackgroundColor>
      <Container>
        <Header>
          <Title onPress={() => navigation.navigate('Home')}>SmartGuide</Title>
        </Header>
        <Title>Autores</Title>
        <Text>Gustavo Barros @gbarrosp</Text>
        <Text>Eduardo Faria @zeduardo</Text>
      </Container>
    </BackgroundColor>
  );
}
