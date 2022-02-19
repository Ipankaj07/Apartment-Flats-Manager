import { ActionTypes } from '../contants/action-types';

const setFlats = (flats) => {
    return {
        type: ActionTypes.GET_APARTMENT_DATA,
        payload: flats
    }
}

const selectedFlat = (flats) => {
    return {
        type: ActionTypes.SELECT_APARTMENT,
        payload: flats
    }
}

const removeSelectedApartment = (flat) => {
    return {
        type: ActionTypes.REMOVE_APARTMENT,
    }
}

const pageChange = (page) => {
    return {
        type: ActionTypes.PAGE_CHANGE,
        payload: page
    }
}

export { setFlats, selectedFlat, removeSelectedApartment, pageChange };