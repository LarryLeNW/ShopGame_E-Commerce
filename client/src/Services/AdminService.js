import axios from "axios";

export const createProduct = async (values) => {
    let res = await axios.post("http://localhost:6789/products", values);
    return res;
};

export const deleteProduct = async (id) => {
    let res = await axios.delete(`http://localhost:6789/products/?id=${id}`);
    return res;
};

export const editProduct = async (data) => {
    let res = await axios.put(`http://localhost:6789/products`, data);
    return res;
};
