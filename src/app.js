const express = require('express');
const app=express();
const port=process.env.PORT || 3000;
const productsRoutes=require("./routes/products.routes");
const usersRoutes=require("./routes/users.routes");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/",productsRoutes);
app.use("/",usersRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        msg: "¡Oops! Al parecer la URL que intestas acceder esta errónea."
    })
});

app.listen(port,()=>console.log(`Corriendo en puerto ${port}`));