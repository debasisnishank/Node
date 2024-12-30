import { WebSocketServer } from "ws";
const wss = new WebSocketServer({
  port: 8080,
});
//event handler
wss.on("connection", function (socket) {
  console.log("user connected");
  setInterval(function () {
    socket.send("hello from ws server" + Math.random());
  }, 500);

  socket.on("message",function(e){
    console.log(e.toString())
  })
});
