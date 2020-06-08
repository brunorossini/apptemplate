import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import SubmitButton from '~/components/Button';
import { Creators as AuthActions } from '~/store/modules/auth/duck';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(AuthActions.signOut());
  }

  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Teste')}
      />
      <SubmitButton onPress={handleSubmit}>Sair</SubmitButton>
    </View>
  );
};

export default Dashboard;
