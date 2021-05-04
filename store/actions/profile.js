// Actions
export const FETCH_PROFILE = 'FETCH_PROFILE'
export const FETCH_USER_LISTS = 'FETCH_USER_LISTS'

// Models for fetching
import Profile from '../../models/Profile'

export const fetchProfile = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        // TODO Fetch profile
        
        const profile = new Profile(
            '1',
            'Tito Martin Roch',
            { main: 'https://media-exp1.licdn.com/dms/image/C5603AQE4UkXJA_04OQ/profile-displayphoto-shrink_800_800/0/1519913090300?e=1624492800&v=beta&t=3rO6IYYAAOYbLe-1ZBJT6QJ2NiA8P1uuxkv9uk4AHCU', profesional: 'https://www.altonivel.com.mx/wp-content/uploads/2018/02/presentacion-de-negocios-profesional.jpg' },
            { gender: 'male', bio: 'Hago fotos con cámaras muy caras y cuando tengo tiempo libre salgo a pescar', birthday: 0 },
            { email: 'titomartinroig@gmail.com', phoneNumber: '984123432', address: 'Avenida de Barcelona 19, Córdoba, España' },
            { nationality: 'Español', ssNumber: '834759384753489', dni: { number: '35289473R', front: null, back: null, expiryDate: 0 } },
            { bankAccount: '234829347982349' },
            { hasLicense: true, hasCar: true, license: [{ type: 'A', front: null, back: null }] }
        )

        dispatch({
            type: FETCH_PROFILE,
            profile: profile
        })
    }
}

export const fetchUserLists = () => {
  return async (dispatch, getState) => {
      const token = getState().auth.token

      const response = await fetch(
          'https://us-central1-partime-60670.cloudfunctions.net/api/user/worker/lists',
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'application.json',
                  'Authorization': `Bearer ${token}`
              }
          }
      )

      console.log(`RESPUESTA LIST: ${response.json()}`);

      // const resData = await response.json()

     const userLists = []

      // await resData.body.map(offer => {
      //     userLists.push(
      //         new Offer(
      //             offer.id,
      //             offer.offerData,
      //             offer.eventData,
      //             offer.companyData
      //         )
      //     )
      // })

      dispatch({
          type: FETCH_USER_LISTS,
          userLists: userLists
      })
  }
}