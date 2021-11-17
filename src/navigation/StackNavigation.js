import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import FormProducts from '../screens/FormProducts';
import FormRegisters from '../screens/FormRegisters';
import Products from '../screens/Products';
import Registers from '../screens/Registers';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
        title: "Ferreteria"
      }} />
      <Stack.Screen name="FormProducts" component={FormProducts} options={{
        title: "Formulario Productos"
      }} />
      <Stack.Screen name="FormRegisters" component={FormRegisters} options={{
        title: "Formulario Registros"
      }} />
      <Stack.Screen name="Products" component={Products} options={{
        title: "Productos"
      }} />
      <Stack.Screen name="Registers" component={Registers} options={{
        title: "Registros"
      }} />
    </Stack.Navigator>
  );
}
export default StackNavigation;