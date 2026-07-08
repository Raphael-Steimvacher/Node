import http from "http"

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === "GET" && url === "/products") {
    return res.writeHead(200).end("Lista de produtos!")
  }

  if (method === "POST" && url === "/products") {
    return res.writeHead(201).end("Produto criado com sucesso!")
  }

  if (method === "PUT" && url === "/products") {
    return res.writeHead(200).end("Produto atualizado com sucesso!")
  }

  if (method === "DELETE" && url === "/products") {
    return res.writeHead(204).end("Produto deletado com sucesso!")
  }

  return res.writeHead(404).end("Nenhuma rota encontrada!")
})

server.listen(3333)
