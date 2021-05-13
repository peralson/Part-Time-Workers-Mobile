// React
import React from 'react'

// React Native
import { StyleSheet, Text, View, Button } from 'react-native'

// Libs
import ExpoPixi from 'expo-pixi'

// Constants
import Colors from '../../constants/Colors'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import TopRightButton from '../../components/UI/TopRightButton'

const ProfileSignatureScreen = ({ navigation }) => {
    const handleSaveSignature = () => {

    }

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title='Firma digital'
                rightComponent={(
                    <TopRightButton
                        title="Guardar"
                        color={Colors.primary}
                        onSelect={handleSaveSignature}
                    />
                )}
            />
            <View style={styles.container}>
                <ExpoPixi.Sketch
                    strokeColor={0xFFFFFF}
                    strokeWidth={8}
                    strokeAlpha={0.9}
                    style={{ flex: 1 }}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginHorizontal: 16,
        borderRadius: 10,
        height: 300,
        backgroundColor: Colors.grey,
    }
})

export default ProfileSignatureScreen
