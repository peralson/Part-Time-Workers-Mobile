// React
import React from 'react'

// React Native
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ImagePicker = ({ title, image, onSelect }) => (
	<View style={styles.profile}>
		<View style={styles.left}>
			<Image style={styles.image} source={{ uri: image }} />
		</View>
		<View style={styles.right}>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
				<Text style={styles.cta}>Cambiar imagen</Text>
			</TouchableOpacity>
		</View>
	</View>
)

const styles = StyleSheet.create({
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 32
	},
	left: {
		height: 60,
		width: 60,
		borderRadius: 4,
		overflow: 'hidden',
		marginRight: 16
	},
	image: {
		width: '100%',
		height: '100%',
	},
	profileMainText: {
		flex: 1,
		marginRight: 16,
	},
	title: {
		fontFamily: Family.bold,
		fontSize: Size.medium,
		lineHeight: 24,
		color: Colors.white,
	},
	cta: {
		color: Colors.primary,
		fontFamily: Family.normal,
		fontSize: Size.small,
		lineHeight: 21,
		paddingVertical: 2
	}
})

export default ImagePicker
