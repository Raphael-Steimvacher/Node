export function update({ request, response, database }) {
  const { id } = request.params
  const { equipment, description, status } = request.body

  database.update("tickets", id, {
    equipment,
    description,
    status,
    updated_at: new Date(),
  })

  return response.writeHead(201).end()
}
