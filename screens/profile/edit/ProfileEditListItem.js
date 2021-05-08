// React
import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// React Native
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';


// Redux
import { useSelector, useDispatch } from 'react-redux';

// Constants
import Colors from '../../../constants/Colors';
import Size from '../../../constants/FontSize';
import Family from '../../../constants/FontFamily';

// Components
import Screen from '../../../components/UI/Screen';
import HomeWrapper from '../../../components/UI/HomeWrapper';
import BackButton from '../../../components/UI/BackButton';
import EmptyList from '../../../components/works/EmptyList';
import IsLoadingMini from '../../../components/UI/IsLoadingMini';
import noList from '../../../assets/sin_posiciones.png';
import ListItem from '../../../components/profile/ListItem';
import OptionListInput from '../../../components/form/OptionListInput';

export const ProfileEditListItem = ({ navigation, route }) => {
  const [userListsLoading, setUserListsLoading] = useState(true);
  const userLists = useSelector((state) => state.profile.userLists);

  const { title, onChange, options, placeholder, values } = route.params;

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title={title}
      />
      <View style={styles.optionContainer}>
        <OptionListInput
          placeholder={placeholder}
          onChange={onChange}
          options={options}
          values={values}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, 
    paddingVertical: 8,
  },
  optionContainer: {
    width: '100%',
    height: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: Colors.accent,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: Size.medium,
    fontFamily: Family.bold,
    color: Colors.white,
    lineHeight: 24,
  },
});

export default ProfileEditListItem;
