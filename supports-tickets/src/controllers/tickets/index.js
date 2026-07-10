export function index({ request, response, database }) {
  const tickets = database.select("tickets")
  return response.writeHead(200).end(JSON.stringify(tickets))
}
