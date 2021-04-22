// React
import React from "react"

// React Native
import {
  Text,
  StyleSheet,
  View
} from "react-native"

// Components
import Input from "../form/Input"
import Label from '../UI/Label'

const ProfileItem = ({ title, content }) => (
	<View style={styles.profileItem}>
		<Label>{title}</Label>
		<Input placeholder={content} />
	</View>
)

const styles = StyleSheet.create({
  profileItem: {
    flex: 1,
    marginVertical: 16,
  },
})

export default ProfileItem
