import express from "express"
import ProductRoute from "./products.route"
export default () => {
  const router = express.Router()
  router.use("/products", ProductRoute())
  return router
}