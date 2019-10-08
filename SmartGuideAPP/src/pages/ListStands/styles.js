import {Platform} from 'react-native';
import styled from 'styled-components';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

export const Image = styled.Image`
  width: 120;
  height: 120;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const StandTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const StandDescription = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-align: justify;
`;

export const TextContainer = styled.View`
  padding: 10px 20px;
`;

export const StandContainer = styled.View`
  background: #1c4991;
  width: 350px;
  height: 180px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const ScreenTitle = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const Header = styled.View`
  flexDirection: row;
  height: 40px;
  justifyContent: center;
  margin-bottom:10px;
  margin-top: 10px;
`;
