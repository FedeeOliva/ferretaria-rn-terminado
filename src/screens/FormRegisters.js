import React, {useState, useEffect, useContet, useContext} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { Picker } from 'react-native-woodpicker'
import Button from '../components/Button';
import { globalStyle } from '../globalCSS';
import registerContext from '../state/register/registerContext';
import productContext from '../state/product/productContext';


const FormRegisters = ({ navigation , route:{params}}) => {
    const [pickedProduct, setPickedProduct] = useState(1);
    const [cantidad, setCantidad] = useState('');
    const [productsOptions, setProductsOptions] = useState([]);

    const {getProducts, products} = useContext(productContext);
    const {createRegister, editRegister} = useContext(registerContext);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if(products.length){
            const options = products.reduce( (acc, product) => {
                const option = {
                    label: `${product.nombre}($${product.precio}/${product.unidad})`, 
                    value: product.id.toString()};
                acc.push(option);
                return acc;            
            }, []);
            setPickedProduct(options[0]);
            setProductsOptions(options);
        }
    }, [products]);

    const handleSubmit = () => {
        const register = {
            cantidad,
            tipo: params,
            productoId: pickedProduct.value,
            importe: calcularImporte(pickedProduct.value, products, cantidad)
        }
        createRegister(register);
        navigation.navigate("Home");
    }

    return (
        <View style={globalStyle.containerScreen}>
            <Text style={styles.text}>
                Tipo: {params == 'ingreso'? 'Ingreso(Compra)' : 'Egreso(Venta)'}
            </Text>
            
            <Picker
                item={pickedProduct}
                items={productsOptions}
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
            <TextInput
                placeholder="Cantidad"
                keyboardType='numeric'
                style={styles.input}
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
            />
            <Text style={styles.text}>Importe total: ${calcularImporte(pickedProduct.value,products,cantidad)}</Text>
            <Button
                title="Crear Registro"
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
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        //textAlign: 'center'
    }
})

const calcularImporte = (idProducto, productos, cantidad) => {
    if(!idProducto || !productos.length || !cantidad) return 0;
    const selectedProduct = productos.find( product => product.id == idProducto);
    return selectedProduct.precio*Number(cantidad);
}

export default FormRegisters
