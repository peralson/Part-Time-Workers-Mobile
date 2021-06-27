import React, {useEffect} from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import * as authActions from '../../store/actions/auth'

// Constants
import Colors from "../../constants/Colors";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

	useEffect(() => {
		const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData')
      const transformedData = JSON.parse(userData)
      if(!userData){
        props.navigation.navigate('Auth');
        return;
      }
      console.log('transfot', transformedData)
      const {token, userId, expiryDate} = transformedData;

      const expirationDate = new Date(expiryDate);

      if(expirationDate <= new Date() || !token || !userId){
        props.navigation.navigate('Auth');
        return;
      }

      props.navigation.navigate('App')
      dispatch(authActions.login(token, userId, expirationDate))
    };
		tryLogin();
	}, [dispatch]);
	return (
		<View style={styles.screen}> 
			<ActivityIndicator size="large" color={Colors.primary} />
		</View>
	);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default StartupScreen;
