// React
import React from 'react';

// React Native
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Constants
import FontSize from '../../constants/FontSize';
import FontFamily from '../../constants/FontFamily';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import HeaderTitle from '../../components/UI/HeaderTitle';
import Colors from '../../constants/Colors';
import LinkItem from '../../components/profile/LinkItem';
import ProfileItem from '../../components/profile/ProfileItem';
import ProfileInfo from '../../components/profile/ProfileInfo';
import Family from '../../constants/FontFamily';
import Divider from '../../components/UI/Divider';
import ImagePicker from '../../components/UI/ImagePicker';

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;

  console.log(profile);
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title='Mi información' />}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ProfileItem title='Nombre' content={profile.name} />
        <ProfileItem title='Biografía' content={profile.description} />
        <ProfileItem title='Email' content={profile.email} />
        <ProfileItem title='Número de teléfono' content={profile.phoneNumber} />
        <ProfileItem title='Dirección' content={profile.address} />
        <ProfileItem title='Fecha de Nacimiento' content={profile.birthday} />
        <ImagePicker title="Imagen personal"image={profile.image} />
        <ImagePicker title="Imagen profesional" image={profile.professionalImage} />
        <Divider />
        <LinkItem
          title='Información legal'
          icon='arrow-forward'
          style={{
            color: Colors.black,
            fontSize: 17,
            fontFamily: Family.bold,
          }}
          onSelect={() =>
            navigation.navigate('ProfileStack', {
              screen: 'ProfilePrivateDetails',
              params: { profile: profile },
            })
          }
        />
        <LinkItem
          title='Información de transporte'
          icon='arrow-forward'
          style={{
            color: Colors.black,
            fontSize: 17,
            fontFamily: Family.bold,
            marginBottom: 10,
          }}
          onSelect={() =>
            navigation.navigate('ProfileStack', {
              screen: 'ProfileDrivingDetails',
              params: { profile: profile },
            })
          }
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  imageRow: {
    flexDirection: 'row',
  },
});

export default ProfileDetailsScreen;
