// React
import React from 'react'

// Components
import Screen from '../../../components/UI/Screen';
import HomeWrapper from '../../../components/UI/HomeWrapper';
import BackButton from '../../../components/UI/BackButton';
import OptionListInput from '../../../components/form/OptionListInput';

export const ProfileEditListItem = ({ navigation, route }) => {
  const {
    title,
    onChange,
    options,
    placeholder,
    values
  } = route.params;

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title={title}
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

export default ProfileEditListItem;
