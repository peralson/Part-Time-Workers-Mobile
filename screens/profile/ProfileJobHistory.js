// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, ScrollView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Hooks
import getHistoryJobs from '../../hooks/getHistoryJobs'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import EmptyList from '../../components/works/EmptyList'
import BackButton from '../../components/UI/BackButton'
import HeaderTitle from '../../components/UI/HeaderTitle'
import IsLoading from '../../components/UI/IsLoading'
import PastJobItem from '../../components/works/PastJobItem'

const ProfileJobHistory = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useFocusEffect(
        useCallback(() => {
            const loadHistoryJobs = () => getHistoryJobs(token)
            loadHistoryJobs()
                .then(res => {
                    setJobs(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e.message)
                    setLoading(false)
                })
        }, [])
    )

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                rightComponent={<HeaderTitle title="Historial" />}
            />
            {loading ? <IsLoading /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {jobs.length === 0 ? <EmptyList quote='No has realizado ningún trabajo.' image={require('../../assets/sin_proyectos.png')}/> :
                        jobs.map(job => (
                            <PastJobItem
                                key={job.id}
                                offerData={job.offerData}
                                eventData={job.eventData}
                                jobData={job.jobData}
                                onSelect={() => navigation.navigate('ProfilePastJobDetails', { jobData: job })}
                            />
                        )
                    )}
                </ScrollView>
            )}
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

export default ProfileJobHistory