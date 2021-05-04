// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ScrollView, StyleSheet, View } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Navigation
import { useNavigation } from '@react-navigation/native';

// Actions
import * as profileActions from '../../store/actions/profile'

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import HeaderTitle from '../../components/UI/HeaderTitle';
import BackButton from '../../components/UI/BackButton';
import Label from '../../components/UI/Label'
import SideScrollPicker from '../../components/UI/SideScrollPicker'
import OfferItem from '../../components/offers/OfferItem'
import EmptyList from '../../components/works/EmptyList'
import JobItem from '../../components/works/JobItem'
import IsLoadingMini from '../../components/UI/IsLoadingMini'

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
  console.log(userListsLoading)
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title='Listas' />}
      />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				{userListsLoading ? <IsLoadingMini text="Listas" /> : (
					<>
						{userLists.length === 0 ? (
							<EmptyList
								quote='Actualmente no apareces en listas'
								image={require('../../assets/sin_proyectos.png')}
							/>
						) : (
							<SideScrollPicker>
								{/* {jobs.map(job => (
									<JobItem
										key={job.id}
										{...job}
										onSelect={() => jobDetailHandler(job.id, job.jobData.id)}
									/>
								))} */}
                <Text>ola</Text>
							</SideScrollPicker>
						)}
					</>
				)}
			</ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
export default ProfileListsScreen;
