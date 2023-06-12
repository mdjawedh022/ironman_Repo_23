import { REQUESTUPDATE } from "./actionType."

const initialState={
data:"",
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
case REQUESTUPDATE:{
    return {...state,data:payload}
}
        default:
            return state
    }
    
}