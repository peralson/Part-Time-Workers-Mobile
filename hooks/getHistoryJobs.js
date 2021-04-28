import Job from "../models/Job"

const getHistoryJobs = async token => {
    // const response = await fetch(
    //     'https://us-central1-partime-60670.cloudfunctions.net/api/job/',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }
    // )

    // const resData = await response.json()

    const pastJobs = []

    pastJobs.push(
        new Job(
            '1',
            { category: 'Camarero' },
            { name: 'Fiesta de pijamas', location: { address: 'Poeta Alonso de Bonilla 19' }, date: 4500000000 },
            { companyName: 'Neemboo' },
            { status: 'complete' },
        )
    )

    pastJobs.push(
        new Job(
            '2',
            { category: 'Camarero' },
            { name: 'Una Jauja', location: { address: 'Andres Molina 26' }, date: 7000000000 },
            { companyName: 'Hermanos Rafael' },
            { status: 'pending' },
        )
    )

    pastJobs.push(
        new Job(
            '3',
            { category: 'Camarero' },
            { name: 'Casa del arbol', location: { address: 'Un arbol altísimo' }, date: 3000000000 },
            { companyName: 'Jardineros SA' },
            { status: 'canceled' },
        )
    )

    pastJobs.push(
        new Job(
            '4',
            { category: 'Camarero' },
            { name: 'Otra cosa', location: { address: 'Otro lugar' }, date: 1000000000 },
            { companyName: 'Co-SaaS' },
            { status: 'missed' },
        )
    )

    pastJobs.sort((a, b) => {
        if (a.eventData.date > b.eventData.date) return -1
        if (a.eventData.date < b.eventData.date) return 1
        return 0
    })

    return pastJobs
}

export default getHistoryJobs