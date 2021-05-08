// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, ScrollView } from 'react-native'

// Hooks
import getContracts from '../../hooks/getContracts'

// Redux
import { useSelector } from 'react-redux'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import IsLoadingMini from '../../components/UI/IsLoadingMini'
import EmptyList from '../../components/works/EmptyList'
import JobContract from '../../components/works/JobContract'
import ErrorContainer from '../../components/UI/ErrorContainer'

const ProfileContractsScreen = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [contracts, setContracts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            setError(false)
            const loadContracts = () => getContracts(token)
            loadContracts()
                .then(res => {
                    setContracts(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log('Error:', e.message)
                    setError(true)
                    setLoading(false)
                })
        }, [])
    )

    const openContract = id => {
        navigation.navigate(
            'OffersStack',
            { screen: 'PDF', params: { id: id, type: 1 } }
        )
    }

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Contratos"
            />
            {loading ? <IsLoadingMini text="contratos" /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {error
                        ? <ErrorContainer />
                        : contracts.length === 0
                            ? <EmptyList quote='No tienes ningún contrato.' image={require('../../assets/sin_proyectos.png')}/>
                            : contracts.map(contract => (
                                <JobContract
                                    key={contract.id}
                                    contract={contract}
                                    onSelect={() => openContract(contract.id)}
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

export default ProfileContractsScreen