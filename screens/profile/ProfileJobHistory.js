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
import PastJobItem from '../../components/works/PastJobItem'
import IsLoadingMini from '../../components/UI/IsLoadingMini'
import ErrorContainer from '../../components/UI/ErrorContainer'

const ProfileJobHistory = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            setError(false)
            const loadHistoryJobs = () => getHistoryJobs(token)
            loadHistoryJobs()
                .then(res => {
                    setJobs(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e.message)
                    setError(true)
                    setLoading(false)
                })
        }, [])
    )

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Historial"
            />
            {loading ? <IsLoadingMini text="historial" /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {error
                        ? <ErrorContainer />
                        : jobs.length === 0
                            ? <EmptyList quote='No has realizado ningún trabajo.' image={require('../../assets/sin_proyectos.png')}/>
                            : jobs.map(job => (
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
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})

export default ProfileJobHistory