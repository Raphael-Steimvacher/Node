import http from "http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

const server = http.createServer(async (req, res) => {
  await jsonBodyHandler(req, res)
  routeHandler(req, res)
})

server.listen(3333)
