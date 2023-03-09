import { ADDUSER_FAIL, ADDUSER_REQUEST, ADDUSER_SUCCESS, CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "../constants/Adduser";

const user = (state = { user: {} }, action) => {
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

export default user;