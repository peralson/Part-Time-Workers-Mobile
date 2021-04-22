// React
import React from "react"

// React Native
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from "react-native"

// Constants
import Colors from "../../constants/Colors"
import Family from "../../constants/FontFamily"
import Size from "../../constants/FontSize"

const Tab = ({ isSelected, setNewSelected, name }) => {
  const selectedWrapper = isSelected ? styles.selectedWrapper : {}
  const selectedText = isSelected ? styles.selectedTabText : {}

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={setNewSelected}
        activeOpacity={0.4}
        style={selectedWrapper}
      >
        <Text style={{ ...styles.tabText, ...selectedText }}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 2,
    paddingBottom: Platform.OS === "android" ? 2 : 24,
  },
  selectedWrapper: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    borderRadius: 4,
  },
  tabText: {
    textAlign: "center",
    fontFamily: Family.normal,
    fontSize: Size.tiny,
    color: Colors.white,
    lineHeight: 21,
    paddingVertical: 16,
  },
  selectedTabText: {
    fontFamily: Family.bold,
  }
})

export default Tab
