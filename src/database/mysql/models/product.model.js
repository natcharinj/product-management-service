import { Schemas } from "../setup";
import { formatDate, toPlain } from "../../../utils";
import { Op } from "sequelize";

export const formatProduct = (_product) => {
    const product = toPlain(_product)
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        createdAt: formatDate(product.createdAt),
        updatedAt: formatDate(product.updatedAt),
    };
};

export const getAllProduct = async (limit = -1, offset = 0, search = "") => {
    const pagination = limit != -1 ? {
        limit: parseInt(limit),
        offset: parseInt(offset),
    } : {}
    const queryWhere = search ? {
        where: {
            name: {
                [Op.like]: `%${search}%`
            }
        }
    } : {}
    const product = await Schemas.Products.findAll({
        ...pagination,
        ...queryWhere
    })
    return product?.map(p => formatProduct(p))
};

export const getProductByName = async (name) => {
    const product = await Schemas.Products.findOne({ where: { name } })
    return product ? formatProduct(product) : null
};

export const getProductById = async (id) => {
    const product = await Schemas.Products.findOne({ where: { id } })
    return product ? formatProduct(product) : null
};

export const createProduct = async ({ name, price = 0 }) => {
    const product = await Schemas.Products.create({ name, price })
    return formatProduct(product)
}