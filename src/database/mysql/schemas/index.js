import { DataTypes } from 'sequelize'
import Products from './product.schema'


export default (sequelize) => ({
  Products: Products(sequelize, DataTypes)
})
