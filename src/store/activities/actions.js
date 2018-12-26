export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';


export function addActivity(payload) {
    return {
        type: ADD_ACTIVITY,
        payload
    }
}

export function updateActivity(payload){
    return {
        type: UPDATE_ACTIVITY,
        payload
    }
}

export function deleteActivity(payload){
    return {
        type: DELETE_ACTIVITY,
        payload
    }
}

export function readActivities(){
    return {
        type: FETCH_ACTIVITIES
    }
}
