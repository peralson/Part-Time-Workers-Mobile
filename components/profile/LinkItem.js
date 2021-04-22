// React
import React from 'react';

// React Native
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// Icons
import { Ionicons, Feather } from '@expo/vector-icons';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';
const LinkItem = ({ title, onSelect, icon, style }) => {
    let Icon = Ionicons;

    if (icon === 'log-out') {
        Icon = Feather;
    }

    return (
        <TouchableOpacity
            style={styles.link}
            activeOpacity={0.8}
            onPress={onSelect}
        >
            <Text style={{ ...styles.text, ...style }}>{title}</Text>
            <Icon name={icon} color={Colors.darkPrimary} size={14} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    text: {
        flex: 1,
        fontFamily: Family.normal,
        color: Colors.darkPrimary,
        fontSize: Size.small,
    },
});

export default LinkItem;
