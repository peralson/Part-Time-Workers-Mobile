// React
import React, { useState } from 'react'

// React Native
import {
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'
import HomeDesc from '../../components/UI/HomeDesc'
import TopRightButton from '../../components/UI/TopRightButton'
import Card from '../../components/UI/Card'
import IsLoading from '../../components/UI/IsLoading'
import NoOffers from '../../components/offers/NoOffers'

const OffersHomeScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false)
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: 'Hola'
        },
        {
            id: 2,
            title: 'Que'
        },
        {
            id: 3,
            title: 'Tal'
        },
    ])

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<HeaderTitle title="Ofertas" />}
                rightComponent={<TopRightButton title="Filtros" icon="filter" onSelect={() => console.log(offers.length === 0)} />}
            />
            <HomeDesc>
                Aquí llegarán las ofertas de trabajo de las empresas que busquen contratarte.
            </HomeDesc>
            {isLoading ? <IsLoading /> : (
                <>
                    {offers.length === 0 ? <NoOffers /> : (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}
                            keyExtractor={item => item.id}
                            data={offers}
                            renderItem={({ item }) => (
                                <Card>
                                    <Text>{item.title}</Text>
                                </Card>
                            )}
                        />
                    )}
                </>
            )}
        </Screen>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 16,
        paddingHorizontal: 24,
        paddingBottom: 80
    }
})

export default OffersHomeScreen