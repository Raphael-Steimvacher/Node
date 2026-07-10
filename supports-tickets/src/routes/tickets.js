export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body))
    },
  },
]
