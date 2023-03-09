import   { adduserreducer, allUsersReducer }  from './Adduser'
import {combineReducers} from "redux"
const rootReducer = combineReducers({
   adduser: adduserreducer,
   allusers : allUsersReducer
})

export default rootReducer;