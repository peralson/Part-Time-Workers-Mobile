// React
import React, { useState } from 'react'

// React Native
import { View, StyleSheet, Alert } from 'react-native'

// Costants
import Colors from '../../../constants/Colors'

// MapsInput
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import firebaseConfig from '../../../env'

// Redux
import { useDispatch } from 'react-redux'

// Components
import Label from 'Label'


const DirectionScreen = (props) => {
    const apiKey = firebaseConfig.apiKey

    const onSubmitHandler = async () => {
        if (!address) {
            Alert.alert(
                'La dirección es obligatoria',
                'Imagina que te llaman para trabajar y no te dicen a dónde ir...',
                [{ text: 'Okay' }]
            )
            return
        }

        const geocoding = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=
            ${address}&key=${apiKey}`
        )

        const geoData = await geocoding.json()

        try {
            const coords = geoData.results[0].geometry.location

            if (editParams) {
                navigation.navigate(
                    'ProjectStack',
                    {
                        screen: 'EditProject', 
                        params: {
                            id: editParams.id,
                            address: address,
                            lat: coords.lat,
                            lng: coords.lng
                        }
                    }
                )
            } else {
                await dispatch(projectActions.addressAdd(address, coords.lat, coords.lng))
                navigation.navigate(
                    'Date',
                    {
                        projectName: projectName
                    }
                )
            }

        } catch (error) {
            Alert.alert(
                'La dirección es inválida',
                'Prueba a introducir otra o sé más especifico introduciendo la calle y el número',
                [{ text: 'Okay' }]
            )
        }
    }

    return (
        <View style={styles.screen}>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                rightComponent={(
                    <NextButton 
                        submit={onSubmitHandler}
                        icon={editParams ? "checkmark-sharp" : "arrow-forward"}
                        cta={editParams ? "Editar" : "Siguiente"}
                    />
                )}
            />
            <View style={styles.wrapper}>
                <Label>
                    Dirección
                </Label>
                <LabelInfo>
                    Indica en qué lugar se va a realizar el proyecto {editParams ? editParams.name : projectName}
                </LabelInfo>
            </View>
            <GooglePlacesAutocomplete
                placeholder={editParams ? editParams.address : 'Eg. Puerta de Alcalá'}
                styles={mapStyles}
                onPress={data => {
                    console.log(data)
                    setAddress(data.description)
                }}
                query={{
                    key: apiKey,
                    language: 'es',
                    components: 'country:es',
                }}
            />
        </View>
    )
}

const mapStyles = {
    container: {
        paddingHorizontal: 32,
        marginTop: 8
    },
    textInput: {
        borderRadius: 4,
        height: 55,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 14,
        fontFamily: 'gotham-book',
        borderColor: Colors.grey,
        borderWidth: 1,
        color: Colors.black
    },
    poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: Colors.grey,
        borderTopWidth: 0.5,
    },
    row: {
        padding: 8,
        height: 44,
        flexDirection: 'row',
    },
    separator: {
        height: 0.5,
        backgroundColor: Colors.grey,
    },
    loader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
    },
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white
    },
    wrapper: {
        paddingHorizontal: 32,
        paddingTop: 16
    }
})

export default DirectionScreen
