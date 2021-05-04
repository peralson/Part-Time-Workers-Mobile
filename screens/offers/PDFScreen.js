import React from 'react'

// Libs
import { saveFile } from '../../libs/saveFile'
import PDFReader from 'rn-pdf-reader-js'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Components
import Screen from '../../components/UI/Screen'
import HeaderButton from '../../components/UI/HeaderButton'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import Colors from '../../constants/Colors'

const PDFScreen = ({ navigation, route }) => {
    const { file, name, type } = route.params

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title={type}
                rightComponent={null /* <HeaderButton onSelect={() => saveFile(file, name)}><Ionicons name="download-outline" color={Colors.primary} size={19} /></HeaderButton> */}
            />
            <PDFReader source={{ uri: file }} />
        </Screen>
    )
}

export default PDFScreen