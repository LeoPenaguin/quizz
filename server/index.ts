import express from "express";
import { createServer } from "http";
import { Server } from "socket.io"; //replaces (import socketIo from 'socket.io')

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

app.get("/json", function (req, res) {
   res.status(200).json({ message: "ok" });
});

io.on("connection", (socket) => {
  console.log(`Connecté au client ${socket.id}`);
});

httpServer.listen(3000, function () {
  console.log("Votre app est disponible sur localhost:3000 !");
});
