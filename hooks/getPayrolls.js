import Payroll from "../models/Payroll"

const getPayrolls = async token => {
    // const response = await fetch(
    //     'https://us-central1-partime-60670.cloudfunctions.net/api/job/myPayrolls',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }
    // )

    // const resData = await response.json()

    const payrolls = []

    // if (resData.body === "We could not find any job") {}

    payrolls.push(
        new Payroll(
            '1',
            { category: 'Camarero' },
            { name: 'Fiesta de pijamas', location: { address: 'Poeta Alonso de Bonilla 19' }, date: 4500000000 },
            { name: 'Neemboo' },
            { payroll: { amount: 200, file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    payrolls.push(
        new Payroll(
            '2',
            { category: 'Camarero' },
            { name: 'Una Jauja', location: { address: 'Andres Molina 26' }, date: 7000000000 },
            { name: 'Hermanos Rafael' },
            { payroll: { name: 'modelo', file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    payrolls.push(
        new Payroll(
            '3',
            { category: 'Camarero' },
            { name: 'Casa del arbol', location: { address: 'Un arbol altísimo' }, date: 3000000000 },
            { name: 'Jardineros SA' },
            { payroll: { amount: 200, file: 'https://bitcoin.org/bitcoin.pdf' } }
        )
    )

    return payrolls
}

export default getPayrolls