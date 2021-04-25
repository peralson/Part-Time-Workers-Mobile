// Actions
export const FETCH_PROFILE = 'FETCH_PROFILE'

// Models for fetching
import Profile from '../../models/Profile'

export const fetchProfile = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        
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