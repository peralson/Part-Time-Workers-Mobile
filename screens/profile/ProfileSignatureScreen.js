// React
import React, { useState, useRef } from 'react'

// React Native
import { StyleSheet, Text, View, Button } from 'react-native'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'
import BackButton from '../../components/UI/BackButton'

const ProfileSignatureScreen = ({ navigation }) => {
  
    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title='Firma digital'
            />
        </Screen>
    )
}

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
})

export default ProfileSignatureScreen
