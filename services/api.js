import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.SERVER_IP_ADDRESS}:${process.env.PORT}`,
});

export default api;
