// React
import React from 'react'

// React Native
import { StyleSheet, View } from 'react-native'

const DetailsContainer = ({ children }) => <View style={styles.container}>{children}</View>

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 40
    }
})

export default DetailsContainer