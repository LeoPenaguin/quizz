import io from "socket.io-client";
import { type User } from "@firebase/auth";
class Socket {
  socket;

  constructor() {
    this.socket = io("ws://localhost:3000");
  }

  joinLobby = (user: User, lobbyCode = null) => {
    this.socket.emit("join-lobby", { user, lobbyCode });
  };

  sendAnswer = (user: User, answer) => {
    this.socket.emit("send-answer", { user, answer });
  };
}

export default new Socket();
