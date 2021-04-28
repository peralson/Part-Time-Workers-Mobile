// React
import React from "react"

// React Native
import { StyleSheet, ScrollView } from "react-native"

// Components
import Screen from "../../components/UI/Screen"
import HomeWrapper from "../../components/UI/HomeWrapper"
import BackButton from "../../components/UI/BackButton"

const ProfilePastJobDetails = ({ navigation, route }) => {
	const { jobData } = route.params

	console.log(jobData);

	return (
		<Screen>
			<HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} />} />
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                
			</ScrollView>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
        padding: 24,
        paddingTop: 16,
    }
})

export default ProfilePastJobDetails