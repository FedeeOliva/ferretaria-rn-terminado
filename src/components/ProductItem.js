import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import productContext from '../state/product/productContext';
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({product}) => {

    const {setProductToEdit, deleteProduct} = useContext(productContext);
    const navigation = useNavigation()    

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <Text style={styles.textInfo}>{product.nombre}</Text>
                <Text style={styles.textInfo}>Stock: {calcularStock(product.registros) || 0}{product.unidad}</Text>
                <Text style={styles.textPrice}>{`$${product.precio}/${product.unidad}`}</Text>
            </View>
            <View style={styles.options}>
                <Button
                    title="Editar"
                    style={{marginBottom: 5}}
                    onPress={() => navigation.navigate('FormProducts',product)}
                />
                <Button
                    title="Eliminar"
                    color="red"
                    onPress={() => deleteProduct(product.id)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 7,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2
    },
    data:{
        flex: 1
    },
    options:{
        justifyContent: 'center'
    },
    textPrice:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInfo:{
        fontSize: 18,
        fontWeight: '600'
    },
    button:{
        marginVertical: 5,
        
    }
})

const calcularStock = registros => {
    return registros.reduce( (acc, prod) => {
        if(prod.tipo === "ingreso") acc+=prod.cantidad
        else acc-=prod.cantidad
        return acc;
    }, 0)
}

export default ProductItem
