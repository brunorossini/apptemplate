import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TextInput = styled.TextInput`
  font-family: 'Eina03-Regular';
  height: 42px;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 15px;
  color: #666;
`;

export const TouchableForgot = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const TextForgot = styled.Text`
  font-family: 'Eina03-Regular';
  color: #333;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 15px;
`;

export const TextSignUp = styled.Text`
  font-family: 'Eina03-Regular';
  color: #333;
  margin-top: 30px;
  font-size: 15px;
`;

export const TextTerm = styled.Text`
  position: absolute;
  bottom: 0px;
  font-family: 'Eina03-Regular';
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  font-size: 13px;
  padding: 20px;
`;

export const TextUnderline = styled.Text`
  font-family: 'Eina03-Regular';
  text-decoration: underline;
  color: ${(props) => (props.color ? props.color : '#333')};
`;
