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

const styles = StyleSheet.create({
  ProfileItem: {
    width: "100%",
    marginVertical: 15,
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
    fontSize: 15,
  },
})

export default ProfileItem