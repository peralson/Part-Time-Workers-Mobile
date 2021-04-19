// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'

const ProfileHomeScreen = ({ navigation }) => {
    return (
        <Screen>
            <HomeWrapper leftComponent={<HeaderTitle title="Perfil" />} />
        </Screen>
    )
}

const styles = StyleSheet.create({})

export default ProfileHomeScreen