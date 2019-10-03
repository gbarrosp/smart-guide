import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #125fdb;
  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
