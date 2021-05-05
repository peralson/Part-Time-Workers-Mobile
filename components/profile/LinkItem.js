// React
import React from "react"

// React Native
import { Text, StyleSheet, TouchableOpacity } from "react-native"

// Icons
import { Ionicons, Feather } from "@expo/vector-icons"

// Constants
import Colors from "../../constants/Colors"
import Family from "../../constants/FontFamily"
import Size from "../../constants/FontSize"

const LinkItem = ({ title, onSelect, icon, bottom }) => {
  let Icon = Ionicons

  if (icon === "log-out") {
    Icon = Feather
  }

  return (
    <TouchableOpacity style={bottom ? styles.link : styles.linkBorder} activeOpacity={0.8} onPress={onSelect}>
      <Text style={styles.text}>{title}</Text>
      <Icon name={icon} color={Colors.primary} size={14} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  linkBorder: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1
  },
  text: {
    flex: 1,
    fontFamily: Family.normal,
    color: Colors.primary,
    fontSize: Size.small,
    lineHeight: 21
  }
})

export default LinkItem