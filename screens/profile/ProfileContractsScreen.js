// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, Text, ScrollView } from 'react-native'

// Hooks
import getContracts from '../../hooks/getContracts'

// Redux
import { useSelector } from 'react-redux'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import HeaderTitle from '../../components/UI/HeaderTitle'
import IsLoading from '../../components/UI/IsLoading'
import EmptyList from '../../components/works/EmptyList'
import JobContract from '../../components/works/JobContract'

const ProfileContractsScreen = ({ navigation }) => {
    const token = useSelector(state => state.auth.token)

    const [contracts, setContracts] = useState([])
    const [loading, setLoading] = useState(true)

    useFocusEffect(
        useCallback(() => {
            const loadContracts = () => getContracts(token)
            loadContracts()
                .then(res => {
                    setContracts(res)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e.message)
                    setLoading(false)
                })
        }, [])
    )

    const openContract = (name, file) => navigation.navigate('OffersStack', { screen: 'PDF', params: { type: 'Contrato', name: name, file: file } })

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Contratos"
            />
            {loading ? <IsLoading /> : (
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {contracts.length === 0
                        ? <EmptyList quote='No tienes ningún contrato.' image={require('../../assets/sin_proyectos.png')}/>
                        : contracts.map(contract => (
                            <JobContract
                                key={contract.id}
                                contract={contract}
                                onSelect={() => openContract(contract.jobData.contract.name, contract.jobData.contract.file)}
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