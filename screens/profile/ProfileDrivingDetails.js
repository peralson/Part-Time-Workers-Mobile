// React
import React from "react"

// React Native
import { StyleSheet, ScrollView } from "react-native"

// Components
import Screen from "../../components/UI/Screen"
import HomeWrapper from "../../components/UI/HomeWrapper"
import BackButton from "../../components/UI/BackButton"
import HeaderTitle from "../../components/UI/HeaderTitle"
import ProfileItem from "../../components/profile/ProfileItem"

const ProfileDrivingDetails = ({ navigation, route }) => {
	const { profile } = route.params

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				rightComponent={<HeaderTitle title="Información de transporte" />}
			/>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<ProfileItem title="Carnet de conducir" content={profile.transport.hasLicense ? 'Si' : 'No'} />
				{profile.transport.hasLicense && <ProfileItem title="Tengo coche" content={profile.transport.hasCar ? 'Si' : 'No'} />}
			</ScrollView>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
        paddingTop: 16,
        paddingBottom: 24,
    }
})

export default ProfileDrivingDetails
