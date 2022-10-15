import express from 'express'
import { MySQL } from '../database'
import { errorResponse, successResponse } from '../utils'

const { Models } = MySQL
export default () => {
  const router = express.Router()

  router.post('/', async (req, res, next) => {
    try {
      const {
        name,
        price
      } = req.body

      const fileds = ['name', 'price']
      const messages = []
      for (let index = 0; index < fileds.length; index++) {
        const filed = fileds[index];
        if (!req.body[filed] && req.body[filed] != 0) messages.push(`${filed} is require.`)
      }

      if (messages.length) return res.send(errorResponse(messages))
      const duplicateProduct = await Models.Products.getProductByName(name)
      if (duplicateProduct) return res.send(errorResponse('duplicate product'))

      const product = await Models.Products.createProduct({ name, price })
      res.send(successResponse(product))
    } catch (error) {
      next(error)
    }
  })

  router.get('/', async (req, res, next) => {
    try {
      const {
        limit = -1,
        offset = 0,
        search = ""
      } = req.query
      const products = await Models.Products.getAllProduct(limit, offset, search.toString())
      res.send(successResponse(products))
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await Models.Products.getProductById(id)
      res.send(successResponse(product))
    } catch (error) {
      next(error)
    }
  })

  return router
}