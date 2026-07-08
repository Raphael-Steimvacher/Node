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
]
