import { routes } from "../routes.js"

export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    console.log(routeParams)

    const { ...params } = routeParams.groups

    req.params = params

    return route.controller(req, res)
  }

  return res.writeHead(404).end("Nenhuma rota encontrada!")
}
