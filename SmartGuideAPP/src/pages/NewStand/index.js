import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import logoImage from '~/assets/stemi_GG.png';
import BackgroundColor from '~/components/BackgroundImage';
import DismissKeyboard from '~/components/DismissKeyboard';
import Header from '~/components/Header';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  DescriptionInput,
} from './styles';

export default function NewStand({navigation}) {
  let inputs = {};

  return (
    <BackgroundColor>
      <ScrollView>
        <DismissKeyboard>
          <Container>
            <Header
              title="Adicionar Bancada"
              to="Home"
              navigation={navigation}
              size="medium"
            />
            <Image source={logoImage} />

            <Form>
              <FormInput
                icon="map-pin"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Título da bancada"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputs.secondTextInput.focus();
                }}
              />

              <DescriptionInput
                icon="align-center"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Descrição"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputs.thirdTextInput.focus();
                }}
                ref={input => {
                  inputs.secondTextInput = input;
                }}
              />

              <FormInput
                icon="image"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Foto"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputs.fourthTextInput.focus();
                }}
                ref={input => {
                  inputs.thirdTextInput = input;
                }}
              />

              <FormInput
                icon="users"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Público alvo"
                returnKeyType="next"
                ref={input => {
                  inputs.fourthTextInput = input;
                }}
              />

              <SubmitButton onPress={() => navigation.navigate('SignUp')}>
                Adicionar
              </SubmitButton>
            </Form>
          </Container>
        </DismissKeyboard>
      </ScrollView>
    </BackgroundColor>
  );
}
