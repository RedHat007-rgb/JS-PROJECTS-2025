import { WebSocketServer } from "ws";

const websocket = new WebSocketServer({ port: 8080 });

websocket.on("connection", (ws) => {
  console.log("in ws");
  ws.on("message", (data) => {
    console.log(data);
    ws.send("pong");
  });
});
