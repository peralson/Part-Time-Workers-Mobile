// React
import React from 'react'

// React Native
import { StyleSheet, View } from 'react-native'

const Card = ({ noMargin, children }) => (
    <View style={noMargin ? {...styles.shadow, ...{ marginBottom: 0 }} : styles.shadow}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    shadow: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        marginBottom: 8
    },
})

export default Card