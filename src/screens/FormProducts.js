import React, {useState, useContext} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Picker } from 'react-native-woodpicker'
import Button from '../components/Button'
import {globalStyle} from '../globalCSS';
import productContext from '../state/product/productContext';

const UNIDADES = [
    {label: 'U', value: 'u'},
    {label: 'Kg', value: 'kg'},
    {label: 'Gr', value: 'gr'},
    {label: 'Litro', value: 'litro'},
    {label: 'Ml', value: 'ml'},
    {label: 'Metro', value: 'metro'},
    {label: 'Cm', value: 'cm'},
]

const FormProducts = ({route: {params}, navigation}) => {

    const {createProduct,editProduct} = useContext(productContext);

    const [pickedData, setPickedData] = useState(UNIDADES.find( el => el.value == params?.unidad) || UNIDADES[0]);
    const [nombre, setNombre] = useState(params?.nombre || '');
    const [precio, setPrecio] = useState(params?.precio || '');
    const [alert, setAlert] = useState(null);
    

    const handleSubmit = () => {
        if(!nombre || !precio || pickedData){
            setAlert("Todos los campos son obligatorios")
            return
        }
        setAlert(null);
        if(params){
            const product = {
                ...params,
                nombre,
                precio,
                unidad: pickedData.value
            }
            editProduct(product);
        }else{
            const product = {
                nombre,
                precio,
                unidad: pickedData.value
            }
            createProduct(product);
        }
        navigation.navigate('Products');
    }

    return (
        <View style={globalStyle.containerScreen}>
            <TextInput
                placeholder="Nombre"
                style={styles.input}
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
            <TextInput
                placeholder="Precio x unidad"
                keyboardType='numeric'
                style={styles.input}
                value={precio}
                onChange={e => setPrecio(e.target.value)}

            />
            <Picker
                item={pickedData}
                items={UNIDADES}
                onItemChange={setPickedData}
                title="Unidades"
                placeholder="Unidad"
                isNullable={false}
                containerStyle={styles.input}
                textInputStyle={{
                    fontSize: 20
                }}
            />
            {alert && 
                <Text styles={globalStyle.alert}>
                    {alert}
                </Text>}
            <Button
                title={params? "Editar Producto" : "Crear Producto"}
                onPress={handleSubmit}
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
    }
})

export default FormProducts
