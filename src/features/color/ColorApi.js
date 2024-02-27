import axios from "axios";
import Cookies from "js-cookie";

export async function GetAllApi(params) {
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Color/getall?page=${params.page}&maxResult=${params.maxResult}`, {
            headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            }
        });
    const data = request.data;
    return data;
}


export async function SignUp(userInformations) {
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Auth/signup`, userInformations, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
        },
        withCredentials:true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}
