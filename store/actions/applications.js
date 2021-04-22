// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';

// Models for fetching
import Application from '../../models/Application';

export const fetchApplications = (userId) => {
  return async (dispatch, getState) => {
    //const token = getState().auth.token;

    // const response = await fetch(
    //     `https://us-central1-partime-60670.cloudfunctions.net/api/job/event/${userId}`,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application.json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }
    // )

    // const resData = await response.json();

    const loadedApplications = [];

    // await resData.body.map((application) => {
    //   loadedApplications.push(
    //     new Application(
    //       application.id,
    //       application.state,
    //       application.offerId,
    //       application.userId
    //     )
    //   );
    // });

    loadedApplications.push(
      new Application(49384, 'acepted', 'hOz2u0cC3EJnPoEwmzKP', 'userid')
    );

    // if (
    //   resData.error &&
    //   resData.body === 'We could not find any offer with this user_id'
    // ) {
    //   entry = [];
    // }

    dispatch({
      type: FETCH_APPLICATIONS,
      userApplications: loadedApplications,
    });
  }; 
};

// export const deleteApplication = (id) => {
//   return async (dispatch, getState) => {
//     dispatch({
//       type: DELETE_APPLICATION,
//       applicationId: id,
//     });
//   };
// }
