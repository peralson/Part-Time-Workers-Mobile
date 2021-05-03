// React
import React, { useState } from 'react'

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

const ApplicationSuccess = ({ navigation }) => {
    const [height, setHeight] = useState(0)
    
    return (
        <Screen>
			<View style={{...styles.container, ...{ paddingBottom: height }}}>
				<Image style={styles.image} source={require('../../assets/application.png')} />
				<Text style={styles.title}>¡Has aplicado con éxito!</Text>
				<Text style={styles.description}>Si la empresa acepta la petición, esta oferta pasará al área de "Trabajos"</Text>
				<View onLayout={e => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
					<ApplyButton onSelect={() => navigation.navigate('Home', { screen: 'Ofertas' })}>
						Continuar
					</ApplyButton>
				</View>
			</View>
        </Screen>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
	bottomAbsolute: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: Colors.darkPrimary,
		paddingBottom: Platform.OS === 'ios' ? 32 : 8,
		paddingTop: 8,
		borderTopColor: Colors.grey,
        borderTopWidth: 1,
		paddingHorizontal: 24,
	}
});

export default ApplicationSuccess
