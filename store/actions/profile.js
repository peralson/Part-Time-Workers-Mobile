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

    currentProfile.profile.name = name;
    currentProfile.profile.contact.email = email;
    currentProfile.profile.contact.phoneNumber = phoneNumber;
    currentProfile.profile.contact.location.address = address;
    currentProfile.profile.contact.location.lat = lat;
    currentProfile.profile.contact.location.lng = lng;
    currentProfile.profile.gender = gender;
    currentProfile.profile.bio = bio;
    currentProfile.profile.birthday = birthday;

    const updatedProfile = {...currentProfile.profile}

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
      const errorResData = await response.text();
      console.log(errorResData);
    }

    const resData = await response.text();

    console.log(resData);

    dispatch({
      type: UPDATE_PROFILE_GENERAL,
      updatedProfile: updatedProfile,
    });
  };
};

export const updateProfileLegal = (
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

    currentProfile.profile.legal.nationality = nationality;
    currentProfile.profile.legal.ssNumber = ssNumber;
    currentProfile.profile.legal.dni.number = dniNumber;
    currentProfile.profile.legal.dni.front = dniFront;
    currentProfile.profile.legal.dni.back = dniBack;
    currentProfile.profile.legal.dni.expiryDate = dniExpiryDate;
    currentProfile.profile.payments.bankAccount = bankAccount;

    const updatedProfile = {...currentProfile.profile}
    
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

    currentProfile.profile.transport.hasLicense = hasLicense;
    currentProfile.profile.transport.hasCar = hasCar;
    
    const updatedProfile = {...currentProfile.profile}    

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
