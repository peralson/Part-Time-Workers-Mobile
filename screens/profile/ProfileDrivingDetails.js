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



const ProfileDrivingDetails = ({ navigation, route }) => {
  const { profile } = route.params;

  console.log(profile);
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title="Información de transporte" />}
      />
      <ScrollView style={styles.container}>
      <ProfileItem title="Tengo coche" content={profile.hasCar} />
      <ProfileItem title="Carnet de conducir" content={profile.carLicense} />
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

export default ProfileDrivingDetails;
