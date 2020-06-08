import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 42px;
  background: #000;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const Text = styled.Text`
  padding-top: 10px;
  font-family: 'Eina03-SemiBold';
  color: #fff;
  font-size: 16px;
`;
