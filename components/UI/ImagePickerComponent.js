// React
import React, { useState, useEffect } from 'react';

// React Native
import { Image, Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native';

// Image picker
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

const ImagePickerComponent = ({ title, placeholder, onChange }) => {
  const [image, setImage] = useState(placeholder);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    let options = { encoding: FileSystem.EncodingType.Base64 };
  let base64 = await FileSystem.readAsStringAsync(result.uri, options);

    console.log(result);
    console.log('base64: ', base64)

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  

  return (
    <View style={styles.profile}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
          <Text style={styles.cta}>Cambiar imagen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 32,
  },
  left: {
    height: 60,
    width: 60,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 16,
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
    fontSize: Size.medium,
    lineHeight: 24,
    color: Colors.white,
  },
  cta: {
    color: Colors.primary,
    fontFamily: Family.normal,
    fontSize: Size.small,
    lineHeight: 21,
    paddingVertical: 2,
  },
});

export default ImagePickerComponent;
