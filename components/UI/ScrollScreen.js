// React
import React from 'react'

// React Native
import {
    StyleSheet,
    ScrollView
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'

const ScrollScreen = ({ children }) => <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>{children}</ScrollView>

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: Colors.white
    }
})

export default ScrollScreen