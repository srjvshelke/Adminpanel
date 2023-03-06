export const Addauser = (data)=>{
    return {
        type:"ADDUSER",
        payload:data,
    }

}
export const decrement = ()=>{
    return {
        type:"DECREMENT"
    }
}