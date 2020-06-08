import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubmitButton from '~/components/Button';
import { Creators as AuthActions } from '~/store/modules/auth/duck';

import { Container, TextInput } from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('brunorossini@live.com');
  const [password, setPassword] = useState('123Mudar');

  function handleSubmit() {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <Container>
      <TextInput
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry
        placeholder="Digite sua senha"
        ref={passwordRef}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={password}
        onChangeText={setPassword}
      />
      <SubmitButton loading={loading} onPress={handleSubmit}>
        Entrar
      </SubmitButton>
    </Container>
  );
};

export default SignIn;
