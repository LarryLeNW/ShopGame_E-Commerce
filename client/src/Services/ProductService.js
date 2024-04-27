import axios from "axios";

export const getProductByDesc = async (name) => {
    const res = await axios.get(
        `http://localhost:6789/products?name=${encodeURIComponent(name)}`
    );
    return res;
};
