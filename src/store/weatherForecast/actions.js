export const UPDATE_COORDS = 'UPDATE_COORDS';


export function updateCoords(payload) {
    return {
        type: UPDATE_COORDS,
        payload
    }
}
