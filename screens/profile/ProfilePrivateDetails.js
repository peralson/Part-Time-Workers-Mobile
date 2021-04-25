// React
import React from "react"

// React Native
import { StyleSheet, ScrollView } from "react-native"

// Libs
import moment from 'moment'
import 'moment/locale/es'

// Components
import Screen from "../../components/UI/Screen"
import HomeWrapper from "../../components/UI/HomeWrapper"
import BackButton from "../../components/UI/BackButton"
import HeaderTitle from "../../components/UI/HeaderTitle"
import ProfileItem from "../../components/profile/ProfileItem"

const ProfilePrivateDetails = ({ navigation, route }) => {
	const { profile } = route.params

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				rightComponent={<HeaderTitle title="Información legal" />}
			/>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<ProfileItem title="Nacionalidad" content={profile.legal.nationality} />
				{profile.legal.dni.front && <ProfileItem title="Imagen de DNI" content={profile.legal.dni.front} />}
				<ProfileItem title="Número de DNI" content={profile.legal.dni.number} />
				<ProfileItem title="Fecha de caducidad del DNI" content={moment(profile.legal.dni.expiryDate).format('DD-MM-YYYY')} />
				<ProfileItem title="Género" content={profile.details.gender} />
				<ProfileItem title="Nº Seguridad Social" content={profile.legal.ssNumber} />
				<ProfileItem title="Cuenta bancaria" content={profile.bank.bankAccount} />
			</ScrollView>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 24
    }
})

export default ProfilePrivateDetails
