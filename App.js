import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigation';
import { StyleSheet, Text, View } from 'react-native';
import ProductState from './src/state/product/productState';
import RegisterState from './src/state/register/registerState';

export default function App() {
  return (
    <ProductState>
      <RegisterState>
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
      </RegisterState>
    </ProductState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
