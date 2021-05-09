// React
import React, { useState } from 'react'

// React Native
import {
  StyleSheet,
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
import TopRightButton from '../../../components/UI/TopRightButton';
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
        rightComponent={<TopRightButton title='Guardar' color={Colors.primary} onSelect={() => navigation.goBack()} />}
      />
      <OptionListInput
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        values={values}
      />
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
