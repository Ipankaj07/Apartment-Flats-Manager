import { ActionTypes } from '../contants/action-types';

const innitialState = {
    Apartment: [],
}

export const flatReducer = (state = innitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_APARTMENT_DATA:
            return {
                ...state,
                Apartment: payload
            }
        default:
            return state;
    }
}

export const selectedApartment = (state = innitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_APARTMENT:
            return {
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_APARTMENT:
            return {}
        default:
            return state;
    }
}

export const pageChange = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.PAGE_CHANGE:
            return {
                ...state,
                page: payload
            }
        default:
            return state;
    }
}

