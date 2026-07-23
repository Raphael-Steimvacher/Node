import express from "express"
import { routes } from "./routes/index.js"

const PORT = 3333

const app = express()
app.use(express.json())
// app.use(myMiddleware)
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
