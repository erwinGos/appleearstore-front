import axios from "axios";
import Cookies from "js-cookie";


export async function GetMyAddressesApi({page, maxResult}) {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Order/list?page=${page}&maxResult=${maxResult}`, {
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

export async function CreateAddressApi(addressCreate) {
    const token = Cookies.get('auth_token');
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Address/create`, addressCreate, {
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

export async function updateAddressApi(address) {
    const token = Cookies.get('auth_token');
    const request = await axios.patch(`${process.env.REACT_APP_HOST_NAME}/Address/update`, address, {
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

export async function deleteAddressApi(addressId) {
    const token = Cookies.get('auth_token');
    const request = await axios.delete(`${process.env.REACT_APP_HOST_NAME}/Address/${addressId}`, {
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


