// React
import React from "react";

// React Native
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Components
import Screen from "../../components/UI/Screen";
import HomeWrapper from "../../components/UI/HomeWrapper";
import BackButton from "../../components/UI/BackButton";
import HeaderTitle from "../../components/UI/HeaderTitle";
import Colors from "../../constants/Colors";
import Family from "../../constants/FontFamily";
import ProfileItem from "../../components/profile/ProfileItem";



const ProfilePrivateDetails = ({ navigation, route }) => {
  const { profile } = route.params;

  console.log(profile);
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title="Información legal" />}
      />
      <ScrollView style={styles.container}>
      <ProfileItem title="Nacionalidad" content={profile.nationality} />
      <ProfileItem title="Imagen de DNI" content={profile.dniImage} />
      <ProfileItem title="Número de DNI" content={profile.dniNumber} />
      <ProfileItem title="Fecha de caducidad del DNI" content={profile.dniExpiryDate} />
      <ProfileItem title="Género" content={profile.gender} />
      <ProfileItem title="Nº Seguridad Social" content={profile.ssNumber} />
      <ProfileItem title="Cuenta bancaria" content={profile.bankAccount} />
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
});

export default ProfilePrivateDetails;
