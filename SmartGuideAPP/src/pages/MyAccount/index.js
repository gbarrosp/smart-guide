import React, {Component} from 'react';
import {ScrollView, Picker, Keyboard} from 'react-native';

import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
import DismissKeyboard from '~/components/DismissKeyboard';
import Header from '~/components/Header';

import {Container, Image, Form, FormInput, SubmitButton} from './styles';

export default class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      changeUser: '',
      changeEmail: '',
      changeAge: '',
      changeKnowledge: '',
    };
  }

  updateUser = () => {
    console.log('Update this little guy')
    console.log(this.state)
    // api.post('auth/register/',
    //   {
    //     username: this.state.changeUser,
    //     password: this.state.changeUserPassword
    //   }
    // ).then(result => {
    //   console.log('User registered')
    //   console.log(result.data)
    //   global.user_token = result.data.token
    //   global.username = result.data.username
    //   api.get(`user/${global.username}/`,{
    //     headers: {
    //       Authorization: `Token ${global.user_token}`
    //     }
    //   }).then(response => {
    //     global.user_data = response.data
    //   }).catch(error => console.log(error));

    //   this.props.navigation.navigate('MyAccount')
    // }).catch(error => console.log(error));
  }

  render(){
    const {navigation} = this.props;
    const {changeUser, changeEmail, changeAge, changeKnowledge } = this.state;

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
                  placeholder="Nome"
                  returnKeyType="next"
                  value={changeUser}
                  onChangeText={text =>  this.setState({changeUser: text})}
                  onSubmitEditing={() => {
                    this.secondTextInput.focus();
                  }}
                />


                <FormInput
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
                />

                <FormInput
                  icon="smile"
                  blurOnSubmit={false}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType={'numeric'}
                  placeholder="Idade"
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
