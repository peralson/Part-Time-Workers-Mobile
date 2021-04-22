// React
import React from 'react';

// React Native
import { Image, Text, StyleSheet, View } from 'react-native';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

const ImagePicker = ({ title, image }) => (
  <View style={styles.component}>
    <View style={styles.profile}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  component: {
    paddingTop: Platform.OS === 'android' ? 16 : 72,
    marginBottom: 8,
    backgroundColor: Colors.white,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 48,
    width: 48,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  profileMainText: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontFamily: Family.bold,
    fontSize: Size.big,
    color: Colors.black,
  },
});

export default ImagePicker;
