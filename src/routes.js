import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
          {/* <Stack.Screen name="Filters" component={Filters} /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={stackOptions}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
