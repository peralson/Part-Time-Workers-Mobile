const getPositionData = async id => {
  const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/offer/${id}`,
      { 
          headers: { 'Content-Type': 'application/json' }
      }
  )

  const resData = await response.json()

  return resData
}

export default getPositionData;