import React from 'react'
import { View, Button } from 'react-native'

const MyButton = ({title,color,onPress, ...props}) => {
    return (
        <View {...props}> 
            <Button
                title={title}
                color={color}
                onPress={onPress}
            />
        </View>
    )
}

export default MyButton
