// React
import React, { useState, createRef } from 'react'

// React Native
import { Alert, StyleSheet, View } from 'react-native'

// Libs
import { Signature } from 'expo-pixi'
import { readAsStringAsync } from 'expo-file-system'
import { fromByteArray } from 'base64-js'

// Constants
import Colors from '../../constants/Colors'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import TopRightButton from '../../components/UI/TopRightButton'

const ProfileSignatureScreen = ({ navigation, sketch = createRef() }) => {
    const [file, setFile] = useState(null)

    const stringToUint8Array = str => {
        const length = str.length;
        const array = new Uint8Array(new ArrayBuffer(length));

        return array.forEach(item => array[item] = str.charCodeAt(item));
    }
    
    const fileToBase64 = async uri => {
        try {
          const content = await readAsStringAsync(uri);
          return fromByteArray(stringToUint8Array(content));
        } catch (e) {
          console.error('fileToBase64()', e.message);
        }
    }

    const handleSaveSignature = () => {
        if (!file) {
            Alert.alert(
                '¡Ha ocurrido un error!',
                'Parece que no has firmado correctamente',
                [{ text: 'Okay' }]
            )
            return
        }

        console.log(file);
        console.log('Has firmado correctamente');
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
                <Signature
                    ref={ref => (sketch = ref)}
                    strokeColor={0x000000}
                    style={{ flex: 1 }}
                    onChange={async () => {
                        const { uri } = await sketch.takeSnapshotAsync({
                            format: 'png',
                        });
                        try {
                            setFile(await readAsStringAsync(
                                uri, { encoding: 'base64' }
                            ))
                        } catch (e) {
                            console.error(e.message);
                        }
                    }}
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
