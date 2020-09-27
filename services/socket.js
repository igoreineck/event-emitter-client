import io from "socket.io-client";

const PORT = 3333;
const baseURL = `http://localhost:${PORT}`;

const socket = io(baseURL);

export default socket;
