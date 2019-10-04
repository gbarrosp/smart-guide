import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// import bgImage from '~/assets/background.jpg';
import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/Background';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    const {press, showPass} = this.state;

    this.setState({showPass: !showPass, press: !press});
  };

  render() {
    const {navigation} = this.props;

    return (
      <BackgroundColor>
        {/* <ImageBackground source={bgImage} style={styles.backgroundContainer}> */}
        <Container>
          <Image source={logoImage} />

          <Form>
            <FormInput
              icon="user"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Usuário"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
            />

            <FormInput
              icon="lock"
              onShowPass={this.showPass}
              secureTextEntry={this.state.showPass}
              placeholder="Senha"
              returnKeyType="go"
              ref={input => {
                this.secondTextInput = input;
              }}
            />

            <SubmitButton onPress={() => navigation.navigate('Home')}>Entrar</SubmitButton>
            <SubmitButton onPress={() => navigation.navigate('SignUp')}>
              Cadastrar
            </SubmitButton>
          </Form>

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Esqueci minha senha</SignLinkText>
          </SignLink>
        </Container>
      </BackgroundColor>
    );
  }
}
const styles = StyleSheet.create({
  // backgroundContainer: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // backgroundColor: '#125fdb',
  // },
});

// export default App;
