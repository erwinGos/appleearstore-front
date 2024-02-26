import axios from "axios";
import Cookies from "js-cookie";

export async function GetAll(userCredentials) {
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Auth/signin`, userCredentials, {
            headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            credentials: 'include',
        });
    const data = request.data;
    return data;
}

export async function CheckAuth() {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Auth/checkAuth`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        },
        withCredentials:true,
        credentials: 'include',
    });
    const data = request.data;
    return data;
}

export async function Logout() {
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Auth/signout`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
        },
        withCredentials:true,
        credentials: 'include'
    });
    const data = request.data;
    if (request.status === 200) {
        Cookies.remove('auth_token');
    }
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
