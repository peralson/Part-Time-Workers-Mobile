// Models
import Application from "../../models/application"

// Actions
import {
    FETCH_APPLICATIONS,
} from '../actions/applications'

// Generamos un estado incial
const initialState = {
    allApplications: []
}

// Exportamos el reducer, lo recivimos en App y lo agregamos al store
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_APPLICATIONS:
            if (action.data === "We could not find any application") {
                return { ...state }
            }

            console.log(action.data)
            
            let applications = []

            action.data.map(item => {
                const application = new Application(
                    item.id,
                    item.data.state,
                    item.data.offerId,
                    item.data.userId
                )
                applications.push(application)
            })

            const current = state.AllApplications.filter(application => application.userId !== action.userId)
            
            return { 
                ...state,
                AllApplications: current.concat(applications)
            }

        default:
            return state
    }
}