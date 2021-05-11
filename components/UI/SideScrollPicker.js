// React
import React from 'react'

// React Native
import { ScrollView, StyleSheet } from 'react-native'

const SideScrollPicker = ({ children }) => (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.contentContainer}>
        {children}
    </ScrollView>
)

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 16
    },
})


export default SideScrollPicker