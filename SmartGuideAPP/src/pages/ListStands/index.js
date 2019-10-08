import React, {Component} from 'react';
import {FlatList} from 'react-native';

import logoImage from '~/assets/stemi_P.png';
import BackgroundColor from '~/components/Background';

import {
  Container,
  ScreenTitle,
  Image,
  SignLink,
  SignLinkText,
  StandTitle,
  StandDescription,
  StandContainer,
  Header,
  TextContainer,
} from './styles';

export default function NewStand({navigation}) {

  let stands = [
    {key: 'T-Rex', description: 'Tyrannosaurus é um gênero de dinossauros terópodes celurossauros que viveram durante o final do período cretáceo, há aproximadamente 66 milhões de anos, em toda a região que hoje é a América do Norte.'},
    {key: 'Velociraptor', description: 'Velociraptor (comumente abreviado para "raptor") é um dos gêneros de dinossauros mais conhecidos do público em geral, devido ao seu papel de destaque na série de filmes Jurassic Park.'},
  ]
  return (
    <BackgroundColor>
      <Container>
        <Header>
          <ScreenTitle onPress={() => navigation.navigate('Home')}>Lista de bancadas</ScreenTitle>
        </Header>
        <FlatList
          data={stands}
          renderItem={({item}) => 
            <StandContainer>
              <TextContainer>
                <StandTitle>
                  {item.key}
                </StandTitle>
                <StandDescription>
                  {item.description}
                </StandDescription>
              </TextContainer>
            </StandContainer>
          }
        />

        <SignLink onPress={() => navigation.navigate('Home')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundColor>
  );
}
