// React
import React from 'react'

// React Native
import {
    ScrollView,
    StyleSheet,
    Linking,
    Alert
} from 'react-native'

// Redux && Actions
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'

// Icons
import ayuda from '../../assets/icons/chat.png'
import perfil from '../../assets/icons/contact-book.png'
import gestion from '../../assets/icons/notebook.png'
import config from '../../assets/icons/settings.png'

// Components
import ProfileInfo from '../../components/profile/ProfileInfo'
import Screen from '../../components/UI/Screen'
import LinkItem from '../../components/profile/LinkItem'
import ProfileSection from '../../components/profile/ProfileSection'

const ProfileHomeScreen = ({
	navigation,
	logout,
	profile
}) => (
	<Screen>
		<ProfileInfo title={profile.name} image={profile.images.main} percentage={100} />
		<ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
			<ProfileSection
				title="Mi perfil"
				description="Visualiza y modifica toda tu información."
				image={perfil}
			>
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
					title="Listas"
					icon="arrow-forward"
					onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileListsScreen" })}
				/>
				<LinkItem
					bottom
					title="Historial"
					icon="arrow-forward"
					onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileJobHistory" })}
				/>
			</ProfileSection>
			<ProfileSection
				title="Gestion laboral"
				description="Visualiza toda la información laboral referente a tus contrataciones."
				image={gestion}
			>
				<LinkItem
					title='Firma digital'
					icon='arrow-forward'
					onSelect={() =>
						navigation.navigate('ProfileStack', {
							screen: 'ProfileSignatureScreen',
							params: { profile: profile },
						}
					)}
				/>
				<LinkItem
					title="Contratos"
					icon="arrow-forward"
					onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfileContracts" })}
				/>
				<LinkItem
					bottom
					title="Nóminas"
					icon="arrow-forward"
					onSelect={() => navigation.navigate("ProfileStack", { screen: "ProfilePayrolls" })}
				/>
			</ProfileSection>
			<ProfileSection
				title="Ayuda"
				description="Contacta con nosotros directamente y te resolveremos cualquier duda."
				image={ayuda}
			>
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
					bottom
					title="Correo electrónico"
					icon="mail-outline"
					onSelect={() => {
						Linking.openURL(
							`mailto: pabloperaltapalacios@gmail.com`
						).catch(() => Alert("Debes tener un correo instalado"))
					}}
				/>
			</ProfileSection>
			<ProfileSection
				image={config}
				title="Configuración"
			>
				<LinkItem
					bottom
					title="Cerrar sesión"
					icon="log-out"
					onSelect={() => {
						Alert.alert("¿Quieres cerrar la sesión?", "", [
							{ text: "No" },
							{ text: "Cerrar", style: "destructive", onPress: () => logout() }
						])
					}}
				/>
			</ProfileSection>
		</ScrollView>
	</Screen>
);

const styles = StyleSheet.create({
	scroll: {
		paddingHorizontal: 16,
		paddingBottom: 80,
		paddingTop: 16,
	},
})

const mapStateToProps = state => {
	return {
		profile: state.profile.profile
	}
}

const mapDispatchToProps = {
	logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHomeScreen)
