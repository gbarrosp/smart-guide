import {Platform} from 'react-native';
import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 30px 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  align-self: center;
  margin: 10px 0px 30px 0px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
