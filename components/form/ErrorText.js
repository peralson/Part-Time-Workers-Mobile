// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

const ErrorText = props => {
    return (
        <View>
            <Text style={styles.errorText}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontFamily: 'gotham-book',
        fontSize: 14,
        marginTop: 8,
        color: 'red',
        lineHeight: 20
    }
})

export default ErrorText
