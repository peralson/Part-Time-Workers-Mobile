// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const SEND_APPLICATIONS = 'SEND_APPLICATION';
export const CANCEL_APPLICATIONS = 'CANCEL_APPLICATION';

// Models for fetching
import Application from '../../models/Application';

export const fetchApplications = () => {
  return async (dispatch, getState) => {
    // const token = getState().auth.token

    // const response = await fetch(
    // 	`https://us-central1-partime-60670.cloudfunctions.net/api/application/myApplications`,
    // 	{
    // 		method: 'GET',
    // 		headers: {
    // 			'Content-Type': 'application.json',
    // 			'Authorization': `Bearer ${token}`
    // 		}
    // 	}
    // )

    // const resData = await response.json()

    const loadedApplications = [];

    loadedApplications.push(
      new Application(
        '1',
        {
          category: 'Camarero',
          schedule: [{ start: { _seconds: 0 }, end: { _seconds: 19850 } }],
          salary: 9.2,
          extraSalary: 15,
          description: 'Nada de malroyismo',
        },
        {
          name: 'Boda Isabel y Marcos',
          location: {
            address: 'Poeta Paredes 50',
            lat: 37.915664368425624,
            lng: -4.809941902130738,
          },
          date: 1234561789,
          description: 'Se ha liado parda en la boda',
        },
        {
          companyId: '1000',
          companyName: 'AJE Neemboo',
          companyImage:
            'https://media-exp1.licdn.com/dms/image/C5603AQHPeEunkS-1TA/profile-displayphoto-shrink_800_800/0/1558198122304?e=1624492800&v=beta&t=v6bbkad-o517THcsB04G9x3Ypu6BE52lRoSD_CDfx4g',
        },
        {
          id: '100000',
        }
      )
    );

    loadedApplications.push(
      new Application(
        '2',
        {
          category: 'Camarero',
          schedule: [{ start: { _seconds: 0 }, end: { _seconds: 201000 } }],
          salary: 8.75,
          extraSalary: 15,
          description: '',
        },
        {
          name: 'Día en el hotel',
          location: {
            address: 'Avenida Robledo 7',
            lat: 37.915664368425624,
            lng: -4.809941902130738,
          },
          date: 1434561789,
          description: '',
        },
        {
          companyId: '1000',
          companyName: 'AJE Neemboo',
          companyImage:
            'https://media-exp1.licdn.com/dms/image/C5603AQHPeEunkS-1TA/profile-displayphoto-shrink_800_800/0/1558198122304?e=1624492800&v=beta&t=v6bbkad-o517THcsB04G9x3Ypu6BE52lRoSD_CDfx4g',
        },
        {
          id: '100000',
        }
      )
    );

    loadedApplications.push(
      new Application(
        '3',
        {
          category: 'Limpieza',
          schedule: [{ start: { _seconds: 0 }, end: { _seconds: 201000 } }],
          salary: 10,
          extraSalary: 15,
          description: '',
        },
        {
          name: 'Noches sucias',
          location: {
            address: 'General Pardiñas 34',
            lat: 37.915664368425624,
            lng: -4.809941902130738,
          },
          date: 1934561789,
          description: '',
        },
        {
          companyId: '1000',
          companyName: 'AJE Neemboo',
          companyImage:
            'https://media-exp1.licdn.com/dms/image/C5603AQHPeEunkS-1TA/profile-displayphoto-shrink_800_800/0/1558198122304?e=1624492800&v=beta&t=v6bbkad-o517THcsB04G9x3Ypu6BE52lRoSD_CDfx4g',
        },
        {
          id: '100000',
        }
      )
    );

    dispatch({
      type: FETCH_APPLICATIONS,
      userApplications: loadedApplications,
    });
  };
};

export const sendApplication = (offerId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/application/apply/${offerId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resData = await response.json();

    console.log(resData);
  };
};

export const cancelApplication = (applicationId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(
      `https://us-central1-partime-60670.cloudfunctions.net/api/application/${applicationId}?action=cancel`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resData = await response.json();

    console.log(resData);
  };
};
