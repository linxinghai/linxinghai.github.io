const express = require("express")
const server = express()

server.use(express.static("public"))
server.get("/timer", async function (request, response) {
    response.json(data)
})
  
server.listen(8080)