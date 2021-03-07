import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListScreen from './src/ListScreen';
import RegistrationScreen from './src/RegistrationScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="List" component={ListScreen} />
        <RootStack.Screen name="Form Register" component={RegistrationScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
