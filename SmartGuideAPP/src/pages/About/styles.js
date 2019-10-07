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
  font-size: 30px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Header = styled.View`
  flexDirection: row;
  height: 40px;
  justifyContent: center;
  margin-bottom:10px;
`;

