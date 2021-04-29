// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const Label = props => {
    return (
        <View>
            <Text style={styles.label}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'gotham-bold',
        width: '100%',
        fontSize: 16,
        marginBottom: 8,
        color: Colors.black
    },
})

export default Label
