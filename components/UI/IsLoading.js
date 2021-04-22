// React
import React from 'react'

// React Native
import {
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'

const IsLoading = () => (
    <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
    </View>
)

const styles = StyleSheet.create({
    centered: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default IsLoading