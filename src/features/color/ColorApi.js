import axios from "axios";
import Cookies from "js-cookie";

export async function GetAllApi(params) {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Color/getall?page=${params.page}&maxResult=${params.maxResult}`, {
            headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            }
        });
    const data = request.data;
    return data;
}
