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

export default class NewStand extends Component {
  // _isMounted = false;
  constructor(props){
    super(props)
    // console.log('State set, is mounted?', this._isMounted)
    this.state = {
      stands: []
    };
  }

  loadQuestions = () => {
    api.get('questions/', {
      headers: {
        Authorization: 'Token 7577768a0a00d333e3bd032227b2a64f546d849b'
      }
    }).then(result => {
      console.log(result.data);
      this.setState({stands: result.data});
    });
  }

  componentDidMount() {
    // this._isMounted = true;
    // console.log('My Turn, is mount?', this._isMounted)
    // api.get('questions/', {
    //   headers: {
    //     Authorization: 'Token 7577768a0a00d333e3bd032227b2a64f546d849b'
    //   }
    // }).then(result => {
    //   console.log(result.data);
      // console.log('Monted now?', this._isMounted)
      // if (this._isMounted) {
      //   console.log('Is mounted')
        // this.setState({stands: result.data});
      // }
    // });
    this.loadQuestions();
  };

  // componentWillUnmount() {
  //   console.log('L51')
  //   this._isMounted = false;
  // }

  render() {
    const {navigation} = this.props;
    const {stands} = this.state;
    console.log('Rendered!')
    return(
      <BackgroundColor>
        <Container>
          <Header title="Ajuda" to="Home" navigation={navigation.navigate('Home')} />
          <FlatList
            data={stands}
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
        </Container>
      </BackgroundColor>
    )};
}
