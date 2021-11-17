import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { Picker } from 'react-native-woodpicker'
import Button from '../components/Button';
import { globalStyle } from '../globalCSS';

const PRODUCTOS = [
    {label: 'U', value: 'u'},
    {label: 'Kg', value: 'kg'},
    {label: 'Gr', value: 'gr'},
    {label: 'Litro', value: 'litro'},
    {label: 'Ml', value: 'ml'},
    {label: 'Metro', value: 'metro'},
    {label: 'Cm', value: 'cm'},
]

const FormRegisters = ({route:{params}}) => {
    const [pickedProduct, setPickedProduct] = useState('u');
    const [cantidad, setCantidad] = useState();

    return (
        <View style={globalStyle.containerScreen}>
            <Text style={styles.text}>
                Tipo: {params == 'ingreso'? 'Ingreso(Compra)' : 'Egreso(Venta)'}
            </Text>
            <TextInput
                placeholder="Cantidad"
                keyboardType='numeric'
                style={styles.input}
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
            />
            <Picker
                item={pickedProduct}
                items={PRODUCTOS}
                onItemChange={setPickedProduct}
                title="Productos"
                placeholder="Producto"
                isNullable={false}
                containerStyle={styles.input}
                textInputStyle={{
                    fontSize: 20,
                    textAlign: 'left'
                }}
            />
            <Text style={styles.text}>Importe total: $3516</Text>
            <Button
                title="Crear Registro"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 2,
        borderBottomColor: "#ADD8E6",
        height: 50,
        marginVertical: 20,
        fontSize: 20,
        padding: 5
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        //textAlign: 'center'
    }
})

export default FormRegisters
