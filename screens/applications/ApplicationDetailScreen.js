// React
import React, { useState } from "react";

// React Native
import { ActivityIndicator, Alert, ScrollView } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Redux && Actions
import { connect } from "react-redux";
import { cancelApplication } from "../../store/actions/applications";

// Libs
import { handleCalendar } from "../../libs/addToCalendar";
import formattedSalary from "../../libs/formattedSalary";
import totalHoursCalc from "../../libs/totalHoursCalc";
import moment from "moment";
import "moment/locale/es";

// Constants
import Colors from "../../constants/Colors";

// Components
import Screen from "../../components/UI/Screen";
import HomeWrapper from "../../components/UI/HomeWrapper";
import BackButton from "../../components/UI/BackButton";
import OfferHeader from "../../components/offers/OfferHeader";
import Description from "../../components/offers/Description";
import DetailsContainer from "../../components/offers/DetailsContainer";
import DetailItem from "../../components/offers/DetailItem";
import Label from "../../components/UI/Label";
import Schedules from "../../components/offers/Schedules";
import TopRightButton from "../../components/UI/TopRightButton";
import OfferInfoItem from "../../components/offers/OfferInfoItem";
import OfferCompany from "../../components/offers/OfferCompany";
import TinyContractButton from "../../components/UI/TinyTextButton";

const ApplicationDetailScreen = ({
	navigation,
	route,
	userApplications,
	cancelApplication,
}) => {
	const { applicationId } = route.params;
	const [isLoading, setLoading] = useState(false);
	const thisApplication = userApplications.find(
		(item) => item.id === applicationId
	);

	if (!thisApplication) return <Screen></Screen>;

	const { offerData, eventData, companyData, applicationData } =
		thisApplication;

	const { hours, minutes } = totalHoursCalc(offerData.schedule);
	const totalSalary = ((hours + minutes / 60) * offerData.salary).toFixed(0);

	const datesLength = offerData.schedule.length;
	const formatDate = (date) => moment(date._seconds * 1000).format("D MMMM");

	const handleCancelApplication = () => {
		Alert.alert("¿Estas seguro?", "", [
			{ text: "No" },
			{
				text: "Sí",
				style: "destructive",
				onPress: async () => {
					setLoading(true);
					try {
						await cancelApplication(applicationId);
						navigation.navigate("Home", { screen: "Trabajos" });
					} catch (err) {
						Alert.alert("Oh! Vaya...", err.message, [{ text: "Okay" }]);
					} finally {
						setLoading(false);
					}
				},
			},
		]);
	};
console.log('dir', {address: eventData.location.address.split(",")[0],
lat: eventData.location.lat,
lng: eventData.location.lng})
	return (
		<Screen>
			<HomeWrapper
				leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
				title="Aplicación"
				rightComponent={
					<TopRightButton
						title={
							isLoading ? (
								<ActivityIndicator size="small" color="red" />
							) : (
								"Anular"
							)
						}
						color="red"
						onSelect={handleCancelApplication}
					/>
				}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
			>
				<OfferHeader
					category={offerData.category}
					name={eventData.name ? eventData.name : offerData.name}
					totalSalary={totalSalary}
				/>
				<DetailsContainer>
					<DetailItem
						title={
							datesLength === 1
								? formatDate(offerData.schedule[0].day)
								: `${formatDate(eventData.dates[0])} - ${formatDate(
										offerData.schedule[datesLength - 1].day
								  )}`
						}
						icon={
							<Ionicons
								name="calendar-outline"
								size={21}
								color={Colors.white}
							/>
						}
						cta="Añadir"
						onSelect={() => handleCalendar(eventData)}
					/>
					<DetailItem
						title={eventData.location.address.split(",")[0]}
						icon={
							<Ionicons name="map-outline" size={21} color={Colors.white} />
						}
						cta="Ver"
						onSelect={() =>
							navigation.navigate("OffersStack", {
								screen: "Map",
								params: {
									address: eventData.location.address.split(",")[0],
									lat: eventData.location.lat,
									lng: eventData.location.lng,
								},
							})
						}
					/>
				</DetailsContainer>
				{offerData.description.length !== 0 && (
					<>
						<Label style={{ marginBottom: 12 }}>Requerimientos</Label>
						<Description>{offerData.description}</Description>
					</>
				)}
				<Label style={{ marginBottom: 8 }}>Horario</Label>
				<Schedules schedules={offerData.schedule} />

				<Label style={{ marginBottom: 8 }}>Más información</Label>
				<OfferCompany
					name={companyData.companyName}
					image={companyData.companyImage}
				/>
				<OfferInfoItem
					left="Salario"
					right={formattedSalary(offerData.salary) + "€"}
				/>
				<OfferInfoItem
					left="Salario extra"
					right={formattedSalary(offerData.extraSalary) + "€"}
				/>
				{offerData.extras.map((extra, index) => {
					if (extra.amount === 0) return;
					const extraAmount = formattedSalary(parseInt(extra.amount));
					return (
						<OfferInfoItem
							key={index}
							left={extra.name}
							right={extraAmount + "€"}
						/>
					);
				})}
				<OfferInfoItem
					left="Contrato"
					right={
						<TinyContractButton
							onSelect={() =>
								navigation.navigate("OffersStack", {
									screen: "PDF",
									params: { id: applicationData.id_offer, type: 0 },
								})
							}
						/>
					}
				/>
				{eventData.description && eventData.description.length !== 0 && (
					<>
						<OfferInfoItem left="Descrición" />
						<Description>{eventData.description}</Description>
					</>
				)}
			</ScrollView>
		</Screen>
	);
};

const mapStateToProps = (state) => {
	return {
		userApplications: state.applications.userApplications,
	};
};

const mapDispatchToProps = {
	cancelApplication,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationDetailScreen);
