import * as actionTypes from './actions.js';

const initState = {
    activities: []
}

const activityReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case actionTypes.ADD_ACTIVITY:
            const activities = state.activities.concat(payload).map((each, ind) => {
                each.id = ind + 1
                return each;
            });
            localStorage.setItem('activities', JSON.stringify(activities));
            return {
                ...state, activities
            }

        case actionTypes.UPDATE_ACTIVITY:
            const _activities = [...state.activities];
            _activities[_activities.findIndex(e => e.id === payload.id)] = payload;
            localStorage.setItem('activities', JSON.stringify(_activities));
            return {
                ...state, activities: _activities
            }
        case actionTypes.FETCH_ACTIVITIES:
            const activitiesLocalStorage = JSON.parse(localStorage.getItem('activities')) || [];
            return {
                ...state, activities: [...activitiesLocalStorage]
            }
        case actionTypes.DELETE_ACTIVITY:
            const items = [...state.activities];
            const index = state.activities.findIndex(e => e.id === payload.id);
            items.splice(index, 1);
            localStorage.setItem('activities', JSON.stringify(items))
            return {
                ...state, activities: items
            }
        default:
            return state;

    }
}

export default activityReducer;
