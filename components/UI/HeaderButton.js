// React
import React from 'react'

// React Native
import { TouchableOpacity } from 'react-native'

const HeaderButton = ({ onSelect, children }) => (
    <TouchableOpacity activeOpacity={0.6} onPress={onSelect} style={{ paddingVertical: 4 }}>
        {children}
    </TouchableOpacity>
)

export default HeaderButton