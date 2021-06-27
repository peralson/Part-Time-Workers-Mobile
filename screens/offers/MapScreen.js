// React
import React from "react";

// React Native
import { View } from "react-native";

// Maps
import MapView, { Marker } from "react-native-maps";

// Components
import Screen from "../../components/UI/Screen";
import HomeWrapper from "../../components/UI/HomeWrapper";
import BackButton from "../../components/UI/BackButton";

const MapScreen = ({ navigation, route }) => (
	<Screen>
		<HomeWrapper
			leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
			title={route.params.address}
		/>
		<View style={{ flex: 1, alignItems: "center" }}>
			<MapView
				style={{ height: "100%", width: "100%" }}
				minZoomLevel={10}
				maxZoomLevel={18}
				initialRegion={{
					latitude: route.params.lat,
					longitude: route.params.lng,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					title="Ubicación"
					coordinate={{
						latitude: route.params.lat,
						longitude: route.params.lng,
					}}
				/>
			</MapView>
		</View>
	</Screen>
);

export default MapScreen;
