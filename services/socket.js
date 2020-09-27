import io from "socket.io-client";

const baseURL = `http://${process.env.SERVER_IP_ADDRESS}:${process.env.PORT}`;

const socket = io(baseURL);

export default socket;
