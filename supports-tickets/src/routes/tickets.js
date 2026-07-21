import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"
import { updateStatus } from "../controllers/tickets/update-status.js"
import { update } from "../controllers/tickets/update.js"

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },
]
