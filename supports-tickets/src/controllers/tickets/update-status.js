export function updateStatusTicket({ request, response, database }) {
  const { id } = request.params
  const { solution } = request.body

  database.update("tickets", id, { status: "closed", solution })

  return response.writeHead(201).end("Ticket echado com sucesso!")
}
