// React
import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// React Native
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';

//Actions
import * as applicationsActions from '../../store/actions/applications';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import HeaderTitle from '../../components/UI/HeaderTitle';
import Label from '../../components/UI/Label';
import SideScrollPicker from '../../components/UI/SideScrollPicker';
import OfferItem from '../../components/offers/OfferItem';
import EmptyList from '../../components/works/EmptyList';

const WorksHomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const jobs = [];
  const applications = useSelector(
    (state) => state.applications.userApplications
  );

  //Obtenemos los datos de las ofertas a partir de las aplicaciones
  const getOffers = (applications) => {
    let offers = [];
    applications.map((application) =>
      offers.push(
        useSelector((state) =>
          state.offers.openOffers.find(
            (offer) => offer.id === application.offerId
          )
        )
      )
    );
    return offers;
  };

  const offerApplications = getOffers(applications);

  const dispatch = useDispatch();

  const loadApplications = async () => {
    try {
      await dispatch(applicationsActions.fetchApplications());
      console.log('heuu');
    } catch (e) {
      console.log('error', e.message);
    }
  };

  // Aseguramos que la pantalla repita el fetch cada vez que entre
  useFocusEffect(
    useCallback(() => {
      loadApplications();
    }, [dispatch, setLoading])
  );

  // Cargamos los proyectos de una manera visible al entrar por primera vez
  useEffect(() => {
    setLoading(true);
    loadApplications().then(() => setLoading(false));
  }, []);

  const offerDetailHandler = (offerId) => {
    navigation.navigate('OffersStack', {
      screen: 'OfferDetails',
      params: {
        offerId: offerId,
        application: true,
      },
    });
  };

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<HeaderTitle title='Trabajos' />}
        description='Aquí verás los trabajos que tengas pendientes de realizar y tus aplicaciones activas.'
      />
      <ScrollView style={styles.content}>
        <View style={{ paddingHorizontal: 24 }}>
          <Label>Próximos trabajos</Label>
        </View>
        {jobs.length === 0 ? (
          <EmptyList
            quote='No tienes próximos trabajos'
            image={require('../../assets/sin_proyectos.png')}
          />
        ) : (
          <SideScrollPicker>
            <Text>Si hay curros</Text>
          </SideScrollPicker>
        )}
        <View style={{ paddingHorizontal: 24 }}>
          <Label>Ofertas a las que he aplicado</Label>
          {applications.length === 0 ? (
            <EmptyList
              quote='No tienes aplicaciones... ¡Aplícate!'
              image={require('../../assets/sin_posiciones.png')}
            />
          ) : (
            offerApplications.map((application) => (
              <OfferItem
                key={application.id}
                {...application}
                onSelect={() => offerDetailHandler(application.id)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 16,
  },
});

export default WorksHomeScreen;
