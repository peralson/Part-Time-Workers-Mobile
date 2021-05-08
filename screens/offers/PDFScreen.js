// React
import React, { useState, useEffect } from 'react'

// Libs
import PDFReader from 'rn-pdf-reader-js'
import { getContractPdf, getPayrollPdf, getSignedContractPdf } from '../../hooks/requestPDF'

// Redux
import { useSelector } from 'react-redux'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import IsLoadingMini from '../../components/UI/IsLoadingMini'
import ErrorContainer from '../../components/UI/ErrorContainer'

const PDFScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true)
    const [file, setFile] = useState(null)
    const [error, setError] = useState(false)

    const { id, type, isPayroll } = route.params

    const token = useSelector(state => state.auth.token)

    let request
    switch (type) {
        case 0:
            request = getContractPdf
            break
    
        case 1:
            request = getSignedContractPdf
            break

        case 2:
            request = getPayrollPdf
            break
    }

    useEffect(() => {
        setError(false)
		setLoading(true)
		request(id, token)
			.then(res => setFile(res))
            .catch(e => {
                setError(true)
                console.error(e.message)
            })
            .finally(() => setLoading(false))
	}, [])

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title={isPayroll ? 'Nómina' : 'Contrato'}
            />
            {loading
                ? <IsLoadingMini text={isPayroll ? 'nómina' : 'contrato'} />
                : error
                    ? <ErrorContainer />
                    : <PDFReader source={{ uri: file }} />
            } 
        </Screen>
    )
}

export default PDFScreen