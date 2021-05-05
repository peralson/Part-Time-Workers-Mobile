// React
import React from "react"

// React Native
import { Image, StyleSheet, View } from "react-native"

// Components
import Label from '../UI/Label'
import LabelInfo from '../UI/LabelInfo'

const ProfileSection = ({ title, image, description, children }) => (
    <View style={styles.container}>
		<View style={styles.top}>
            {image && <Image source={image} style={styles.icon} />}
            {title && <Label>{title}</Label>}
		</View>
        <View style={styles.bottom}>
            <View style={styles.icon}></View>
            <View style={styles.content}>
                {description && <LabelInfo>{description}</LabelInfo>}
                {children}
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
	top: {
        flexDirection: 'row',
        alignItems: 'center',
	},
    icon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    bottom: {
        flexDirection: 'row'
    },
    content: {
        flex: 1
    }
})

export default ProfileSection