import {Platform} from 'react-native';
import styled from 'styled-components';

import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 30px 30px;
`;

export const Image = styled.Image`
  width: 180;
  height: 180;
  align-self: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormTextArea = styled(TextArea)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const DescriptionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
