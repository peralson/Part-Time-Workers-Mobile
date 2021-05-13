// React
import React, { useState, useEffect } from 'react';

// React Native
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

// Expo
import { Ionicons } from '@expo/vector-icons';

// Image picker
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Libs
import loadImage from '../../libs/loadImage';

const ImagePickerComponent = ({ title, placeholder, onChange }) => {
  const [image, setImage] = useState(placeholder);
  console.log(placeholder)
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Se necesitan permisos para realizar esta acción');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    let options = { encoding: FileSystem.EncodingType.Base64 };
    let base64 = await FileSystem.readAsStringAsync(result.uri, options);

    if (!result.cancelled) {
      setImage(base64);
      onChange(base64);
    }
  };

  return (
    <View style={styles.profile}>
      <View style={styles.left}>
        {image ? (
          <Image style={styles.image} source={loadImage(image)} />
        ) : (
          <Ionicons
            name='cloud-upload-outline'
            size={19}
            style={{ color: Colors.primary }}
          />
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
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
