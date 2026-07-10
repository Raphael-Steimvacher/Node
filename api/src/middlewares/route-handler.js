import { routes } from "../routes.js"
import { extractQueryParams } from "../utils/extract-query-params.js"

export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.controller(req, res)
  }

  return res.writeHead(404).end("Nenhuma rota encontrada!")
}
