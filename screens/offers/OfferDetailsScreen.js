// React
import React, { useState } from 'react'

// React Native
import { ScrollView, StyleSheet, Text, View } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Constants
import Colors from '../../constants/Colors'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import ApplyButton from '../../components/offers/ApplyButton'

const OfferDetailScreen = ({ navigation, route }) => {
    const [height, setHeight] = useState(0)
    
    const offerId = route.params.offerId
    const offerData = useSelector(state => state.offers.openOffers.find(offer => offer.id === offerId))

    const offerApplicationHandler = () => navigation.navigate('ApplicationsStack', { screen: 'ApplicationResume', params: { offerId: offerId } })

    return (
        <Screen>
            <HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} />} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: height }}>
                
            </ScrollView>
            <View onLayout={e => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
                <ApplyButton qty={offerData.qty} alreadyAssigned={offerData.alreadyAssigned} onSelect={offerApplicationHandler} />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    bottomAbsolute: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.white,
        paddingBottom: 32,
        paddingTop: 8,
        paddingHorizontal: 24,
        borderTopColor: Colors.grey,
        borderTopWidth: 0.6
    }
})

export default OfferDetailScreen