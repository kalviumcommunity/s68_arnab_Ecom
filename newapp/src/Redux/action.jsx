import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS} from "./actiontype"


export const loginuser=(data)=>async(dispatch)=>{
   const response= await axios.post('http://localhost:3000/auth/login',data)
    if(response.status==="200"){
        dispatch({type:LOGIN_SUCCESS,payload:data})
    }
    dispatch({type:LOGIN_FAILURE,payload:"ther is error"})
}