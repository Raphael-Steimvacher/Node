import type { Request, Response } from "express"

export class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir m registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um regstro.
   */

  public index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Pagina ${page} de ${limit}`)
  }

  public show() {}

  public create(request: Request, response: Response) {
    const { name, price } = request.body

    // throw new AppError("Erro do cliente!")

    response.status(201).json(`Hello world! ${name} - ${price}`)
  }

  public update() {}

  public remove() {}
}
