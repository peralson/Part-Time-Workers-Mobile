// React
import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// React Native
import { StyleSheet, FlatList } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import * as offersActions from '../../store/actions/offers';
import * as applicationActions from '../../store/actions/applications';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import HeaderTitle from '../../components/UI/HeaderTitle';
import IsLoading from '../../components/UI/IsLoading';
import NoOffers from '../../components/offers/NoOffers';
import OfferItem from '../../components/offers/OfferItem';

const OffersHomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const offers = useSelector((state) => state.offers.openOffers);

  const dispatch = useDispatch();

  const loadOffers = async () => {
    try {
      await dispatch(offersActions.fetchOpenOffers());
    } catch (e) {
      console.log('error', e.message);
    }
  };

  // Aseguramos que la pantalla repita el fetch cada vez que entre
  useFocusEffect(
    useCallback(() => {
      loadOffers();
    }, [dispatch, setLoading])
  );

  // Cargamos los proyectos de una manera visible al entrar por primera vez
  useEffect(() => {
    setLoading(true);
    loadOffers().then(() => setLoading(false));
  }, []);

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<HeaderTitle title='Ofertas' />}
        description='Aquí llegarán las ofertas de trabajo de las empresas que busquen contratarte.'
      />
      {isLoading ? (
        <IsLoading />
      ) : (
        <>
          {offers.length === 0 ? (
            <NoOffers />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(item) => item.id}
              data={offers}
              renderItem={({ item }) => (
                <OfferItem
                  {...item}
                  onSelect={() => navigation.navigate('OffersStack', { screen: 'OfferDetails', params: { offerId: item.id } })}
                />
              )}
            />
          )}
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 96,
  }
})

export default OffersHomeScreen;
