// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'

const ProfilePayrollsScreen = ({ navigation }) => {
    return (
        <Screen>
            <HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} />} />
        </Screen>
    )
}

const styles = StyleSheet.create({})

export default ProfilePayrollsScreen