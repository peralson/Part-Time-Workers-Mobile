// React
import React from 'react'

// Firebase
import firebase from 'firebase'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as authActions from '../../store/actions/auth'

// Components
import Screen from '../../components/UI/Screen'

const AuthScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleLogIn = () => {
        firebase.auth().signInWithEmailAndPassword('micromartino@gmail.com', '123456')
            .then(({ user }) => {
                if (user.emailVerified) {
                    return firebase.auth().currentUser.getIdTokenResult(true)
                } else {
                    firebase.auth().signOut()
                }
            })
            .then(data => {
                dispatch(authActions.login(data))
                navigation.navigate('App')
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleLogIn()

    return <Screen></Screen>
}

export default AuthScreen