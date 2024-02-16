import axios from "axios";

export async function GetProduct(productFilter) {
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/Product?page=${productFilter.page}&maxResult=${productFilter.maxResult}&brands=${productFilter.brands}`, productFilter, {
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