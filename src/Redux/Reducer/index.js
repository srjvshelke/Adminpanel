import   { adduserreducer, allUsersReducer }  from './Adduser'
import {combineReducers} from "redux"
import { Addworkorderreducer, allAddworkorderreducer } from './Addworkorder';
const rootReducer = combineReducers({
   adduser: adduserreducer,
   allusers : allUsersReducer,
   Addworkorder : Addworkorderreducer,
   getallworkorders : allAddworkorderreducer

})

export default rootReducer;