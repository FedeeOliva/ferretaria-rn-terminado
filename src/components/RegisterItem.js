import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import format from 'date-fns/format'
import Button from './Button'

const RegisterItem = ({register}) => {
    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <Text style={styles.textInfo}>
                    Fecha: {format(new Date(register?.createdAt), "dd-MM-yyyy HH:mm:ss")}
                    </Text>
                <Text style={styles.textInfo}>Producto: {register?.producto?.nombre}</Text>
                <Text style={styles.textInfo}>Tipo: {register?.tipo}</Text>
                <Text style={styles.textInfo}>Cantidad: {register?.cantidad}{register?.producto?.unidad}</Text>
                <Text style={styles.textPrice}>Importe: ${register?.importe}</Text>
            </View>
            <View>
                {/* <Button
                    title="Editar"
                /> */}
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
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    button:{
        marginVertical: 5,
        
    }
})

export default RegisterItem
