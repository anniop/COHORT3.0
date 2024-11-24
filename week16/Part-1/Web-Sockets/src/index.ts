import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Jay Ganesh")
  socket.send("Jay Ganesh");

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("Pong");
    }
  })
})