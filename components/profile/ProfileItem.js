// React
import React from "react"

// React Native
import {
  StyleSheet,
  View
} from "react-native"

// Components
import Input from "../form/Input"
import Label from '../UI/Label'

const ProfileItem = ({ title, content }) => (
	<View style={content ? styles.profileItem : styles.noContent}>
		<Label>{title}</Label>
		{content && <Input placeholder={content} />}
	</View>
)

const styles = StyleSheet.create({
  profileItem: {
    flex: 1,
    marginVertical: 16,
    paddingHorizontal: 16
  },
  noContent: {
    paddingHorizontal: 16
  }
})

export default ProfileItem
