
import axios from 'axios';
const BASE_URL='https://localnikah.com'


export const verifyOtpApi=async(email,code)=>{
try {

    const body={
        email:email,
        code:code
    }
    const res=await axios.post(`${BASE_URL}/api/v1/verify-otp`,body);
    return res.data
} catch (error) {
    console.log(error)
} 
}
