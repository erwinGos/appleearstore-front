import axios from "axios";
import Cookies from "js-cookie";


export async function useVoucherApi(code) {
    const token = Cookies.get('auth_token');
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Voucher/usevoucher`, {code : code}, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}
