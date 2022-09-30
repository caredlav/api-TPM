module.exports = (sequelize, dataTypes) => {
    const Role = sequelize.define(`Role`, {
        id: {
          primaryKey: true,
          type: dataTypes.STRING(40),
        },
        name:{
            type: dataTypes.STRING(30),
            allowNull: false
        },
      },{
          tableName: `roles`,
          timestamps: false
      });

      Role.associate=function(models){
        Role.hasMany(models.User,{
            as: "usuarios",
            foreignKey: "roles_id"
        });
      }

    return Role;
};