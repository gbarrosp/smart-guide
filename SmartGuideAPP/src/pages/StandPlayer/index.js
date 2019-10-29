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
    const user_knowledge = global.user_data.knowledge
    api.get(`descriptions/${this.state.stand_id}/${user_knowledge}`, {
      headers: {
        Authorization: `Token ${global.user_token}`
      }
    }).then(result => {
        this.setState({title: result.data.stand_name})
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
