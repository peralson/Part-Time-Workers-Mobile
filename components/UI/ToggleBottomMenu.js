// React
import React from 'react'

// React Native
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Colors from '../../constants/Colors'

const ToggleBottomMenu = props => {

    return (
        <View style={styles.full}>
            <TouchableOpacity style={styles.touchable} onPress={props.onSelect}></TouchableOpacity>

            <View style={styles.menuContainer}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    full: { 
        zIndex: 1, 
        position: 'absolute',
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0,0,0,.2)' 
    },
    touchable: {
        flex: 1
    },
    menuContainer: { 
        zIndex: 2,
        position: 'absolute',
        bottom: 0, 
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 40,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
})

export default ToggleBottomMenu
