import { io } from "socket.io-client";

const socket = io();

socket.on("counter", function (count) {
  console.log(count);
});

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});
