import { ADDUSER_FAIL, ADDUSER_REQUEST, ADDUSER_SUCCESS, ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "../constants/Adduser";

export const adduserreducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADDUSER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
            };
        case ADDUSER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };

        case ADDUSER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
            };

        case LOAD_USER_FAIL:
            return {
                loading: false,
                user: null,
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



export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };

        case ALL_USERS_FAIL:
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

