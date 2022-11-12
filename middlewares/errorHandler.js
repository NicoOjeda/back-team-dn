const errorHandler = {


    notFound: (req, res, next) => {
            res.status(404).json({message: `Ruta ${req.url} method ${req.method} no está disponible`})

    }

}
module.exports = errorHandler

 








