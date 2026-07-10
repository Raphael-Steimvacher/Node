import http from "http"
import { jsonBodyHandler } from "./middlewares/json-body-handler.js"
import { routeHandler } from "./middlewares/route-handler.js"

const server = http.createServer(async (req, res) => {
  await jsonBodyHandler(req, res)
  routeHandler(req, res)
})

server.listen(3333)
