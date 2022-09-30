module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define(`Product`, {
        id: {
          primaryKey: true,
          type: dataTypes.STRING(40),
        },
        name:{
            type: dataTypes.STRING(30),
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(30),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
      },{
          tableName: `products`,
          timestamps: false,
      });
    
      Product.associate=function(models){
        Product.hasMany(models.Sale,{
            as: "ventas",
            foreignkey: "products_id"
        });
      }

      return Product;
};