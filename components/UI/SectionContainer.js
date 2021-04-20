// React
import React from 'react'

// React Native
import { StyleSheet, View } from 'react-native'

const SectionContainer = ({ children }) => <View style={styles.inputContainer}>{children}</View>

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 24
    },
})

export default SectionContainer
