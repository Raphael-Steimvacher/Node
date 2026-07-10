import { Database } from "../database/database.js"
import { routes } from "../routes/index.js"

const database = new Database()

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if (route) {
    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end("Rota não encontrada!")
}
