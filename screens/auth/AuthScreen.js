// React
import React, { useState, useEffect } from 'react'

// React Native
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native'

// Constants
import Colors from '../../constants/Colors'

// Firebase
import firebase from 'firebase'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as authActions from '../../store/actions/auth'
// import * as companyActions from '../../store/actions/company'

// Components
import Screen from '../../components/UI/Screen';
import FormWrapper from '../../components/form/FormWrapper'
import InputContainer from '../../components/form/InputContainer'
import Label from '../../components/form/Label'
import Input from '../../components/form/Input'

const AuthScreen = props => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (error) {
            Alert.alert('Ha habido un error', error, [{ text: 'Okay' }])
        }
    }, [error])

    const handleLogIn = () => {
        setError(null)
        setIsLoading(true)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                if (user.emailVerified) {
                    return firebase.auth().currentUser.getIdTokenResult(true)
                } else {
                    firebase.auth().signOut()
                }
            })
            .then(data => {
                dispatch(authActions.login(data))
            })
            .then(() => {
                setIsLoading(false)
                props.navigation.navigate('App')
            })
            .catch(err => {
                let m = "Intentalo de nuevo"

                if (err.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    m = "No existe ningún usuario con este correo electrónico."
                }

                if (err.message === "The password is invalid or the user does not have a password.") {
                    m = "Parece que la contraseña es incorrecta. Prueba con otra."
                }

                setError(m)
                setIsLoading(false)
            })
    }

    return (
        <Screen>
            <FormWrapper>
                <View style={styles.header}>
                    <Text style={styles.logo}>Labora</Text>
                    <Text style={styles.secodary}>For workers</Text>
                </View>
                <InputContainer>
                    <Label>Correo electrónico</Label>
                    <Input
                        returnKeyType="next"
                        onChange={text => setEmail(text)}
                        value={email}
                        keyboardType="email-address" 
                        required 
                        email
                        autoCapitalize="none"
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Contraseña</Label>
                    <Input
                        returnKeyType="next"
                        onChange={text => setPassword(text)}
                        value={password}
                        required 
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                    />
                </InputContainer>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleLogIn}
                    activeOpacity={0.8}
                >
                    {isLoading ? (
                        <ActivityIndicator size={18} color={Colors.white} />
                    ) : (
                        <Text style={styles.buttonText}>Acceder</Text>
                    )}
                </TouchableOpacity>
            </FormWrapper>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        marginTop: 120,
        marginBottom: 80,
        width: '100%',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'gotham-bold',
        color: Colors.primary,
        fontSize: 40
    },
    secodary: {
        fontFamily: 'gotham-book',
        color: Colors.darkPrimary,
        fontSize: 16,
        paddingLeft: 2
    },
    buttonContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 4,
        alignItems: 'center',
        paddingVertical: 16,
        marginTop: 24
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'gotham-bold',
        color: Colors.white
    },
    div: {
        height: 8
    }
})

export default AuthScreen
