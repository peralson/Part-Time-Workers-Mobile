// React
import React from "react"

// React Native
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  Image
} from "react-native"

// Icons
import offers from '../../assets/icons/offers.png'
import offersActive from '../../assets/icons/offers-active.png'
import works from '../../assets/icons/works.png'
import worksActive from '../../assets/icons/works-active.png'
import profile from '../../assets/icons/profile.png'
import profileActive from '../../assets/icons/profile-active.png'

// Constants
import Colors from "../../constants/Colors"
import Family from "../../constants/FontFamily"
import Size from "../../constants/FontSize"

const chooseIcon = name => {
	if (name === 'Ofertas') return { normal: offers, selected: offersActive }
	if (name === 'Trabajos') return { normal: works, selected: worksActive }
	if (name === 'Perfil') return { normal: profile, selected: profileActive }
}

const Tab = ({ isSelected, setNewSelected, name }) => {
	const selectedText = isSelected ? styles.selectedTabText : {}
	const icon = chooseIcon(name)

	return (
		<TouchableOpacity
			onPress={setNewSelected}
			activeOpacity={0.8}
			style={isSelected ? styles.wrapperSelected : styles.wrapper}
		>
			<Image
				source={isSelected ? icon.selected : icon.normal}
				style={{ width: 24, height: 24, alignItems: 'center' }}
			/>
			<Text style={{ ...styles.tabText, ...selectedText }}>{name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems:'center',
		paddingTop: 4,
		paddingBottom: Platform.OS === "android" ? 4 : 32,
		backgroundColor: Colors.darkPrimary,
		borderTopColor: Colors.grey,
		borderTopWidth: 1
	},
	wrapperSelected: {
		flex: 1,
		alignItems:'center',
		paddingTop: 4,
		paddingBottom: Platform.OS === "android" ? 4 : 32,
		backgroundColor: Colors.darkPrimary,
		borderTopColor: Colors.primary,
		borderTopWidth: 2
	},
	tabText: {
		fontFamily: Family.normal,
		fontSize: Size.micro,
		color: 'rgba(255, 255, 255, 0.7)',
		lineHeight: 14,
		marginTop: 2
	},
	selectedTabText: {
		fontFamily: Family.bold,
		color: Colors.white,
  	}
})

export default Tab
