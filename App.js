// React
import React, { useState } from 'react'

// Expo
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

// Navigator
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './navigation/AuthNavigation'

// Firebase Init
import firebaseConfig from './env'
import firebase from 'firebase/app'

// Getting Firebase ready to go!
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app() // if already initialized, use that one
}

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

// Reducers
import authReducer from './store/reducers/auth'
import offersReducer from './store/reducers/offers'
import applicationsReducer from './store/reducers/applications'
import jobsReducer from './store/reducers/jobs'
import profileReducer from './store/reducers/profile'

// Introducimos todos nuestros reducers en un global
const rootReducer = combineReducers({
    auth: authReducer,
    offers: offersReducer,
    applications: applicationsReducer,
    jobs: jobsReducer,
    profile: profileReducer,
})

// y agregamos nuestro reducer global al store de Redux
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
    
const fetchFonts = async () => {
    return await Font.loadAsync({
        'gotham-book': require('./assets/fonts/Gotham-Book.otf'),
        'gotham-bold': require('./assets/fonts/Gotham-Bold.otf')
    })
}

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={err => console.log(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <StatusBar style="light" />
            <NavigationContainer>
                <AuthNavigation />
            </NavigationContainer>
        </Provider>
    )
}

export default App