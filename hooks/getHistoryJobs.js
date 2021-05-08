import Job from "../models/Job"

const getHistoryJobs = async token => {
    const response = await fetch(
        'https://us-central1-partime-60670.cloudfunctions.net/api/job/history',
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
    const pastJobs = []

    if (resData.body === "We could not find any job") return []

    resData.body.map(job => {
        pastJobs.push(
            new Job(
                job.id,
                job.offerData,
                job.eventData,
                job.companyData,
                job.jobData
            )
        )
    })

    pastJobs.sort((a, b) => {
        if (a.eventData.date > b.eventData.date) return -1
        if (a.eventData.date < b.eventData.date) return 1
        return 0
    })

    return pastJobs
}

export default getHistoryJobs