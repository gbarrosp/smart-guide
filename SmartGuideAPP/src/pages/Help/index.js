import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import logoImage from '~/assets/stemi_P.png';
import BackgroundColor from '~/components/BackgroundImage';
import Header from '~/components/Header';

import {
  Container,
  ScreenTitle,
  Image,
  SignLink,
  SignLinkText,
  StandTitle,
  StandDescription,
  StandContainer,
  TextContainer,
  TitleContainer,
} from './styles';

export default function NewStand({navigation}) {
  let stands = [
    {
      key: 'Camêra não abre',
      description:
        'Para reiniciar a camêra verifique se não existe nenhum outro app que também utiliza a câmera',
    },
    {
      key: 'O que é conhecimento?',
      description:
        'SmartGuide exibe a melhor descrição da exposição para você. Por isso é importante sabermos o seu nível de conhecimento',
    },
  ];
  return (
    <BackgroundColor>
      <Container>
        <Header title="Ajuda" to="Home" navigation={navigation} />
        <FlatList
          data={stands}
          renderItem={({item}) => (
            <StandContainer>
              <TextContainer>
                <TitleContainer>
                  <StandTitle>{item.key}</StandTitle>
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
