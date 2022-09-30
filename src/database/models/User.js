module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(`User`, {
      id: {
        primaryKey: true,
        type: dataTypes.STRING(40),
      },
      document:{
          type: dataTypes.STRING(30),
          allowNull: false
      },
      name:{
          type: dataTypes.STRING(30),
          allowNull: false
      },
      last_name:{
          type: dataTypes.STRING(30),
          allowNull: false
      },
    },{
        tableName: `users`,
        timestamps: false
    });

    User.associate=function(models){
      User.belongsTo(models.Role,{
          as: "roles",
          foreignKey: "roles_id"
      });
    }

    User.associate=function(models){
      User.hasMany(models.Sale,{
          as: "ventas",
          foreignKey: "users_id"
      });
    }

  return User;
};