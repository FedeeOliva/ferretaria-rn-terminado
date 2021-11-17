import React, {useContext, useEffect} from 'react'
import {View,FlatList, Text } from 'react-native'
import ProductItem from '../components/ProductItem'
import Button from '../components/Button';
import {globalStyle} from '../globalCSS';
import productContext from '../state/product/productContext';


const Products = ({navigation}) => {

    const {products, getProducts} = useContext(productContext);
    
    
    useEffect(() =>{
        getProducts()
    } , []);

    return (
        <View style={globalStyle.containerScreen}>
           <View>
               <Button 
                    title="Agregar Producto"
                    onPress={() => navigation.navigate('FormProducts')}
               />
           </View>
           <View>
               <FlatList
                    data={products}
                    renderItem={({item}) => 
                            <ProductItem
                                product={item}
                            />
                    }
               />
           </View>
        </View>
    )
}

export default Products
