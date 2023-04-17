import { CUSTOMER_FAIL, CUSTOMER_REQUEST, CUSTOMER_SUCCESS, ALL_CUSTOMER_FAIL, ALL_CUSTOMER_REQUEST, ALL_CUSTOMER_SUCCESS, CLEAR_ERRORS, LOAD_CUSTOMER_REQUEST, LOAD_CUSTOMER_SUCCESS, LOAD_CUSTOMER_FAIL } from "../constants/Customerdata";

export const CUSTOMERreducer = (state = { customers:[] }, action) => {
    switch (action.type) {
        case CUSTOMER_REQUEST:
        case LOAD_CUSTOMER_REQUEST:
            return {
                loading: true,
            };
        case CUSTOMER_SUCCESS:
        case LOAD_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.payload,
            };

        case CUSTOMER_FAIL:
            return {
                ...state,
                loading: false,
                customers: null,
                error: action.payload,
            };

        case LOAD_CUSTOMER_FAIL:
            return {
                loading: false,
                customers: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}



export const allCUSTOMERsReducer = (state = { CUSTOMERS: [] }, action) => {
    switch (action.type) {
        case ALL_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                CUSTOMERs: action.payload,
            };

        case ALL_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

