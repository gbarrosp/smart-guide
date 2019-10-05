import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/Background';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Footer,
  HelpIcon,
  SettingsIcon,
  LogoText,
  Scan,
  ListIcon,
  AddItemIcon
} from './styles';

export default function Home({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
      <Container>
        <Header>
          <HelpIcon>
            <Icon onPress={() => navigation.navigate('Help')}
              name={'help-circle'} size={40} color="white"/>
          </HelpIcon>
          <LogoText onPress={() => navigation.navigate('SignIn')}>SmartGuide</LogoText>
          <SettingsIcon>
            <Icon name={'settings'} size={40} color="white"></Icon>
          </SettingsIcon>
        </Header>

        <Scan>
          <Icon name={'camera'} size={150} color="white"></Icon>
        </Scan>

        <Footer>
          <ListIcon>
            <Icon name={'list'} size={40} color="white"></Icon>
          </ListIcon>
          <AddItemIcon>
            <Icon name={'plus-circle'} size={40} color="white"></Icon>
          </AddItemIcon>
        </Footer>

      </Container>
    </BackgroundColor>
  );
}
