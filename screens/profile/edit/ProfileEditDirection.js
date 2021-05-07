// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ScrollView, StyleSheet } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'


// Components
import Screen from '../../../components/UI/Screen'
import HomeWrapper from '../../../components/UI/HomeWrapper'
import BackButton from '../../../components/UI/BackButton'
import EmptyList from '../../../components/works/EmptyList'
import IsLoadingMini from '../../../components/UI/IsLoadingMini'
import noList from '../../../assets/sin_posiciones.png'
import ListItem from '../../../components/profile/ListItem'
import OptionListInput from '../../../components/form/OptionListInput';

export const ProfileEditDirection = ({ navigation, route }) => {
	const [userListsLoading, setUserListsLoading] = useState(true)
	const userLists = useSelector(state => state.profile.userLists)

  const {title, onChange, options} = route.params

	
	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				title={title}
			/>	
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8
	},
})

export default ProfileEditDirection