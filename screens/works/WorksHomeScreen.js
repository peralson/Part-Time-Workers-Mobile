// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'
import Label from '../../components/UI/Label'

const WorksHomeScreen = ({ navigation }) => {
    return (
        <Screen>
            <HomeWrapper
                leftComponent={<HeaderTitle title="Trabajos" />}
                description="Aquí verás los trabajos que tengas pendientes de realizar y tus aplicaciones activas."
            />
            <View style={styles.content}>
                <Label>Pendientes de realizar</Label>
                <View style={{ height: 240 }}></View>
                <Label>Aplicaciones activas</Label>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 24,
        marginHorizontal: 24
    }
})

export default WorksHomeScreen