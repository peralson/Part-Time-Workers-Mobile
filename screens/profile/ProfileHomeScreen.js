// React
import React from 'react'

// React Native
import {
    ScrollView,
    StyleSheet,
    Linking,
    Alert
} from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Actions
// import * as authActions from '../../store/actions/auth'

// Components
import ProfileInfo from '../../components/profile/ProfileInfo'
import Screen from '../../components/UI/Screen'
import SectionContainer from '../../components/UI/SectionContainer'
import Label from '../../components/UI/Label'
import LabelInfo from '../../components/UI/LabelInfo'
import LinkItem from '../../components/profile/LinkItem'

const ProfileHomeScreen = ({ navigation }) => {
	const profile = useSelector(state => state.profile.profile)

	return (
		<Screen>
			<ProfileInfo title={profile.name} image={profile.images.main} percentage={40} />
			<ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
				<SectionContainer>
					<Label>Mi perfil</Label>
					<LabelInfo>
						Visualiza y modifica todo tu información.
					</LabelInfo>
					<LinkItem
						title="General"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileDetails", params: { profile: profile } })}
					/>
					<LinkItem
						title="Legal"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfilePrivateDetails", params: { profile: profile } })}
					/>
					<LinkItem
						title="Transporte"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileDrivingDetails", params: { profile: profile } })}
					/>
					<LinkItem
						title="Historial"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileJobHistory" })}
					/>
				</SectionContainer>
				<SectionContainer>
					<Label>Gestión laboral</Label>
					<LabelInfo>
						Visualiza toda la información laboral referente a tus contrataciones.
					</LabelInfo>
					<LinkItem
						title="Contratos"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileContracts" })}
					/>
					<LinkItem
						title="Nóminas"
						icon="arrow-forward"
						onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfilePayrolls" })}
					/>
				</SectionContainer>
				<SectionContainer>
					<Label>Ayuda</Label>
					<LabelInfo>
						Contacta con nosotros directamente y te resolveremos cualquier duda.
					</LabelInfo>
					<LinkItem
						title="Whatsapp"
						icon="call-outline"
						onSelect={() => {
							Linking.openURL(
								`whatsapp://send?text=Hola Pablo, tengo una duda sobre Part Time Workers&phone=34607570778`
							).catch(() => Alert("Debes tener Whatsapp instalado"))
						}}
					/>
					<LinkItem
						title="Correo electrónico"
						icon="mail-outline"
						onSelect={() => {
							Linking.openURL(
								`mailto: pabloperaltapalacios@gmail.com`
							).catch(() => Alert("Debes tener un correo instalado"))
						}}
					/>
				</SectionContainer>
				<SectionContainer>
				<Label>Configuración</Label>
				<LinkItem
					title="Cerrar sesión"
					icon="log-out"
					onSelect={() => {
						Alert.alert("¿Quieres cerrar la sesión?", "", [
							{ text: "No" },
							{ text: "Cerrar", style: "destructive", onPress: () => {} }
						])
					}}
				/>
				</SectionContainer>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	scroll: {
		paddingHorizontal: 24,
		paddingBottom: 80,
		paddingTop: 24,
	},
})

export default ProfileHomeScreen
