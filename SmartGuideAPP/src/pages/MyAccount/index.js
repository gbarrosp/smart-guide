import React, {Component} from 'react';
import {ScrollView, Picker, Keyboard} from 'react-native';

import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
import DismissKeyboard from '~/components/DismissKeyboard';
import Header from '~/components/Header';
import api from '../../services/api';

import {Container, Image, Form, FormInput, SubmitButton} from './styles';

export default class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      changeName: global.user_data.name,
      // changeEmail: '',
      changeAge: global.user_data.age.toString(),
      changeKnowledge: global.user_data.knowledge,
    };
  }

  updateUser = () => {
    api.post('user/',
      {
        username: global.user_data.username,
        name: this.state.changeName,
        age: this.state.changeAge,
        knowledge: this.state.changeKnowledge,
      },{
          headers: {
            Authorization: `Token ${global.user_token}`,
        }
      }
    ).then( () => {
      global.user_data.name = this.state.changeName
      global.user_data.age = this.state.changeAge
      global.user_data.knowledge = this.state.changeKnowledge
    }
    ).catch(error => console.log(error));
  }

  render(){
    const {navigation} = this.props;
    const {changeName, changeAge, changeKnowledge } = this.state;
    const user = global.user_data

    return (
      <BackgroundColor>
        <ScrollView>
          <DismissKeyboard>
            <Container>
              <Header
                title="Minha conta"
                to="Home"
                navigation={navigation}
                size="medium"
              />
              <Image source={logoImage} />

              <Form>
                <FormInput
                  icon="user"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  autoCapitalize="none"
                  placeholder={user.name}
                  returnKeyType="next"
                  value={changeName}
                  onChangeText={text =>  this.setState({changeName: text})}
                  onSubmitEditing={() => {
                    this.secondTextInput.focus();
                  }}
                />


                {/* <FormInput
                  icon="mail"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  autoCapitalize="none"
                  keyboardType={'email-address'}
                  placeholder="E-mail"
                  returnKeyType="next"
                  value={changeEmail}
                  onChangeText={text =>  this.setState({changeEmail: text})}
                  onSubmitEditing={() => {
                    this.ThirdTextInput.focus();
                  }}
                  ref={input => {
                    this.secondTextInput = input;
                  }}
                /> */}

                <FormInput
                  icon="smile"
                  blurOnSubmit={false}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType={'numeric'}
                  placeholder={user.age.toString()}
                  returnKeyType="next"
                  value={changeAge}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={text =>  this.setState({changeAge: text})}
                  ref={input => {
                    this.ThirdTextInput = input;
                  }}
                />

                <Picker
                  selectedValue={changeKnowledge}
                  // style={{height: 50, width: 100}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({changeKnowledge: itemValue})
                  }>
                  <Picker.Item label="Criança" value="1" />
                  <Picker.Item label="Adulto" value="2" />
                </Picker>

                {/* <FormInput
                  icon="bookmark"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Conhecimento"
                  returnKeyType="go"
                  value={changeKnowledge}
                  onChangeText={text =>  this.setState({changeKnowledge: text})}
                  onSubmitEditing={this.updateUser}
                  ref={input => {
                    this.FourthTextInput = input;
                  }}
                /> */}

                <SubmitButton onPress={this.updateUser}>
                  Salvar
                </SubmitButton>
              </Form>
            </Container>
          </DismissKeyboard>
        </ScrollView>
      </BackgroundColor>
    );
  }
}
