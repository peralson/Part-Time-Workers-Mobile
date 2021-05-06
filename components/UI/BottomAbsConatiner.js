// React
import React from 'react'

// React Native
import { StyleSheet, View, Platform } from 'react-native'

// Constants
import Colors from '../../constants/Colors'

const BottomAbsConatiner = ({ children }) => <View style={styles.container}>{children}</View>

const styles = StyleSheet.create({
    container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: Colors.darkPrimary,
		paddingBottom: Platform.OS === 'ios' ? 32 : 8,
		paddingTop: 8,
		paddingHorizontal: 16,
		borderTopColor: Colors.grey,
		borderTopWidth: 1,
	}
})

export default BottomAbsConatiner