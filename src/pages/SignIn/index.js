import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubmitButton from '~/components/Button';
import { Creators as AuthActions } from '~/store/modules/auth/duck';

import {
  Container,
  TextInput,
  TouchableForgot,
  TextForgot,
  TextSignUp,
  TextTerm,
  TextUnderline,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('brunorossini@live.com');
  const [password, setPassword] = useState('123Mudar');

  function handleSubmit() {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <TextInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Endereço de e-mail"
          placeholderTextColor="#777"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          ref={passwordRef}
          returnKeyType="send"
          placeholderTextColor="#777"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableForgot onPress={() => navigation.navigate('Forgot')}>
          <TextForgot>Esqueceu sua senha?</TextForgot>
        </TouchableForgot>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          ENTRAR
        </SubmitButton>
        <TextSignUp>
          Não está registrado?&nbsp;
          <TextUnderline
            color="#000"
            onPress={() => navigation.navigate('Forgot')}
          >
            Junte-se a nós.
          </TextUnderline>
        </TextSignUp>
      </Container>
      <TextTerm>
        Ao fazer login, você concorda com a{' '}
        <TextUnderline>Política de Privacidade</TextUnderline> e com os{' '}
        <TextUnderline>Termos de Uso</TextUnderline> do MyHobbies.
      </TextTerm>
    </>
  );
};

export default SignIn;
