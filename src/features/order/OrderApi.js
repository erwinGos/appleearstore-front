import axios from "axios";
import Cookies from "js-cookie";


export async function GetMyOrdersApi({page, maxResult}) {
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

export async function CreateOrderApi(params) {
    const token = Cookies.get('auth_token');
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Order/create`, 
    {
        promoCode: [],
        usedBalance: 0,
        addressId: params.addressId,
        products: params.products
    },
    {
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

export async function GetSinglerOrderByNumber(orderNumber) {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Order/getsinglebynumber/${orderNumber}`,
    {
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

