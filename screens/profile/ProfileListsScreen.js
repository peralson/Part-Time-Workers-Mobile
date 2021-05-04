// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ScrollView, StyleSheet } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Actions
import * as profileActions from '../../store/actions/profile'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import EmptyList from '../../components/works/EmptyList'
import IsLoadingMini from '../../components/UI/IsLoadingMini'
import noList from '../../assets/sin_posiciones.png'

export const ProfileListsScreen = () => {
	const [userListsLoading, setUserListsLoading] = useState(true)
	const userLists = useSelector(state => state.profile.userLists)

	const navigation = useNavigation();
	const dispatch = useDispatch()

  	const loadUserLists = async () => {
		try {
			await dispatch(profileActions.fetchUserLists())
		} catch ({ message }) {
			console.log('error', message)
		}
	}

  	useFocusEffect(
		useCallback(() => {
			loadUserLists()
		}, [dispatch, setUserListsLoading])
	)

  	useEffect(() => {
		setUserListsLoading(true)
		loadUserLists()
			.then(() => setUserListsLoading(false))
	}, [])
	
	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				title='Listas'
			/>
			{userListsLoading ? <IsLoadingMini text="Listas" /> : 
				userLists.length === 0 ? <EmptyList quote='Actualmente no apareces en listas' image={noList} /> : (
					<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

					</ScrollView>
				)
			}
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8
	},
})

export default ProfileListsScreen
