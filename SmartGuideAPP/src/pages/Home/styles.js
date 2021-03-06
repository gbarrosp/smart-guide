import {Platform} from 'react-native';
import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 30px 30px;
  justify-content: space-between;
`;

export const Scan = styled.View`
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

export const Image = styled.Image`
  width: 120;
  height: 120;
`;

export const LogoText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const HelpIcon = styled.View`
  left: 0px;
  width: 40px;
`;

export const SettingsIcon = styled.View`
  right: 0px;
  width: 40px;
`;

export const FooterItem = styled.View`
  flex-direction: row;
`;

export const ListIcon = styled.View`
  right: 0px;
  width: 40px;
`;

export const AddItemIcon = styled.View`
  margin-left: 10px;
  width: 40px;
`;

export const InfoIcon = styled.View`
  left: 0px;
  width: 40px;
`;
