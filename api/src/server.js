import http from "http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await jsonBodyHandler(req, res)

  if (method === "GET" && url === "/products") {
    return res.writeHead(200).end("Lista de produtos!")
  }

  if (method === "POST" && url === "/products") {
    console.log(req.body)

    return res.writeHead(201).end(JSON.stringify(req.body))
  }

  return res.writeHead(404).end("Nenhuma rota encontrada!")
})

server.listen(3333)
