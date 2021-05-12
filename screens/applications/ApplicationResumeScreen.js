// React
import React, { useState } from 'react'

// React Native
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as applicationActions from '../../store/actions/applications'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import ApplyButton from '../../components/offers/ApplyButton'
import BottomAbsConatiner from '../../components/UI/BottomAbsConatiner'

const ApplicationResumeScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(false)

    const { offerId } = route.params

    const dispatch = useDispatch()

    const offerApplicationHandler = async () => {
        setLoading(true)
        try {
            await dispatch(applicationActions.sendApplication(offerId))
            navigation.navigate('ApplicationSuccess')
        } catch (err) {
            Alert.alert('Oh! Vaya...', err.message, [{ text: 'Okay' }])
        } finally {
            setLoading(false)
        }
    }

    return (
        <Screen>
            <HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} title="Firmar contrato" />}/>
            <View style={styles.center}>
                <Ionicons color={Colors.primary} name="document-text-outline" size={80} />
                <Text style={{...styles.title, ...{ marginTop: 16 }}}>
                    ¡Atento!
                </Text>
                <Text style={{...styles.title, ...{ marginBottom: 16, }}}>
                    Vas a firmar un contrato.
                </Text>
                <Text style={styles.description}>
                    Recomendamos leer el contrato antes de continuar. Una vez procedas a aplicar, entendemos que estás de acuerdo con las condiciones de esta oferta de trabajo.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OffersStack', { screen: 'PDF', params: { id: offerId, type: 0 } })}
                    activeOpacity={.8}
                    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}
                >
                    <Text style={styles.buttonText}>
                        Ver contrato
                    </Text>
                    <Ionicons name="eye-outline" color={Colors.primary} />
                </TouchableOpacity>
            </View>
            <BottomAbsConatiner>
                <ApplyButton onSelect={offerApplicationHandler}>
                    {isLoading ? 'Aplicando...' : 'Estoy de acuerdo'}
                </ApplyButton>
            </BottomAbsConatiner>
        </Screen>
    )
}

const styles = StyleSheet.create({
    center: {
        marginBottom: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 40
    },
    title: {
        fontFamily: Family.bold,
        color: Colors.white,
        textAlign: 'center',
        fontSize: Size.big,
        lineHeight: 27
    },
    description: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.white,
        textAlign: 'center',
        lineHeight: 21,
        marginBottom: 16
    },
    buttonText: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.primary,
        textAlign: 'center',
        lineHeight: 24,
        marginRight: 8
    },
})

export default ApplicationResumeScreen
