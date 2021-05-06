// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
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
import ItemTitle from '../UI/ItemTitle'

const ListItem = ({ list, onSelect }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
        <Card>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: list.companyImage, width: 32, height: 32 }} resizeMode="contain" />
                </View>
                <View style={styles.middleContainer}>
                    <ItemTitle style={{ marginBottom: 8 }}>{list.companyName}</ItemTitle>
                    <View style={styles.tag}>
                        <Text style={styles.nameText}>{list.category}</Text>
                    </View>
                </View>
            </View>
        </Card>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftContainer: {
        marginRight: 8,
    },
    middleContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 16,
    },
    tag: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.accentBg,
        borderRadius: 4
    },
    nameText: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.accent,
        lineHeight: 14
    },
    rightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    rightText: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        lineHeight: 14,
        color: Colors.primary
    }
})

export default ListItem