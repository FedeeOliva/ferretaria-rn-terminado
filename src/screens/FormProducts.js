import React, {useState, useContext} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
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

    const [pickedData, setPickedData] = useState(params?.unidad || UNIDADES[0]);
    const [nombre, setNombre] = useState(params?.nombre || '');
    const [precio, setPrecio] = useState(params?.precio || '');
    
    console.log(pickedData);

    const handleSubmit = () => {
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
