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
import LinkItem from "../../components/profile/LinkItem";
import ProfileItem from "../../components/profile/ProfileItem";
import Family from '../../constants/FontFamily';
import Divider from "../../components/UI/Divider";

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;

  console.log(profile);
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title="Mi información" />}
      />
      <ScrollView style={styles.container}>
        <ProfileItem title="Nombre" content={profile.name} />
        <ProfileItem title="Imagen Personal" content={profile.image} />
        <ProfileItem
          title="Imagen Profesional"
          content={profile.professionalImage}
        />
        <ProfileItem title="Biografía" content={profile.description} />
        <ProfileItem title="Dirección" content={profile.address} />
        <ProfileItem title="Número de teléfono" content={profile.phoneNumber} />
        <ProfileItem title="Email" content={profile.email} />
        <ProfileItem title="Fecha de Nacimiento" content={profile.birthday} />
        <Divider style={{marginTop: 10}}/>
        <LinkItem
          title="Información privada"
          icon="arrow-forward"
          style={{
            color: Colors.black,
            fontSize: 17,
            fontFamily: Family.bold,
          }}
          onSelect={() =>
            navigation.navigate("ProfileStack", {
              screen: "ProfilePrivateDetails",
            })
          }
        />
        <LinkItem
          title="Información de conducción"
          icon="arrow-forward"
          style={{
            color: Colors.black,
            fontSize: 17,
            fontFamily: Family.bold,
          }}
          onSelect={() =>
            navigation.navigate("ProfileStack", {
              screen: "ProfilePrivateDetails",
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
});

export default ProfileDetailsScreen;
