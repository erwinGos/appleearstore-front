import axios from "axios";
import Cookies from "js-cookie";


export async function GetMostSoldProductApi() {
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Product/mostsoldproduct`, {
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

export async function GetProducts(productFilter) {
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Product?page=${productFilter.page}&maxResult=${productFilter.maxResult}&brands=${productFilter.brands}`, {
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

export async function AddProductToCart(productAdded) {
    const token = Cookies.get('auth_token');
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/Cart/addtocart`, productAdded, {
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

export async function GetCart() {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Cart/self`, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                Authorization: `${token}`
            },
            withCredentials: true,
            credentials: 'include'
        });
    const data = request.data;
    return data;
}

export async function DeleteCart(cartId) {
    const token = Cookies.get('auth_token');
    const request = await axios.delete(`${process.env.REACT_APP_HOST_NAME}/Cart/removefromCart?userCartId=${cartId}`, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                Authorization: `${token}`
            },
            withCredentials: true,
            credentials: 'include'
        });
    const data = request.data;
    return data;
}