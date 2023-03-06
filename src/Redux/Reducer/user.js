const initialstate = [];
const user = (state = initialstate, action) => {

    switch (action.type) {

        case "ADDUSER":
            state = [...state, action.payload]

            return state;
            break;

        case "DECREMENT":
            return state

        default:
            return state;
    }
}

export default user;