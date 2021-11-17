import React from 'react'
import { View,FlatList } from 'react-native'
import RegisterItem from '../components/RegisterItem'
import {globalStyle} from '../globalCSS';

const registers = [{
    id: 1,
    producto: {nombre: 'tornillo'},
    cantidad: '10',
    tipo: 'ingreso',
    importe: '135'
}]

const Registers = () => {
    return (
        <View style={globalStyle.containerScreen}>
             <FlatList
                    data={registers}
                    renderItem={({item}) => 
                            <RegisterItem
                                register={item}
                            />
                    }
               />
        </View>
    )
}

export default Registers
