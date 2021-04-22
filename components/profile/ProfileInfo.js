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

const ProfileInfo = ({ profile }) => (
    <View style={styles.component}>
        <View style={styles.profile}>
            <View style={styles.profileMainText}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.profileState}>Perfil incompleto (40%)</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: profile.image }} />
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    component: {
        paddingTop: 72,
        marginBottom: 8,
        backgroundColor: Colors.white,
        borderBottomColor: Colors.grey,
        borderBottomWidth: .6
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 16,
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
        marginRight: 16
    },
    name: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.black,
    },
    profileState: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: 'red',
        marginTop: 12,
        paddingLeft: 2
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