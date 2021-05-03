// React
import React from 'react'

// React Native
import {
    StyleSheet,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'

const Screen = ({ children }) => <View style={styles.screen}>{children}</View>

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.darkPrimary
    }
})

export default Screen