// React
import React, { useState } from 'react'

// React Native
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

//Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const OptionListInput = ({ placeholder, options, onChange, values }) => {
	const [selectedValue, setSelectedValue] = useState(placeholder)

	return (
		<Picker
			selectedValue={selectedValue}
			onValueChange={(itemValue, itemIndex) => {
				setSelectedValue(itemValue)
				onChange(itemValue)
			}}
			style={styles.form}
			itemStyle={styles.item}
		>
			{options.map((option) => (
				<Picker.Item
					color={Colors.white}
					label={option}
					value={values ? values[options.indexOf(option)] : option}
					key={option}
					style={{ textDecorationColor: Colors.white }}
				/>
			))}
		</Picker>
	)
}

const styles = StyleSheet.create({
	form: {
		width: '100%',
		height: '100%',
		fontFamily: Family.normal,
		fontSize: Size.small,
		color: Colors.white,
	},
	item: {
		fontFamily: Family.normal,
		fontSize: Size.medium,
		color: Colors.white,
	},
})


export default OptionListInput
