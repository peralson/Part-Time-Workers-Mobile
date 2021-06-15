// React
import React from 'react'

// React Native
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ApplyButton = ({ locked, children, onSelect }) => (
  <TouchableOpacity
    style={locked ? styles.lockedContainer : styles.buttonContainer}
    activeOpacity={0.8}
    onPress={locked ? () => {} : onSelect}
  >
    <Text style={locked ? styles.lockedButton : styles.button}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonContainer: {
		paddingVertical: 10,
		alignItems: 'center',
		flex: 1,
		backgroundColor: Colors.accent,
		borderRadius: 10,
	},
	button: {
		fontFamily: Family.bold,
		fontSize: Size.small,
		color: Colors.white,
		lineHeight: 21,
	},

	lockedContainer: {
		paddingVertical: 10,
		alignItems: 'center',
		flex: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
	},
	lockedButton: {
		fontFamily: Family.bold,
		fontSize: Size.small,
		color: Colors.accentBg,
		lineHeight: 21,
	},
})

export default ApplyButton
