// React
import React from 'react';

// React Native
import { StyleSheet, ScrollView } from 'react-native';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import HeaderTitle from '../../components/UI/HeaderTitle';
import ProfileItem from '../../components/profile/ProfileItem';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ImagePicker from '../../components/UI/ImagePicker';

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title='Mi información' />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ProfileItem title='Nombre' content={profile.name} />
        <ProfileItem title='Biografía' content={profile.description} />
        <ProfileItem title='Email' content={profile.email} />
        <ProfileItem title='Número de teléfono' content={profile.phoneNumber} />
        <ProfileItem title='Dirección' content={profile.address} />
        <ProfileItem title='Fecha de Nacimiento' content={profile.birthday} />
        <ImagePicker title='Imagen personal' image={profile.image} />
        <ImagePicker
          title='Imagen profesional'
          image={profile.professionalImage}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
});

export default ProfileDetailsScreen;
