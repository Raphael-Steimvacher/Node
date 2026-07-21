export function updateStatus({ request, response, database }) {
  const { id } = request.params

  const closeTicket = database.update("tickets", id, { status: "closed" })

  return response.writeHead(200).end("OK")
}
