import AsyncStorage from '@react-native-async-storage/async-storage'

// Actions
export const AUTHENTICATE = 'AUTHENTICATE'
export const LOGOUT = 'LOGOUT'

let timer

export const login = data => {
    return async dispatch => {
        const token = data.token
        const userId = data.claims.user_id
        const expiresIn = new Date(data.expirationTime).getTime()

        dispatch(authenticate(userId, token, expiresIn))

        const expirationDate = new Date(
            new Date().getTime() + expiresIn
        )

        saveDataToStorage(token, userId, expirationDate)
    }
}

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime))
        dispatch({
            type: AUTHENTICATE,
            userId: userId,
            token: token
        })
    }
}

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout())
        }, expirationTime)
    }
}

export const logout = () => {
    return dispatch => {
        clearLogoutTimer()
        AsyncStorage.removeItem('userData')
        dispatch({
            type: LOGOUT,
        })
    }
}

const clearLogoutTimer = () => {
    if (timer) {
        clearTimeout(timer)
    }
}

const saveDataToStorage = async (token, userId, expirationDate) => {
    try {
        await AsyncStorage.setItem(
            'userData',
            JSON.stringify({
                token: token,
                userId: userId,
                expiryDate: expirationDate.toISOString()
            })
        )
    } catch (e) {
        console.log(e)
    }
}