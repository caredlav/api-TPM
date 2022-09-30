const usersModel=require("../models/usersModel");

const usersController={
    newUser: async(req,res)=>{
        try {
            const userId=req.headers;
            const user=req.body;
            const result=await usersModel.createUser(userId.auth,user);
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
    getUsers: async(req,res)=>{
        try {
            const userId=req.headers;
            const result=await usersModel.listOfUsers(userId.auth);
            if (result.status) {
                res.status(200).json({
                    users: result.users
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
    deleteUser: async(req,res)=>{
        try {
            const userId=req.headers;
            const userToDelete=req.body;
            const result= await usersModel.destroyUser(userId.auth,userToDelete);
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
    updateUserRol: async(req,res)=>{
        try {
            const userId=req.headers;
            const userToUpdate=req.body;
            const result=await usersModel.changeUserRol(userId.auth,userToUpdate);
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
    newRol: async(req,res)=>{
        try {
            const userId=req.headers;
            const role=req.body;
            const result= await usersModel.createRole(userId.auth,role);
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
    }
}

module.exports=usersController;