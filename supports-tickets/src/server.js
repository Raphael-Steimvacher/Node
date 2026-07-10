import http from "node:http"

import { jsonHandler } from "../middlewares/json-handler.js"

async function listener(request, response) {
  await jsonHandler(request, response)
  console.log(request.body)
}

http.createServer(listener).listen(3333)
