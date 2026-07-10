import http from "node:http"

import { jsonHandler } from "./middlewares/json-handler.js"
import { routesHandler } from "./middlewares/routes-handler.js"

async function listener(request, response) {
  await jsonHandler(request, response)
  routesHandler(request, response)
}

http.createServer(listener).listen(3333)
