import { GET_ITEMS, GET_DETAIL, GET_SALES } from "../types";

export default (state, action) => {
    const {payload, type} = action;

    console.log(payload)
    switch(type) {
        case GET_ITEMS:
            return {
                ...state, items: payload
            }
        case GET_DETAIL:
            return {
                ...state, selectedItem: payload
            }
        case GET_SALES:
                return {
                    ...state, items: payload
                }

        default:
            return state;
    }
};