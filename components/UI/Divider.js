// React
import React from 'react'

// React Native
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'

const Divider = ({style}) => {
  console.log(style);
  return (
    <View style={{...styles.divider, ...style}} />
  );
};

const styles = StyleSheet.create({
  divider:{
    width: "100%",
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1
  }
})

export default Divider;