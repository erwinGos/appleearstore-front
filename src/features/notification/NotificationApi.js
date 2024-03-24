import axios from "axios";
import Cookies from "js-cookie";

export async function GetAllApi() {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Notification/getAll`, {
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