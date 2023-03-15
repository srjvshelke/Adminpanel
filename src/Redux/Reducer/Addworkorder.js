import { ADDWORKORDER_FAIL, ADDWORKORDER_REQUEST, ADDWORKORDER_SUCCESS, ALL_ADDWORKORDER_FAIL, ALL_ADDWORKORDER_REQUEST, ALL_ADDWORKORDER_SUCCESS, CLEAR_ERRORS, LOAD_ADDWORKORDER_FAIL, LOAD_ADDWORKORDER_REQUEST, LOAD_ADDWORKORDER_SUCCESS } from "../constants/Addworkorder";

export const Addworkorderreducer = (state = { Addworkorder: {} }, action) => {
    switch (action.type) {
        case ADDWORKORDER_REQUEST:
        case LOAD_ADDWORKORDER_REQUEST:
            return {
                loading: true,
            };
        case ADDWORKORDER_SUCCESS:
        case LOAD_ADDWORKORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                Addworkorder: action.payload,
            };

        case ADDWORKORDER_FAIL:
            return {
                ...state,
                loading: false,
                Addworkorder: null,
                error: action.payload,
            };

        case LOAD_ADDWORKORDER_FAIL:
            return {
                loading: false,
                Addworkorder: null,
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



export const allAddworkorderreducer = (state = { AllAddworkorders: [] }, action) => {
    switch (action.type) {
        case ALL_ADDWORKORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_ADDWORKORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                Addworkorders: action.payload,
            };

        case ALL_ADDWORKORDER_FAIL:
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

