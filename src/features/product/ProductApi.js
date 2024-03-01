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

export async function GetProductsApi(productFilter) {
    let parameters = {
        page : productFilter.page ?? 1,
        maxResult : productFilter.maxResult ?? 10,
        brands : productFilter.brands.join(',') ?? null,
        colors : productFilter.colors.join(',') ?? null,
        categories : productFilter.categories.join(',') ?? null
    };

    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Product?page=${parameters.page}&maxResult=${parameters.maxResult}&brands=${parameters.brands}&colors=${parameters.colors}&categories=${parameters.categories}`, {
            headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            }
        });
    const data = request.data;
    return data;
}

export async function GetSingleProduct(productId) {
    const token = Cookies.get('auth_token');
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Product/${productId}`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            Authorization: `${token}`
        },
        withCredentials: true,
        credentials: 'include'
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