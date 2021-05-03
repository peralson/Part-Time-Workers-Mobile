// React
import React, { useState } from 'react'

// React Navigation
import { View, StyleSheet } from 'react-native'

// Components
import Tab from './Tab'

// Constants
import Colors from '../../constants/Colors'

const TabBar = ({ state, navigation }) => {
    // Set Ofertas as default loading screen
    const [selected, setSelected] = useState('Ofertas')
    // Validates if its the selected tab
    const isSelectedHandler = routeName => routeName !== selected ? false : true
    // Change selected tab and render its component
    const newSelectedHandler = (routeName, index) => {
        if (state.index !== index) {
            setSelected(routeName)
            navigation.navigate(routeName)
        }
    }

    return (
        <View style={styles.navContainer}>
            <View style={styles.container}>
                {state.routes.map((route, index) => (
                    <Tab
                        name={route.name}
                        isSelected={isSelectedHandler(route.name)}
                        setNewSelected={() => newSelectedHandler(route.name, index)}
                        key={route.key}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkPrimary,
        borderTopColor: Colors.grey,
        borderTopWidth: 1
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default TabBar