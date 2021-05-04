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
import ProfileItem from '../../components/profile/ProfileItem'
import ImagePicker from '../../components/UI/ImagePicker'
import SideScrollPicker from '../../components/UI/SideScrollPicker'
import MultilineInput from '../../components/form/MultilineInput'

const ProfileDetailsScreen = ({ navigation, route }) => {
	const { profile } = route.params

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				title='Mi información'
			/>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<ProfileItem title='Fotografías' />
				<SideScrollPicker>
					<ImagePicker title='Personal' image={profile.images.main} />
					<ImagePicker title='Profesional' image={profile.images.profesional} />
				</SideScrollPicker>
				<ProfileItem title='Nombre' content={profile.name} />
				<ProfileItem title='Número de teléfono' content={profile.contact.phoneNumber} />
				<ProfileItem title='Dirección' content={profile.contact.address} />
				<ProfileItem title='Fecha de Nacimiento' content={moment(profile.details.birthday).format('DD-MM-YYYY')} />
				<ProfileItem title='Biografía' />
				<MultilineInput placeholder={profile.details.bio} />
			</ScrollView>
		</Screen>
	)
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16
    }
})

export default ProfileDetailsScreen
