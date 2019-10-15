import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
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

export default class ListStands extends Component {
  state = {
    stands: [],
    // let stands = [
    //   {key: 'Camêra não abre', description: 'Para reiniciar a camêra verifique se não existe nenhum outro app que também utiliza a câmera'},
    //   {key: 'O que é conhecimento?', description: 'SmartGuide exibe a melhor descrição da exposição para você. Por isso é importante sabermos o seu nível de conhecimento'},
    // ]
  };

  getQuestions = async () => {
    try {
      const response = await api.get('questions/',  {
        crossDomain: true
    });
      console.log('API Response: ', response);
      // this.setState({stands: response});
    } catch (err) {
      console.log('err', err);
    }
  };

  render() {
    const {stands} = this.state;

    return (
      <BackgroundColor>
        <Container>
          <Header>
            <ScreenTitle onPress={() => navigation.navigate('Home')}>
              Ajuda
            </ScreenTitle>
          </Header>
          <FlatList
            data={stands}
            keyExtractor={stand => stand.id}
            renderItem={({item}) => (
              <StandContainer>
                <TextContainer>
                  <TitleContainer>
                    <StandTitle>{item.title}</StandTitle>
                  </TitleContainer>
                  <StandDescription>{item.answer}</StandDescription>
                </TextContainer>
              </StandContainer>
            )}
          />

          <SignLink onPress={this.getQuestions}>
            <SignLinkText>Testpost</SignLinkText>
          </SignLink>
          <SignLink onPress={() => navigation.navigate('Home')}>
            <SignLinkText>Voltar</SignLinkText>
          </SignLink>
        </Container>
      </BackgroundColor>
    );
  }
}
