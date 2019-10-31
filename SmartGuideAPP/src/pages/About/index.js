import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

import BackgroundColor from '~/components/BackgroundImage';
import Header from '~/components/Header';

import {Container, Title, Text} from './styles';

export default class About extends Component {
  render(){

    return (
      <BackgroundColor>
        <Container>
          <Header title="Sobre" to="Home" navigation={navigation} />
          <Text>Autores</Text>
          <Text>Gustavo Barros @gbarrosp</Text>
          <Text>Eduardo Faria @zeduardo</Text>
        </Container>
      </BackgroundColor>
    );
  }
}
