// React
import React from 'react'

// React Native
import { View, StyleSheet, Platform, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import HomeDesc from './HomeDesc'

const HomeWrapper = ({ leftComponent, title, rightComponent, description }) => (
    <View style={styles.header}>
        <View style={styles.top}>
            {leftComponent ? <View style={styles.side}>{leftComponent}</View> : <View style={styles.side}></View>}
            {title && <Text numberOfLines={1} style={styles.title}>{title}</Text>}
            {rightComponent ? <View style={styles.sideRight}>{rightComponent}</View> : <View style={styles.side}></View>}
        </View>
        {description && <HomeDesc>{description}</HomeDesc>}
    </View>
)

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingTop: Platform.OS === "android" ? 32 : 56,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8
    },
    title: {
        color: Colors.white,
        fontFamily: Family.bold,
        fontSize: Size.small,
        lineHeight: 21,
        flex: 3,
        textAlign: 'center'
    },
    side: {
        flex: 1
    },
    sideRight: {
        flex: 1,
        alignItems: 'flex-end'
    }
})

export default HomeWrapper