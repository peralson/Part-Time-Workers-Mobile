// React
import React from 'react';

// React Native
import { Image, Text, StyleSheet, View } from 'react-native';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';
import noPicture from '../../assets/profile-no-picture.png';

const ProfileInfo = ({ title, image, percentage }) => (
  <View style={styles.component}>
    <View style={styles.profile}>
      <View style={styles.profileMainText}>
        <Text style={styles.name}>{title}</Text>
        {percentage && (
          <Text
            style={
              percentage === 100
                ? { ...styles.profileState, ...{ color: 'green' } }
                : styles.profileState
            }
          >
            {percentage === 100
              ? 'Perfil completo'
              : `Perfil incompleto (${percentage}%)`}
          </Text>
        )}
      </View>
      {/* <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image, width: 48, height: 48 }} />
        ) : (
          <Image source={noPicture} style={{ width: 40, height: 40 }} />
        )}
      </View> */}
    </View>
  </View>
);

const styles = StyleSheet.create({
	component: {
		paddingTop: Platform.OS === 'android' ? 48 : 72,
		backgroundColor: Colors.darkPrimary,
		borderBottomColor: Colors.grey,
		borderBottomWidth: 1,
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingBottom: 16,
	},
	imageContainer: {
		borderRadius: 4,
		overflow: 'hidden',
	},
	profileMainText: {
		flex: 1,
		// marginRight: 16,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-end'
	},
	name: {
		fontFamily: Family.bold,
		fontSize: Size.big,
		color: Colors.white,
	},
	profileState: {
		fontFamily: Family.normal,
		fontSize: Size.tiny,
		color: 'red',
		marginTop: 12,
		lineHeight: 14
	},
	itemContainer: {
		paddingHorizontal: 8,
		paddingVertical: 16,
		backgroundColor: Colors.lightPrimary,
		borderRadius: 8,
	},
	separator: {
		height: 16,
	}
})

export default ProfileInfo
