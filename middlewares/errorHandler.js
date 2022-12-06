const errorHandler = (error, req , res, next) => {
     console.log(error.message);
     return    res.status(400).json({message: error.message})

    

}
module.exports = errorHandler

 








