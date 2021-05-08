export const getContractPdf = async (offerId, token) => {
    const response = await fetch(
        `https://us-central1-partime-60670.cloudfunctions.net/api/contract/${offerId}?type=offer`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )

    const resData = await response.json()

    return resData.body
}

export const getSignedContractPdf = async (jobId, token) => {
    const response = await fetch(
        `https://us-central1-partime-60670.cloudfunctions.net/api/contract/${jobId}?type=job`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )

    const resData = await response.json()

    return resData.body
}

export const getPayrollPdf = async (jobId, token) => {
    const response = await fetch(
        `https://us-central1-partime-60670.cloudfunctions.net/api/payroll/${jobId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )

    const resData = await response.json()

    return resData.body
}