import axios from "axios";
import Cookies from "js-cookie";


export async function useVoucherApi(body) {
    const token = Cookies.get('auth_token');
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Voucher/create`, body, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            Authorization: `${token}`
        },
        withCredentials:true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}
