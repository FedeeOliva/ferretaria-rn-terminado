import React, { useEffect, useContext } from 'react'
import { Text, View,FlatList, StyleSheet } from 'react-native'
import RegisterItem from '../components/RegisterItem'
import {globalStyle} from '../globalCSS';
import registerContext from '../state/register/registerContext';


const Registers = () => {

    const {getRegisters,registers} = useContext(registerContext);

    useEffect(() => {
        getRegisters();
    }, [])

    return (
        <View style={globalStyle.containerScreen}>
            <View style={styles.dataContainer}>
                <Text style={styles.textData}>Ingresos: ${calcularIngresosTotales(registers)}</Text>
                <Text style={styles.textData}>Egresos: ${calcularEgresosTotales(registers)}</Text>
                <Text style={styles.textData}>
                    Balance: ${calcularIngresosTotales(registers) - calcularEgresosTotales(registers)}
                    </Text>
            </View>
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
const styles = StyleSheet.create({
    textData: {
        fontWeight: 'bold',
        fontSize: 20
    },
    dataContainer: {
        marginBottom: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingBottom: 5
        
    }
})

const calcularIngresosTotales = registros =>{
    return registros.reduce( (acc, reg) => {
        if(reg.tipo === 'ingreso') acc+=reg.importe;
        return acc;
    },0);
}

const calcularEgresosTotales = registros =>{
    return registros?.reduce( (acc, reg) => {
        if(reg.tipo === 'egreso') acc+=reg.importe;
        return acc;

    },0);
}

export default Registers
