module.exports = (sequelize, dataTypes) => {
    const Sale = sequelize.define(`Sale`, {
        id: {
          primaryKey: true,
          type: dataTypes.STRING(40),
        },
        qty:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
      },{
          tableName: `sales`,
          timestamps: true,
          createdAt: 'sale_at',
          updatedAt: false,
          deletedAt: false
      });

      Sale.associate=function(models){
        Sale.belongsTo(models.User,{
          as: "usuarios",
          foreignKey: "users_id"
        });
      }

      Sale.associate=function(models){
        Sale.belongsTo(models.Product,{
            as: "productos",
            foreignkey: "products_id"
        });
      }

      return Sale;
};