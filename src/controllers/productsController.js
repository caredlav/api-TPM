const productsModel=require("../models/productsModel");

const productsController={
    newSale: async(req,res)=>{
        const userId=req.headers;
        const sale=req.body;
        try {
            const result=await productsModel.createSale(userId.auth,sale);
            if (result) {
                res.status(200).json({
                    msg: result
                });
            } else {
                res.status(401).json({
                    msg: "no se creo"
                });
            }
        } catch (error) {
            console.log(error);
        }    
    },
    newProduct: async(req,res)=>{
        const userId=req.headers;
        const product=req.body;
        try {
            const result=await productsModel.createProduct(userId.auth,product);
            if (result.status) {
                res.status(200).json({
                    msg: result.msg
                });
            } else {
                res.status(401).json({
                    msg: result.msg
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
    getProducts: async(req,res)=>{
        try {
            const userId=req.headers;
            const result=await productsModel.listOfProducts(userId.auth);
            if (result.status) {
                res.status(200).json({
                    products: result.products
                });
            } else {
                res.status(401).json({
                    msg: result.msg
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=productsController;