// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, ScrollView } from 'react-native'

// Hooks
import getPayrolls from '../../hooks/getPayrolls'

// Redux
import { useSelector } from 'react-redux'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import IsLoadingMini from '../../components/UI/IsLoadingMini'
import ErrorContainer from '../../components/UI/ErrorContainer'
import EmptyList from '../../components/works/EmptyList'
import JobPayroll from '../../components/works/JobPayroll'

const ProfilePayrollsScreen = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [payrolls, setPayrolls] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            setError(false)
            const loadPayrolls = () => getPayrolls(token)
            loadPayrolls()
                .then(res => {
                    setPayrolls(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log('Error:', e.message)
                    setError(true)
                    setLoading(false)
                })
        }, [])
    )

    const openPayroll = id => {
        navigation.navigate(
            'OffersStack',
            { screen: 'PDF', params: { id: id, type: 2, isPayroll: true } }
        )
    }

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Nóminas"
            />
            {loading ? <IsLoadingMini text="nóminas" /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {error
                        ? <ErrorContainer />
                        : payrolls.length === 0
                            ? <EmptyList quote='No tienes ninguna nómina.' image={require('../../assets/sin_proyectos.png')}/> 
                            : payrolls.map(payroll => (
                                <JobPayroll
                                    key={payroll.id}
                                    payroll={payroll}
                                    onSelect={() => openPayroll(payroll.id)}
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

export default ProfilePayrollsScreen