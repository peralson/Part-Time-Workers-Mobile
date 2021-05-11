// Actions
export const FETCH_PROFILE = 'FETCH_PROFILE'
export const FETCH_USER_LISTS = 'FETCH_USER_LISTS'
export const UPDATE_PROFILE_GENERAL = 'UPDATE_PROFILE_GENERAL'
export const UPDATE_PROFILE_LEGAL = 'UPDATE_PROFILE_LEGAL'
export const UPDATE_PROFILE_TRANSPORT = 'UPDATE_PROFILE_TRANSPORT'


// Models for fetching
import Profile from '../../models/Profile'

export const fetchProfile = () => {
  return async (dispatch, getState) => {
    const { token, userId } = getState().auth

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/user/worker/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    )

    if (!response.ok && response.status === 404) throw new Error('El usuario no existe.')
    if (!response.ok) throw new Error('Algo ha ocurrido con tu perfil. Contacta con nosotros.')

    const resData = await response.json()

    const profile = new Profile(
      resData.body[0].id,
      resData.body[0].data.name,
      resData.body[0].data.images,
      resData.body[0].data.gender,
      resData.body[0].data.bio,
      resData.body[0].data.birthday,
      resData.body[0].data.contact,
      resData.body[0].data.legal,
      resData.body[0].data.payments,
      resData.body[0].data.transport,
    );

    dispatch({
      type: FETCH_PROFILE,
      profile: profile,
    });
  };
};

export const fetchUserLists = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    const response = await fetch(
      'https://us-central1-partime-60670.cloudfunctions.net/api/user/worker/lists',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    )

    if (!response.ok) throw new Error()

    const resData = await response.json()
    const userLists = []

    if (resData.body === "We could not find any list") dispatch({ type: FETCH_USER_LISTS, userLists: [] })

    resData.body.map(list => {
      userLists.push({
        id: list.id,
        companyName: list.companyName,
        companyImage: list.companyImage,
        category: list.category
      })
    })

    dispatch({
      type: FETCH_USER_LISTS,
      userLists: userLists,
    })
  }
}

export const updateProfileGeneral = (
  id,
  name,
  phoneNumber,
  email,
  address,
  gender,
  birthday,
  bio,
  lat,
  lng
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const currentProfile = getState().profile;

    const updatedProfile = {
      id: id,
      name: name,
      images: {
        main: currentProfile.profile.images.main,
        profesional: currentProfile.profile.images.profesional,
      },
      contact: {
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        lat: lat,
        lng: lng
      },
      details: {
        gender: gender,
        bio: bio,
        birthday: birthday,
      },
      legal: {
        nationality: currentProfile.profile.legal.nationality,
        ssNumber: currentProfile.profile.legal.ssNumber,
        dni: {
          number: currentProfile.profile.legal.dni.number,
          front: currentProfile.profile.legal.dni.front,
          back: currentProfile.profile.legal.dni.back,
          expiryDate: currentProfile.profile.legal.dni.expiryDate,
        },
      },
      bank: { bankAccount: currentProfile.profile.bank.bankAccount },
      transport: {
        hasLicense: currentProfile.profile.transport.hasLicense,
        hasCar: currentProfile.profile.transport.hasCar,
        license: [
          {
            type: currentProfile.profile.transport.license.type,
            front: currentProfile.profile.transport.license.front,
            back: currentProfile.profile.transport.license.back,
          },
        ],
      },
    };

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/user/worker`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      }
    );

    if (response.error) {
      const errorResData = await response.json();
      console.log(errorResData);
    }

    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: UPDATE_PROFILE_GENERAL,
      updatedProfile: updatedProfile,
    });
  };
};

export const updateProfileLegal = (
  id,
  nationality,
  dniFront,
  dniNumber,
  dniBack,
  dniExpiryDate,
  ssNumber,
  bankAccount
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const currentProfile = getState().profile;

    const updatedProfile = {
      id: id,
      name: currentProfile.profile.name,
      images: {
        main: currentProfile.profile.images.main,
        profesional: currentProfile.profile.images.profesional,
      },
      contact: {
        email: currentProfile.profile.contact.email,
        phoneNumber: currentProfile.profile.contact.phoneNumber,
        address: currentProfile.profile.contact.address,
        lat: currentProfile.profile.contact.lat,
        lng: currentProfile.profile.contact.lng,
      },
      details: {
        gender: currentProfile.profile.details.gender,
        bio: currentProfile.profile.details.bio,
        birthday: currentProfile.profile.details.birthday,
      },
      legal: {
        nationality: nationality,
        ssNumber: ssNumber,
        dni: {
          number: dniNumber,
          front: dniFront,
          back: dniBack,
          expiryDate: dniExpiryDate,
        },
      },
      bank: {
        bankAccount: bankAccount,
      },
      transport: {
        hasLicense: currentProfile.profile.transport.hasLicense,
        hasCar: currentProfile.profile.transport.hasCar,
        license: [
          {
            type: currentProfile.profile.transport.license.type,
            front: currentProfile.profile.transport.license.front,
            back: currentProfile.profile.transport.license.back,
          },
        ],
      },
    };

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/user/worker`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      }
    );

    if (response.error) {
      const errorResData = await response.json();
      console.log(errorResData);
    }

    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: UPDATE_PROFILE_LEGAL,
      updatedProfile: updatedProfile,
    });
  };
};

export const updateProfileTransport = (
  id,
  hasLicense,
  hasCar,
  // licenseType,
  // licenseFront,
  // licenseBack
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const currentProfile = getState().profile;

    const updatedProfile = {
      id: id,
      name: currentProfile.profile.name,
      images: {
        main: currentProfile.profile.images.main,
        profesional: currentProfile.profile.images.profesional,
      },
      contact: {
        email: currentProfile.profile.contact.email,
        phoneNumber: currentProfile.profile.contact.phoneNumber,
        address: currentProfile.profile.contact.address,
        lat: currentProfile.profile.contact.lat,
        lng: currentProfile.profile.contact.lng,
      },
      details: {
        gender: currentProfile.profile.details.gender,
        bio: currentProfile.profile.details.bio,
        birthday: currentProfile.profile.details.birthday,
      },
      legal: {
        nationality: currentProfile.profile.legal.nationality,
        ssNumber: currentProfile.profile.legal.ssNumber,
        dni: {
          number: currentProfile.profile.legal.dni.number,
          front: currentProfile.profile.legal.dni.front,
          back: currentProfile.profile.legal.dni.back,
          expiryDate: currentProfile.profile.legal.dni.expiryDate,
        },
      },
      bank: {
        bankAccount: currentProfile.profile.bank.bankAccount,
      },
      transport: {
        hasLicense: hasLicense,
        hasCar: hasCar,
        // license: [
        //   {
        //     type: licenseType,
        //     front: licenseFront,
        //     back: licenseBack,
        //   },
        // ],
        license: [
          {
            type: currentProfile.profile.transport.license.type,
            front: currentProfile.profile.transport.license.front,
            back: currentProfile.profile.transport.license.back,
          },
        ],
      },
    };

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/user/worker`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      }
    );

    if (response.error) {
      const errorResData = await response.json();
      console.log(errorResData);
    }

    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: UPDATE_PROFILE_TRANSPORT,
      updatedProfile: updatedProfile,
    });
  };
};
