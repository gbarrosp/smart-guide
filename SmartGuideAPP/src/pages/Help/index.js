import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
  TitleContainer,
} from './styles';

export default function NewStand({navigation}) {

  let stands = [
    {key: 'Camêra não abre', description: 'Para reiniciar a camêra verifique se não existe nenhum outro app que está também utiliza camêra'},
    {key: 'O que é conhecimento?', description: 'SmartGuide exibe a melhor descrição da exposição para você. Por isso é importante sabermos o seu nível de conhecimento'},
  ]
  return (
    <BackgroundColor>
      <Container>
        <Header>
          <ScreenTitle onPress={() => navigation.navigate('Home')}>Ajuda</ScreenTitle>
        </Header>
        <FlatList
          data={stands}
          renderItem={({item}) => 
            <StandContainer>
              <TextContainer>
                <TitleContainer>
                  <StandTitle>
                    {item.key}
                  </StandTitle>
                </TitleContainer>
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
