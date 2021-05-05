// React
import React from 'react'

// React Native
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'

const OfferCompany = ({
    name,
    image,
    onSelect
}) => (
    <Card>
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect} style={styles.content}>
            <View style={styles.textContainer}>
                <Text style={styles.proposal}>Oferta propuesta por</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image, width: 48, height: 48 }} resizeMode="contain" />
            </View>
        </TouchableOpacity>
    </Card>
)

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        marginRight: 16
    },
    proposal: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.darkGrey,
        marginBottom: 2,
        lineHeight: 12
    },
    name: {
        fontFamily: Family.bold,
        fontSize: Size.normal,
        color: Colors.white,
        lineHeight: 21
    },
    imageContainer: {
        height: 48,
        width: 48,
        borderRadius: 4,
        overflow: 'hidden',
    },
})

export default OfferCompany