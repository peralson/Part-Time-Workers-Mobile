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
import IsLoading from '../../components/UI/IsLoading'
import EmptyList from '../../components/works/EmptyList'
import JobPayroll from '../../components/works/JobPayroll'

const ProfilePayrollsScreen = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [payrolls, setPayrolls] = useState([])
    const [loading, setLoading] = useState(true)

    useFocusEffect(
        useCallback(() => {
            const loadPayrolls = () => getPayrolls(token)
            loadPayrolls()
                .then(res => {
                    setPayrolls(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e.message)
                    setLoading(false)
                })
        }, [])
    )

    const openPayroll = file => navigation.navigate('OffersStack', { screen: 'PDF', params: { type: 'Nómina', file: file } })

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Nóminas"
            />
            {loading ? <IsLoading /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {payrolls.length === 0 
                        ? <EmptyList quote='No tienes ninguna nómina.' image={require('../../assets/sin_proyectos.png')}/> 
                        : payrolls.map(payroll => (
                            <JobPayroll
                                key={payroll.id}
                                payroll={payroll}
                                onSelect={() => openPayroll(payroll.jobData.payroll.file)}
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