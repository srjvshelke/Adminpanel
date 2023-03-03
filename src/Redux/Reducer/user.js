const initialstate = {};
 const user = (state = initialstate, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
       
        case "ADDUSER":
            return (
                state + "1"
            )

        case "DECREMENT":
            return state - 1

        default:
            return state;
    }
}
export default user;