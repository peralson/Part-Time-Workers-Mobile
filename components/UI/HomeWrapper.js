// React
import React from 'react'

// React Native
import { View, StyleSheet } from 'react-native'

const HomeWrapper = ({ leftComponent, rightComponent }) => (
    <View style={styles.header}>
        {leftComponent ? leftComponent : <View></View>}
        {rightComponent ? rightComponent : <View></View>}
    </View>
)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 8,
        paddingHorizontal: 24,
        paddingTop: 60
    },
})

export default HomeWrapper