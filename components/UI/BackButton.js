// React
import React from 'react'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Components
import HeaderButton from './HeaderButton'

// Constants
import Colors from '../../constants/Colors'

const BackButton = ({ onGoBack }) => (
    <HeaderButton onSelect={onGoBack}>
        <Ionicons name="arrow-back" size={21} color={Colors.primary} />
    </HeaderButton>
)

export default BackButton