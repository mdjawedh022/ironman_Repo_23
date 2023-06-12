import { REQUESTUPDATE } from "./actionType."

export const updateData=(data)=>{
    return {type:REQUESTUPDATE,payload:data}
}