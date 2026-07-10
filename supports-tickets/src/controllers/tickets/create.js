export function create({ request, response }) {
  return response.writeHead(201).end(JSON.stringify(request.body))
}
