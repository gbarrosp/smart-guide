import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImage from '~/assets/stemi_P.png';
import BackgroundColor from '~/components/BackgroundImage';
import Header from '~/components/Header';

import {
  Container,
  StandTitle,
  StandDescription,
  StandContainer,
  TextContainer,
  TitleContainer,
} from './styles';

export default function NewStand({navigation}) {
  let stands = [
    {
      key: 'T-Rex',
      description:
        'Tyrannosaurus é um gênero de dinossauros terópodes celurossauros que viveram durante o final do período cretáceo, há aproximadamente 66 milhões de anos, em toda a região que hoje é a América do Norte.',
    },
    {
      key: 'Velociraptor',
      description:
        'Velociraptor (comumente abreviado para "raptor") é um dos gêneros de dinossauros mais conhecidos do público em geral, devido ao seu papel de destaque na série de filmes Jurassic Park.',
    },
  ];
  return (
    <BackgroundColor>
      <Container>
        <Header
          title="Lista de bancadas"
          to="Home"
          navigation={navigation}
          size="big"
        />
        <FlatList
          data={stands}
          renderItem={({item}) => (
            <StandContainer>
              <TextContainer>
                <TitleContainer>
                  <StandTitle>{item.key}</StandTitle>
                  <Icon
                    onPress={() => navigation.navigate('Help')}
                    name={'edit'}
                    size={30}
                    color="white"
                  />
                </TitleContainer>
                <StandDescription>{item.description}</StandDescription>
              </TextContainer>
            </StandContainer>
          )}
        />
      </Container>
    </BackgroundColor>
  );
}
