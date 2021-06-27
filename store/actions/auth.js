import AsyncStorage from "@react-native-async-storage/async-storage";

// Actions
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

let timer;

export const login = (token, userId, expiresIn) => {
	return async (dispatch) => {
		const expiration = new Date(expiresIn).getTime();
		dispatch(authenticate(userId, token, expiration));
		const expirationDate = new Date(new Date().getTime() + expiration);
		saveDataToStorage(token, userId, expirationDate);
	};
};

export const authenticate = (userId, token, expiryTime) => {
	return (dispatch) => {
		dispatch(setLogoutTimer(expiryTime));
		dispatch({
			type: AUTHENTICATE,
			userId: userId,
			token: token,
		});
	};
};

const setLogoutTimer = (expirationTime) => {
	return (dispatch) => {
		timer = setTimeout(() => {
			dispatch(logout());
		}, expirationTime);
	};
};

export const logout = () => {
	return (dispatch) => {
		clearLogoutTimer();
		AsyncStorage.removeItem("userData");
		dispatch({
			type: LOGOUT,
		});
	};
};

const clearLogoutTimer = () => {
	if (timer) {
		clearTimeout(timer);
	}
};

const saveDataToStorage = async (token, userId, expirationDate) => {
	try {
		await AsyncStorage.setItem(
			"userData",
			JSON.stringify({
				token: token,
				userId: userId,
				expiryDate: expirationDate.toISOString(),
			})
		);
	} catch (e) {
		console.log(e);
	}
};
