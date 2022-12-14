const db = require("../../database/models");
const { Op } = require("sequelize")

let controller = {

    lista: async (req, res) => {
        try {
            const productos = await db.product.findAll({
                attributes: ["id", "name", "description", "image", "price"],
                include: ["type", "brand"],
                limit: req.query.pagina ? 3 : 100000000,
                offset: req.query.pagina ? (req.query.pagina - 1) * 3 : 0
            })

            let data = []
            productos.forEach(producto => {
                producto.image = `${req.headers.host}/img/Productos/${producto.image}`
                data.push({
                    producto,
                    detalle: `${req.headers.host}/productos/detalles/${producto.id}`,
                    detalleApi: `${req.headers.host}/api/productos/detalles/${producto.id}`,
                })
            })

            const count = await db.product.count()

            const countByCategory = {
                "CPU": await db.product.count({ where: { type_id: 1 } }),
                "GPU": await db.product.count({ where: { type_id: 2 } }),
                "FUENTES": await db.product.count({ where: { type_id: 3 } }),
                "RAM": await db.product.count({ where: { type_id: 4 } }),
                "HDD": await db.product.count({ where: { type_id: 5 } }),
                "SSD": await db.product.count({ where: { type_id: 6 } }),
                "MOTHERBOARDS": await db.product.count({ where: { type_id: 7 } }),
                "PERIFERICOS": await db.product.count({ where: { type_id: 8 } }),
            }

            const respuesta = {
                count,
                countByCategory,
                data
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    detalles: async (req, res) => {
        try {
            const { id } = req.params
            const producto = await db.product.findByPk(id, {
                include: ["brand", "type"]
            })
            producto.image = `${req.headers.host}/img/Productos/${producto.image}`

            let respuesta = {
                producto
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    ultimoProducto: async (req, res) => {
        try {
            let producto = await db.product.findOne({
                order: [["id", "DESC"]],
            })

            producto.image = `${req.headers.host}/img/Productos/${producto.image}`


            let respuesta = {
                producto,
                detalle: `${req.headers.host}/productos/detalles/${producto.id}`
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    guardar: async (req, res) => {
        try {
            let producto = await db.product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                enOferta: req.body.enOferta,
                discount: req.body.discount,
                image: req.file ? req.file.filename : "default.png",
                category_id: req.body.category,
                type_id: req.body.type,
                brand_id: req.body.brand
            })

            let respuesta = {
                producto
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    actualizar: async (req, res) => {
        try {
            let id = Number(req.params.id);
            const oldImage = await db.product.findByPk(id).image;
            const productoActulizado = await db.product.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                enOferta: req.body.enOferta ? req.body.enOferta : null,
                discount: req.body.enOferta ? req.body.discount : null,
                image: req.file ? req.file.filename : oldImage,
                category_id: req.body.category,
                type_id: req.body.type,
                brand_id: req.body.brand
            }, {
                where: {
                    id: id
                }
            })

            res.json(productoActulizado);
        } catch (e) {
            res.json(e)
        }
    },

    borrar: async (req, res) => {
        try {
            const id = req.params.id;
            const productoEliminado = await db.product.destroy({
                where: {
                    id: id
                }
            }, {
                force: true
            })

            let respuesta = {
                productoEliminado
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    marcas: async (req, res) => {
        try {
            const marcas = await db.brand.findAll()
            res.json(marcas)
        } catch (e) {
            res.json(e)
        }
    },

    tipos: async (req, res) => {
        try {
            const tipos = await db.type.findAll()
            res.json(tipos)
        } catch (e) {
            res.json(e)
        }
    },

    busqueda: async (req, res) => {
        try {
            const busqueda = req.query.q.toUpperCase();
            const productos = await db.product.findAll({
                attributes: ["id", "name", "description", "image", "price"],
                include: ["type", "brand"],
                where: {
                    name: {
                        [Op.like]: `%${busqueda}%`
                    }
                }
            })

            let data = []
            productos.forEach(producto => {
                producto.image = `${req.headers.host}/img/Productos/${producto.image}`
                data.push({
                    producto,
                    detalle: `${req.headers.host}/productos/detalles/${producto.id}`,
                    detalleApi: `${req.headers.host}/api/productos/detalles/${producto.id}`,
                })
            })

            let respuesta = {
                data
            }

            res.json(respuesta)
        }
        catch (e) {
            res.json(e)
        }
    },

}

module.exports = controller;