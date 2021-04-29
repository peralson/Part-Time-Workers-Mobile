// React
import React from 'react'

// React Native
import { StyleSheet, View } from 'react-native'

const InputContainer = props => {
    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 24
    },
})

export default InputContainer
