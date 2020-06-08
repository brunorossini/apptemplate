import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 46px;
  background: #f5f5f5;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
