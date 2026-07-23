import type { Request, Response } from "express"
import { Router } from "express"
import { myMiddleware } from "../middleware/my-middleware.js"

const productsRoutes = Router()

productsRoutes.get(
  "/:id",
  myMiddleware,
  (request: Request, response: Response) => {
    const { id } = request.params
    const { name } = request.query

    response.send(`Hello world! ${id}, query: ${name}`)
  },
)

productsRoutes.post("/", (request: Request, response: Response) => {
  const { name, price } = request.body

  response.status(201).json(`Hello world! ${name} - ${price}`)
})
