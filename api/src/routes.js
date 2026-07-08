import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (req, res) => {
      return res.writeHead(200).end("Lista de Produtos!")
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (req, res) => {
      return res.writeHead(201).end(JSON.stringify(req.body))
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (req, res) => {
      return res.writeHead(200).end("Produto removido com ID: " + req.params.id)
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))
