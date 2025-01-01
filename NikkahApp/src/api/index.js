
import axios from 'axios';
const BASE_URL='https://localnikah.com'


export const registerUserApi=async(email,password,token)=>{
try {
    const config={
        Headers:{
            Authorization:`Bearer ${token}` 
        }
    }
    const body={
        email:email,
        password:password
    }
    const res=await axios.post(`${BASE_URL}/api/v1/register`,body,config);
    return res.data
} catch (error) {
    console.log(error)
} 
}
