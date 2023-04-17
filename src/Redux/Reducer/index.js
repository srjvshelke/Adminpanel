import   { adduserreducer, allUsersReducer }  from './Adduser'
import {combineReducers} from "redux"
import { Addworkorderreducer, allAddworkorderreducer } from './Addworkorder';
import { forgotPasswordReducer, userReducer } from './Login';
import { userfilterreducer } from './Filter';
import { CUSTOMERreducer } from './Customerdata';
const rootReducer = combineReducers({
   adduser: adduserreducer,
   allusers : allUsersReducer,
   Addworkorder : Addworkorderreducer,
   getallworkorders : allAddworkorderreducer,
   user:userReducer,
   forgotPassword: forgotPasswordReducer,
   userfilter :userfilterreducer ,
   Customers : CUSTOMERreducer
})

export default rootReducer;