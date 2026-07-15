import { Database } from "../database/database.js"
import { routes } from "../routes/index.js"
import { extractQueryParams } from "../utils/extract-query-params.js"

const database = new Database()

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if (route) {
    const routeParams = request.url.match(route.path)
    const { query } = routeParams.groups
    request.query = query ? extractQueryParams(query) : {}

    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end("Rota não encontrada!")
}
