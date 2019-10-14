import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  height: 34px;
  width: ${props =>
    props.size === 'big' ? '80%' : props.size === 'medium' ? '70%' : '60%'};
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const IconVector = styled(Icon)`
  color: #fff;
`;
