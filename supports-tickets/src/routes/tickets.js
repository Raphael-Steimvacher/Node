import { createTicket } from "../controllers/tickets/create.js"
import { indexTickets } from "../controllers/tickets/index.js"
import { removeTicket } from "../controllers/tickets/remove.js"
import { updateStatusTicket } from "../controllers/tickets/update-status.js"
import { updateTicket } from "../controllers/tickets/update.js"

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: createTicket,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: indexTickets,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: updateTicket,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatusTicket,
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: removeTicket,
  },
]
