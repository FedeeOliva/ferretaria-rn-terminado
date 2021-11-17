import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button 
        title="Venta (Egreso)"
          onPress={() => navigation.navigate('FormRegisters', 'egreso')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Compra (Ingreso)" 
          onPress={() => navigation.navigate('FormRegisters', 'ingreso')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Registros"
          onPress={() => navigation.navigate('Registers')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Lista de Productos" 
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30
  },
  button: {
    marginVertical: 10,
  },
});

export default Home;
