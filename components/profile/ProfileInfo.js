// React
import React from 'react'

// React Native
import { 
    Image,
    Text,
    StyleSheet,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ProfileInfo = ({ title, image, titleStyle, containerStyle }) => (
    <View style={{...styles.profile, ...containerStyle}}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.profileMainText}>
            <Text style={{...styles.name , ...titleStyle}}>{title}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: 48,
        width: 48,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    profileMainText: {
        flex: 1,
        marginHorizontal: 16
    },
    name: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.black,
    },
    itemContainer: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: Colors.lightPrimary,
        borderRadius: 8
    },
    separator: {
        height: 16
    }
})

export default ProfileInfo