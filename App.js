// React
import React, { useState } from 'react'

// React Native
import { View } from 'react-native'

// Expo
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

// Navigator
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './navigation/MainNavigation'

// Firebase Init
import firebaseConfig from './env'
import firebase from 'firebase/app'

// Getting Firebase ready to go!
firebase.initializeApp(firebaseConfig)

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

// Reducers
import authReducer from './store/reducers/auth'

// Introducimos todos nuestros reducers en un global
const rootReducer = combineReducers({
    auth: authReducer
})

// y agregamos nuestro reducer global al store de Redux
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
    
const fetchFonts = async () => {
  return await Font.loadAsync({
      'gotham-book': require('./assets/fonts/Gotham-Book.otf'),
      'gotham-bold': require('./assets/fonts/Gotham-Bold.otf'),
  })
}

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <StatusBar style="dark" />
                <NavigationContainer>
                    <MainNavigation />
                </NavigationContainer>
            </View>
        </Provider>
    )
}

export default App