import Contract from '../models/Contract'

const getContracts = async token => {
    // const response = await fetch(
    //     'https://us-central1-partime-60670.cloudfunctions.net/api/job/myContracts',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }
    // )

    // const resData = await response.json()

    const contracts = []

    // if (resData.body === "We could not find any contract") {}

    contracts.push(
        new Contract(
            '1',
            { category: 'Camarero' },
            { name: 'Fiesta de pijamas', location: { address: 'Poeta Alonso de Bonilla 19' }, date: 4500000000 },
            { name: 'Neemboo' },
            { contract: { name: 'modelo', file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    contracts.push(
        new Contract(
            '2',
            { category: 'Camarero' },
            { name: 'Una Jauja', location: { address: 'Andres Molina 26' }, date: 7000000000 },
            { name: 'Hermanos Rafael' },
            { contract: { name: 'modelo', file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    contracts.push(
        new Contract(
            '3',
            { category: 'Camarero' },
            { name: 'Casa del arbol', location: { address: 'Un arbol altísimo' }, date: 3000000000 },
            { name: 'Jardineros SA' },
            { contract: { name: 'modelo', file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    return contracts
}

export default getContracts