import { Router } from "express"
import { ProductsController } from "../controllers/products-controller.js"
import { myMiddleware } from "../middleware/my-middleware.js"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", myMiddleware, productsController.index)

productsRoutes.post("/", productsController.create)

export { productsRoutes }
