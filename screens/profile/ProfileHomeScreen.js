// React
import React from "react";

// React Native
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Share,
  Linking,
  Alert,
} from "react-native";

// Constants
import Colors from "../../constants/Colors";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
// import * as authActions from '../../store/actions/auth'

// Components
import ProfileInfo from "../../components/profile/ProfileInfo";
import SectionContainer from "../../components/UI/SectionContainer";
import Label from "../../components/UI/Label";
import LabelInfo from "../../components/UI/LabelInfo";
import LinkItem from "../../components/profile/LinkItem";

const ProfileHomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const profile = {
    name: "Tito Martin Roch",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQE4UkXJA_04OQ/profile-displayphoto-shrink_800_800/0/1519913090300?e=1624492800&v=beta&t=3rO6IYYAAOYbLe-1ZBJT6QJ2NiA8P1uuxkv9uk4AHCU",
    description:
      "Hago fotos con cámaras muy caras y cuando tengo tiempo libre salgo a pescar",
    address: "Avenida de Barcelona",
    email: "tito@tito.com",
    phoneNumber: "984123432",
    birthday: "12-3-1996",
    professionalImage:
      "https://www.altonivel.com.mx/wp-content/uploads/2018/02/presentacion-de-negocios-profesional.jpg",
    nationality: "Spain",
    dniNumber: "35289473R",
    dniImage: "dniImage",
    dniExpiryDate: "20-4-22",
    gender: "male",
    ssNumber: "834759384753489",
    bankAccount: "234829347982349",
    carLicense: "car license image",
    hasCar: "yes",
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <SectionContainer>
        <ProfileInfo title={profile.name} image={profile.image} containerStyle={{marginBottom: 24}} />
        <LinkItem
          title="Mi información"
          icon="arrow-forward"
          onSelect={() =>
            navigation.navigate("ProfileStack", {
              screen: "ProfileDetails",
              params: { profile: profile },
            })
          }
        />
      </SectionContainer>
      <SectionContainer>
        <Label>Gestión laboral</Label>
        <LabelInfo>
          Visualiza toda la información laboral referente a tus contrataciones.
        </LabelInfo>
        <LinkItem
          title="Contratos"
          icon="arrow-forward"
          onSelect={() =>
            navigation.navigate("ProfileStack", { screen: "ProfileContracts" })
          }
        />
        <LinkItem
          title="Nóminas"
          icon="arrow-forward"
          onSelect={() =>
            navigation.navigate("ProfileStack", { screen: "ProfilePayrolls" })
          }
        />
      </SectionContainer>
      <SectionContainer>
        <Label>Ayuda</Label>
        <LabelInfo>
          Contacta con nosotros directamente y te resolveremos cualquier duda.
        </LabelInfo>
        <LinkItem
          title="Whatsapp"
          icon="call-outline"
          onSelect={() => {
            Linking.openURL(
              `whatsapp://send?text=Hola Pablo, tengo una duda sobre Part Time Workers&phone=34607570778`
            ).catch(() => Alert("Debes tener Whatsapp instalado"));
          }}
        />
        <LinkItem
          title="Correo electrónico"
          icon="mail-outline"
          onSelect={() => {
            Linking.openURL(
              `mailto: pabloperaltapalacios@gmail.com`
            ).catch(() => Alert("Debes tener un correo instalado"));
          }}
        />
      </SectionContainer>
      <SectionContainer>
        <Label>Configuración</Label>
        <LinkItem
          title="Cerrar sesión"
          icon="log-out"
          onSelect={() => {
            Alert.alert("¿Quieres cerrar la sesión?", "", [
              { text: "No" },
              { text: "Cerrar", style: "destructive", onPress: () => {} },
            ]);
          }}
        />
      </SectionContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
});

export default ProfileHomeScreen;
