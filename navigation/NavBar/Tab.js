// React
import React from 'react'

// React Native
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

// Constants
import Colors from '../../constants/Colors'

const Tab = ({ isSelected, setNewSelected, name }) => {
    const selectedWrapper = isSelected ? styles.selectedWrapper : {}
    const selectedText = isSelected ? styles.selectedTabText : {}

    return ( 
        <TouchableOpacity
            onPress={setNewSelected}
            activeOpacity={.4}
            style={{...styles.wrapper, ...selectedWrapper}}
        >
            <Text style={{...styles.tabText, ...selectedText}}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 16,
        paddingBottom: 32,
        paddingVertical: 16,
    },
    selectedWrapper: {
        backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    tabText: {
        textAlign: 'center',
        fontFamily: 'gotham-book',
        fontSize: 14,
        color: Colors.white,
        lineHeight: 21
    },
    selectedTabText: {
        fontFamily: 'gotham-bold'
    }
})

export default Tab