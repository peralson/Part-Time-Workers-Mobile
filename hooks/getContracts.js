import Contract from '../models/Contract'

const getContracts = async token => {
    const response = await fetch(
        'https://us-central1-partime-60670.cloudfunctions.net/api/contract/myContracts',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )

    if (!response.ok) throw new Error()

    const resData = await response.json()
    const contracts = []

    if (resData.body === "We could not find any contract") return []

    resData.body.map(contract => {
        contracts.push(
            new Contract(
                contract.id,
                contract.offerData,
                contract.eventData,
                contract.companyName,
                contract.jobData
            )
        )
    })

    contracts.sort((a, b) => {
        if (a.eventData.date > b.eventData.date) return -1
        if (a.eventData.date < b.eventData.date) return 1
        return 0
    })

    return contracts
}

export default getContracts