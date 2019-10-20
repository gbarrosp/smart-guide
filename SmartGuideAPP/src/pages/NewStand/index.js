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
  FormTextArea,
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
              size="big"
            />
            <Image source={logoImage} />

            <Form>
              <FormInput
                icon="map-pin"
                autoCorrect={false}
                blurOnSubmit={false}
                autoCapitalize="none"
                placeholder="Título da bancada"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputs.secondTextInput.focus();
                }}
              />

              <FormTextArea
                icon="align-center"
                autoCorrect={false}
                blurOnSubmit={false}
                autoCapitalize="none"
                placeholder="Descrição"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputs.thirdTextInput.focus();
                }}
                ref={input => {
                  inputs.secondTextInput = input;
                }}
                multiline={true}
                numberOfLines={10}
              />

              <FormInput
                icon="image"
                autoCorrect={false}
                autoCapitalize="none"
                blurOnSubmit={false}
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
