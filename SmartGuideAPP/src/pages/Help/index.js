import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
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

export default class NewStand extends Component {
  constructor(props) {
    super(props);
    // console.log('State set, is mounted?', this._isMounted);
    this.state = {
      stands: [],
      loading: false,
    };
  }

  handleQuestions = async () => {
    this.setState({loading: true});
    const questions = await api.get('questions/', {
      headers: {
        Authorization: 'Token 7577768a0a00d333e3bd032227b2a64f546d849b',
      },
    });

    this.setState({stands: questions.data, loading: false});
  };

  componentDidMount() {
    this.handleQuestions();
  }

  render() {
    const {navigation} = this.props;
    const {loading} = this.state;

    let component = (
      <FlatList
        data={this.state.stands}
        keyExtractor={(item, index) => index.toString()}
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
    );

    if (loading) {
      component = <ActivityIndicator size="large" />;
    }

    return (
      <BackgroundColor>
        <Container>
          <Header title="Ajuda" to="Home" navigation={navigation} />
          {component}
        </Container>
      </BackgroundColor>
    );
  }
}
