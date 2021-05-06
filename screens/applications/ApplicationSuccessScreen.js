// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Screen from '../../components/UI/Screen'
import ApplyButton from '../../components/offers/ApplyButton'
import BottomAbsConatiner from '../../components/UI/BottomAbsConatiner'

const ApplicationSuccess = ({ navigation }) => (
	<Screen>
		<View style={styles.container}>
			<Image style={styles.image} source={require('../../assets/application.png')} />
			<Text style={styles.title}>¡Has aplicado con éxito!</Text>
			<Text style={styles.description}>Si la empresa acepta la petición, esta oferta pasará al área de "Trabajos"</Text>
			<BottomAbsConatiner onLayout={e => setHeight(e.nativeEvent.layout.height)}>
				<ApplyButton onSelect={() => navigation.navigate('Home', { screen: 'Ofertas' })}>
					Continuar
				</ApplyButton>
			</BottomAbsConatiner>
		</View>
	</Screen>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100
	},
	title: {
		fontFamily: Family.bold,
		fontSize: Size.big,
		color: Colors.white,
		textAlign: 'center',
		marginBottom: 8,
		paddingHorizontal: 24,
		lineHeight: 27
	},
	image: {
		marginTop: 80,
		width: 300,
		height: 300,
		borderRadius: 150,
		paddingHorizontal: 24,
	},
	description: {
		fontFamily: Family.normal,
		textAlign: 'center',
		fontSize: Size.small,
		color: Colors.darkGrey,
		lineHeight: 21,
		paddingHorizontal: 24,
	},
});

export default ApplicationSuccess
