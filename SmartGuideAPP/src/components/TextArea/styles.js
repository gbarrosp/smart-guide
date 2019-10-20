import styled from 'styled-components';
import {TouchableOpacity as TOpacity} from 'react-native';

export const Container = styled.View`
  padding: 0 15px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 25px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  height: 150;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
  justify-content: flex-start;
`;
