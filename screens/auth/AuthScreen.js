// React
import React, { useState, useEffect } from "react";

// React Native
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Alert,
	Image,
	Dimensions,
} from "react-native";

// Constants
import Colors from "../../constants/Colors";
import Size from "../../constants/FontSize";
import Family from "../../constants/FontFamily";

// Firebase
import firebase from "firebase";

// Redux & Actions
import { connect } from "react-redux";
import { login } from "../../store/actions/auth";
import { fetchProfile } from "../../store/actions/profile";

// Logo
import Logo from "../../assets/Logo.png";
import BG from "../../assets/bg.jpg";

// Components
import Screen from "../../components/UI/Screen";
import InputContainer from "../../components/form/InputContainer";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";

const AuthScreen = ({ navigation, login, fetchProfile }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (error) {
			Alert.alert("Ha habido un error", error, [{ text: "Okay" }]);
		}
	}, [error]);

	const handleLogIn = () => {
		setError(null);
		setIsLoading(true);

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				if (user) {
					return firebase.auth().currentUser.getIdTokenResult(true);
				} else {
					firebase.auth().signOut();
				}
			})
			.then((data) =>
				login(data.token, data.claims.user_id, data.expirationTime)
			)
			.then(() => fetchProfile())
			.then(() => setIsLoading(false))
			.then(() => navigation.navigate("App"))
			.catch((err) => {
				let m = err.message;

				if (
					err.message ===
					"There is no user record corresponding to this identifier. The user may have been deleted."
				) {
					m = "No existe ningún usuario con este correo electrónico.";
				}

				if (
					err.message ===
					"The password is invalid or the user does not have a password."
				) {
					m = "Parece que la contraseña es incorrecta. Prueba con otra.";
				}

				setError(m);
				setIsLoading(false);
			});
	};

	return (
		<Screen>
			<View style={styles.header}>
				<Image source={BG} style={styles.bg} resizeMode="stretch" />
				<Image source={Logo} style={styles.image} resizeMode="contain" />
			</View>
			<View style={styles.container}>
				<InputContainer>
					<Label>Correo electrónico</Label>
					<Input
						returnKeyType="next"
						onChange={(text) => setEmail(text)}
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
						onChange={(text) => setPassword(text)}
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
					<Text style={styles.buttonText}>
						{isLoading ? "Accediendo..." : "Acceder"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.textButtonContainer}
					onPress={() => {}}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>¿Has olvidado tu contraseña?</Text>
				</TouchableOpacity>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	header: {
		height: "100%",
		width: "100%",
		alignItems: "center",
	},
	image: {
		position: "absolute",
		marginTop: 120,
		width: 160,
		height: 50,
		zIndex: 10,
	},
	container: {
		flex: 1,
		position: "absolute",
		bottom: 0,
		left: -16,
		width: Dimensions.get("screen").width + 32,
		paddingHorizontal: 32,
		paddingTop: 32,
		paddingBottom: 80,
		backgroundColor: Colors.darkPrimary,
		borderTopLeftRadius: 48,
		borderTopRightRadius: 48,
	},
	buttonContainer: {
		backgroundColor: Colors.accent,
		borderRadius: 4,
		alignItems: "center",
		paddingVertical: 16,
	},
	buttonText: {
		fontSize: Size.medium,
		fontFamily: Family.bold,
		color: Colors.white,
		lineHeight: 24,
	},
	textButtonContainer: {
		alignItems: "center",
		marginTop: 16,
		padding: 8,
	},
	textButton: {
		fontFamily: Family.normal,
		color: Colors.primary,
		fontSize: Size.small,
	},
});

const mapDispatchToProps = {
	login,
	fetchProfile,
};

export default connect(null, mapDispatchToProps)(AuthScreen);
