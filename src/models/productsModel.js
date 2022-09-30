const db=require("../database/models");
const {v4: uuidv4}=require("uuid");

const productsModel={

    createSale: async(id,data)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='everyone') {
                    await db.Sale.create({
                        id: uuidv4(),
                        qty: data.cantidad,
                        sale_at: data.fecha,
                        products_id: data.product,
                        users_id: user.id,
                    });
                    return "true";
                } else {
                    return false
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    },
    createProduct: async(id,product)=>{        
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    await db.Product.create({
                        id: uuidv4(),
                        name: product.nombre,
                        description: product.descripcion,
                        price: product.precio
                    });
                    return result={
                        status: true,
                        msg: "El producto fue creado con éxito"
                    }
                } else {
                    return result={
                        status: false,
                        msg: "Ud no tiene las credenciales para realizar la solicitud."
                    }
                }
            } else {
                return result={
                    status: false,
                    msg: "El usuario no existe."
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    listOfProducts: async(id)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==="everyone") {
                    const products= await db.Product.findAll();
                    return result={
                        status: true,
                        products
                    }
                } else {
                    return result={
                        status: false,
                        msg: "Ud no tiene las credenciales para realizar la solicitud."
                    }
                }
            } else {
                return result={
                    status: false,
                    msg: "El usuario no existe."
                }
            }
        } catch (error) {
            
        }
    }

}

module.exports=productsModel;