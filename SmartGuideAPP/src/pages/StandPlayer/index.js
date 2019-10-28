import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
import DismissKeyboard from '~/components/DismissKeyboard';
import Header from '~/components/Header';
import api from '../../services/api';

import {
  Container,
  DescriptionText
} from './styles';

export default class StandPlayer extends Component{
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      stand_id: global.current_stand,
    };
  }

  componentDidMount(){
    api.get(`stands/${this.state.stand_id}/`, {
      headers: {
        Authorization: 'Token 7577768a0a00d333e3bd032227b2a64f546d849b'
      }
    }).then(result => {
        this.setState({title: result.data.name});
    });
    api.get(`descriptions/${this.state.stand_id}/${global.user_knowledge}`, {
      headers: {
        Authorization: 'Token 7577768a0a00d333e3bd032227b2a64f546d849b'
      }
    }).then(result => {
        this.setState({description: result.data.description});
    });
  }

  render(){
    const {navigation} = this.props;
    const {title, description} = this.state;

    return (
      <BackgroundColor>
        <ScrollView>
          <DismissKeyboard>
            <Container>
              <Header
                title={title}
                to="Home"
                navigation={navigation}
                size="big"
              />
              <DescriptionText>
                {description}
              </DescriptionText>
            </Container>
          </DismissKeyboard>
        </ScrollView>
      </BackgroundColor>
    );
  }
}
