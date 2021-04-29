// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, Text, ScrollView } from 'react-native'

// Hooks
import getPayrolls from '../../hooks/getPayrolls'

// Redux
import { useSelector } from 'react-redux'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import HeaderTitle from '../../components/UI/HeaderTitle'
import IsLoading from '../../components/UI/IsLoading'
import EmptyList from '../../components/works/EmptyList'

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

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                rightComponent={<HeaderTitle title="Nóminas" />}    
            />
            {loading ? <IsLoading /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {payrolls.length === 0 ? <EmptyList quote='No tienes ninguna nómina.' image={require('../../assets/sin_proyectos.png')}/> :
                        payrolls.map(item => <Text>Hola</Text>)}
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

export default ProfilePayrollsScreen