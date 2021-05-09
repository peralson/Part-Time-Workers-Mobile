import Payroll from "../models/Payroll"

const getPayrolls = async token => {
    const response = await fetch(
        'https://us-central1-partime-60670.cloudfunctions.net/api/payroll/myPayrolls',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )

    if (!response.ok && response.status === 404) return []
    if (!response.ok) throw new Error()

    const resData = await response.json()
    const payrolls = []

    resData.body.map(payroll => {
        payrolls.push(
            new Payroll(
                payroll.id,
                payroll.offerData,
                payroll.eventData,
                payroll.companyName,
                payroll.jobData
            )
        )
    })

    payrolls.sort((a, b) => {
        if (a.eventData.date > b.eventData.date) return -1
        if (a.eventData.date < b.eventData.date) return 1
        return 0
    })

    return payrolls
}

export default getPayrolls