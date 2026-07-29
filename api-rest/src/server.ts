import type { NextFunction, Request, Response } from "express"
import express from "express"
import { ZodError } from "zod"
import { routes } from "./routes/index.js"
import { AppError } from "./utils/app-error.js"

const PORT = 3333

const app = express()
app.use(express.json())
// app.use(myMiddleware)
app.use(routes)

app.use(
  (error: any, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message })
    }

    if (error instanceof ZodError) {
      response
        .status(400)
        .json({ message: "validation error!", issues: error.format() })
    }

    response.status(500).json("Erro do servidor!")
  },
)

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
