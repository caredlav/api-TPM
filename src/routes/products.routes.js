const express=require("express");
const router=express.Router();
const productsController=require("../controllers/productsController");

router.post("/api/newsale",productsController.newSale);

router.post("/api/newproduct",productsController.newProduct);

router.get("/api/products",productsController.getProducts);

module.exports=router;