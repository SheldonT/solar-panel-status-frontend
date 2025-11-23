import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],   // optional but recommended
  autoConnect: false           // you control when it connects
});

export default socket;