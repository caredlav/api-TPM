const express=require("express");
const router=express.Router();
const usersController=require("../controllers/usersController");

router.post("/api/newuser",usersController.newUser);

router.get("/api/users",usersController.getUsers);

router.delete("/api/deleteuser",usersController.deleteUser);

router.put("/api/updateuserrol",usersController.updateUserRol);

router.post("/api/newrol",usersController.newRol);

module.exports=router;