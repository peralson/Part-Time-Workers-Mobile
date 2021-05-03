import React from 'react'

// Libs
import PDFReader from 'rn-pdf-reader-js'

// Components
import Screen from '../../components/UI/Screen'
import HeaderTitle from '../../components/UI/HeaderTitle'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'

const PDFScreen = ({ navigation, route }) => {
    const { file, name } = route.params

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                rightComponent={<HeaderTitle title={name} />}
            />
            <PDFReader source={{ uri: file }} />
        </Screen>
    )
}

export default PDFScreen