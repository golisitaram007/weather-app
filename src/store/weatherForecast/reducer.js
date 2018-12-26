import * as actionTypes from './actions.js';

const initState = {
    coords: {}
}

const WeatherForecastReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case actionTypes.UPDATE_COORDS:
            const newCoords = {...state, coords: payload}
            return {
                ...state, coords : newCoords
            }
        default:
            return state;

    }
}

export default WeatherForecastReducer;
