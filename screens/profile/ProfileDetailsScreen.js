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

const ProfileItem = (props) => {
  return (
    <View style={styles.ProfileItem}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.card}>
        <Text style={styles.text}>{props.content}</Text>
      </View>
    </View>
  );
};

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
  ProfileItem: {
    width: "100%",
    marginVertical: 15
  },
  title: {
    fontSize: 17,
    marginBottom: 15,
    fontFamily: Family.bold,
  },
  card: {
    borderRadius: 10,
    elevation: 1,
    shadowColor: Colors.grey,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  text: {
    color: Colors.darkGrey,
    fontSize: 15
  },
});

export default ProfileDetailsScreen;
