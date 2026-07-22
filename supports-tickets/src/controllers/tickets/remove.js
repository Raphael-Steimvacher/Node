export function removeTicket({ request, response, database }) {
  const { id } = request.params

  database.delete("tickets", id)

  return response.writeHead(200).end("Ticket removido com sucesso!")
}
