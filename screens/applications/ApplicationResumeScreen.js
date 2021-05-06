// React
import React, { useState } from 'react'

// React Native
import { ScrollView, Text } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import * as applicationActions from '../../store/actions/applications'

// Libs
import { Formik } from 'formik'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import ApplyButton from '../../components/offers/ApplyButton'
import BottomAbsConatiner from '../../components/UI/BottomAbsConatiner'

const ApplicationResumeScreen = ({ navigation, route }) => {
    const [isSigned, setSigned] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const { offerId } = route.params
    const offerData = useSelector(state => state.offers.openOffers.find((offer) => offer.id === offerId))

    const dispatch = useDispatch()

    const offerApplicationHandler = async () => {
        setLoading(true)
        await dispatch(applicationActions.sendApplication(offerId))
        navigation.navigate('ApplicationSuccess')
        setLoading(false)
    }

    return (
        <Screen>
            <HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 16, marginBottom: 100, paddingHorizontal: 24 }}>
                <Formik
                    initialValues={{ sign: isSigned }}
                >
                    {(props) => {
                        return (
                            <Text>Hola</Text>
                        )
                    }}
                </Formik>
            </ScrollView>
            <BottomAbsConatiner>
                <ApplyButton onSelect={offerApplicationHandler}>
                    {isLoading ? 'Aplicando...' : 'Aplicar'}
                </ApplyButton>
            </BottomAbsConatiner>
        </Screen>
    )
}

export default ApplicationResumeScreen
