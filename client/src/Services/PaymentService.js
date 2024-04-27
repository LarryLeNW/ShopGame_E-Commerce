import axios from "axios";

export const getConfig = async () => {
    const res = await axios.get(`http://localhost:6789/config`);
    return res.data;
};
