import axios from "axios"

const BASE_URL ="https://fakestoreapi.com"

export const getProducts= async () => {
    const res= await axios.get(`${BASE_URL}/products`);
    return res.data;
}

export const getProductsById =async (id) => {
    const res= await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
}

export const getCategories= async () => {
    const res =await axios.get(`${BASE_URL}/products/categories`);
    return  res.data;
}

export const getProductsByCategory = async(category) =>{
    const res =await axios.get(`${BASE_URL}/products/category/${category}`);
    return res.data;
}