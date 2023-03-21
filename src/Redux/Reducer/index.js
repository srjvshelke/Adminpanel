import   { adduserreducer, allUsersReducer }  from './Adduser'
import {combineReducers} from "redux"
import { Addworkorderreducer, allAddworkorderreducer } from './Addworkorder';
import { forgotPasswordReducer, userReducer } from './Login';
const rootReducer = combineReducers({
   adduser: adduserreducer,
   allusers : allUsersReducer,
   Addworkorder : Addworkorderreducer,
   getallworkorders : allAddworkorderreducer,
   user:userReducer,
   forgotPassword: forgotPasswordReducer,


})

export default rootReducer;