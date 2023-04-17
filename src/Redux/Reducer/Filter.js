import { CLEAR_ERRORS, FILTER_FAIL, USERFILTER_TRIGGER } from "../constants/filter";



export const userfilterreducer = (state ={userfilter:[]}, action) => {

    switch (action.type) {
        case USERFILTER_TRIGGER:
            let users = action.payload.users;
            let filterval = action.payload.filtername;
            const filterdata = users.filter((user) => {
                // return user.type === filterval;
                if (user.type === filterval) {
                    return true;
                } else {
                    return false;
                }
            })
            return {
                ...state,
                userfilter: filterdata,
            }
        case FILTER_FAIL:
            return {
                ...state,
                userfilter: null,
                err: action.payload,
            };


        case CLEAR_ERRORS:
            return {
                ...state,
                err: null,
            };

        default:
            return state;
    }
}