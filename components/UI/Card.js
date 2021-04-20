// React
import React from 'react'

// React Native
import { StyleSheet, View } from 'react-native'

const Card = ({ noMargin, noPadding, children }) => (
    <View
        style={
            noMargin ?
                noPadding ? 
                    {...styles.shadow, ...{ marginBottom: 0, padding: 0 }} :
                    {...styles.shadow, ...{ marginBottom: 0 }} :
                noPadding ?
                    {...styles.shadow, ...{ padding: 0 }} :
                    styles.shadow
        }
    >
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