import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import SubmitButton from '~/components/Button';
import { Creators as AuthActions } from '~/store/modules/auth/duck';

const Dashboard = () => {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(AuthActions.signOut());
  }

  return (
    <View>
      <SubmitButton onPress={handleSubmit}>Sair</SubmitButton>
    </View>
  );
};

export default Dashboard;
