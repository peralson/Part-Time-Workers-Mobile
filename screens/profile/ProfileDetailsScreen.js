// React
import React from 'react'

// React Native
import { StyleSheet, ScrollView } from 'react-native'

// Libs
import moment from 'moment'
import 'moment/locale/es'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import HeaderTitle from '../../components/UI/HeaderTitle'
import ProfileItem from '../../components/profile/ProfileItem'
import ImagePicker from '../../components/UI/ImagePicker'

const ProfileDetailsScreen = ({ navigation, route }) => {
	const { profile } = route.params

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				rightComponent={<HeaderTitle title='Mi información' />}
			/>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<ProfileItem title='Nombre' content={profile.name} />
				<ProfileItem title='Biografía' content={profile.details.bio} />
				<ProfileItem title='Email' content={profile.contact.email} />
				<ProfileItem title='Número de teléfono' content={profile.contact.phoneNumber} />
				<ProfileItem title='Dirección' content={profile.contact.address} />
				<ProfileItem title='Fecha de Nacimiento' content={moment(profile.details.birthday).format('DD-MM-YYYY')} />
				<ImagePicker title='Imagen personal' image={profile.images.main} />
				<ImagePicker title='Imagen profesional' image={profile.images.profesional} />
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

export default ProfileDetailsScreen
