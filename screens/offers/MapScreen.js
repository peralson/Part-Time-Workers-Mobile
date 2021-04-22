// React
import React from 'react'

// React Native
import { View } from 'react-native'

// Maps
import MapView, { Marker } from 'react-native-maps'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'
import BackButton from '../../components/UI/BackButton'

const MapScreen = ({ navigation, route }) => (
    <Screen>
        <HomeWrapper
            leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
            rightComponent={<HeaderTitle title={route.params.address} />}
        />
        <View style={{ flex: 1, alignItems:'center' }}>
            <MapView style={{ height: '100%', width: '100%' }} >
                <Marker 
                    title="Ubicación" 
                    coordinate={{
                        latitude: route.params.lat,
                        longitude: route.params.lng
                    }}
                />
            </MapView>
        </View>
    </Screen>
)

export default MapScreen