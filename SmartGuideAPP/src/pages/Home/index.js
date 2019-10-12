import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/BackgroundImage';
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
  AddItemIcon,
  FooterItem,
  InfoIcon,
} from './styles';

export default function Home({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
      <Container>
        <Header>
          <HelpIcon>
            <Icon
              onPress={() => navigation.navigate('Help')}
              name={'help-circle'}
              size={40}
              color="white"
            />
          </HelpIcon>
          <LogoText onPress={() => navigation.navigate('SignIn')}>
            SmartGuide
          </LogoText>
          <SettingsIcon>
            <Icon
              name={'settings'}
              size={40}
              color="white"
              onPress={() => navigation.navigate('MyAccount')}
            />
          </SettingsIcon>
        </Header>

        <Scan>
          <Icon name={'camera'} size={150} color="white"></Icon>
        </Scan>

        <Footer>
          <FooterItem>
            <InfoIcon>
              <Icon
                name={'info'}
                size={40}
                color="white"
                onPress={() => navigation.navigate('About')}
              />
            </InfoIcon>
          </FooterItem>
          <FooterItem>
            <ListIcon>
              <Icon
                name={'list'}
                size={40}
                color="white"
                onPress={() => navigation.navigate('ListStands')}
              />
            </ListIcon>
            <AddItemIcon>
              <Icon
                name={'plus-circle'}
                size={40}
                color="white"
                onPress={() => navigation.navigate('NewStand')}
              />
            </AddItemIcon>
          </FooterItem>
        </Footer>
      </Container>
    </BackgroundColor>
  );
}
