// React
import React, { useState } from 'react'

// React Native
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import * as applicationActions from '../../store/actions/applications'

// Constants
import Colors from '../../constants/Colors'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import ApplyButton from '../../components/offers/ApplyButton'

const ApplicationResumeScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(false)
    const [height, setHeight] = useState(0)

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
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    paddingTop: 16,
                    marginBottom: height,
                    paddingHorizontal: 24,
                }}
            >
                <Text>{offerData.category}</Text>
            </ScrollView>
            <View onLayout={(e) => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
                <ApplyButton onSelect={offerApplicationHandler}>
                    {isLoading ? 'Aplicando...' : 'Aplicar'}
                </ApplyButton>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    bottomAbsolute: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.darkPrimary,
        paddingBottom: Platform.OS === "ios" ? 32 : 8,
        paddingTop: 8,
        paddingHorizontal: 16,
        borderTopColor: Colors.grey,
        borderTopWidth: 1,
    }
})

export default ApplicationResumeScreen
