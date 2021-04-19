// React
import React, { useEffect, useRef } from 'react'

// React Native
import { useSelector } from 'react-redux'

// React Navigation
import { NavigationActions } from 'react-navigation'

// Components
import MainNavigation from './MainNavigation'

const NavigationContainer = () => {
    const navRef = useRef()
    const isAuth = useSelector(state => !!state.auth.token)

    useEffect(() => {
        if (!isAuth) {
            navRef.current.dispatch(
                NavigationActions.navigate({ routeName: 'Auth' })
            )
        }
    }, [isAuth])

    return <MainNavigation ref={navRef} />
}

export default NavigationContainer