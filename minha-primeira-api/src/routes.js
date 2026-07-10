import { parseRoutePath } from "./utils/parse-route-path.js"

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: ({ req, res, database }) => {
      const products = database.select("products")
      return res.writeHead(200).end(JSON.stringify(products))
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: ({ req, res, database }) => {
      const { name, price } = req.body

      database.insert("products", { name, price })
      return res.writeHead(201).end("Produto cadastrado com sucesso!")
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: ({ req, res }) => {
      return res.writeHead(200).end("Produto removido com ID: " + req.params.id)
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))
