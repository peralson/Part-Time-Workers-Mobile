// React
import React from "react";

// React Native
import { StyleSheet, View } from "react-native"

// Constants
import Colors from '../../constants/Colors'

const Card = ({ noMargin, noPadding, children }) => (
  <View
    style={
      noMargin
        ? noPadding
          ? { ...styles.shadow, ...{ marginBottom: 0, padding: 0 } }
          : { ...styles.shadow, ...{ marginBottom: 0 } }
        : noPadding
        ? { ...styles.shadow, ...{ padding: 0 } }
        : styles.shadow
    }
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  shadow: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginBottom: 8,
  },
});

export default Card;
