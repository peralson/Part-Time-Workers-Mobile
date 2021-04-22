// React
import React from 'react'

// React Native
import { View, StyleSheet } from 'react-native'

// Constants
import Colors from '../../constants/Colors'

// Components
import HomeDesc from './HomeDesc'

const HomeWrapper = ({ leftComponent, rightComponent, description }) => (
    <View style={styles.header}>
        <View style={styles.top}>
            {leftComponent ? leftComponent : <View></View>}
            {rightComponent ? rightComponent : <View></View>}
        </View>
        {description && <HomeDesc>{description}</HomeDesc>}
    </View>
)

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        paddingTop: 56,
        borderBottomColor: Colors.grey,
        borderBottomWidth: .6
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8
    },
})

export default HomeWrapper