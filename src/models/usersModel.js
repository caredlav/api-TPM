const db=require("../database/models");
const {v4: uuidv4}=require("uuid");

const usersModel={
    createUser: async(id,data)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    let rol;
                    if (data.rol==='admin') {
                        rol=await db.Role.findOne({
                            where: {name: data.rol}
                        });
                    } else if(data.rol==='employee') {
                        rol=await db.Role.findOne({
                            where: {name: data.rol}
                        });
                    }else{
                        rol=await db.Role.findOne({
                            where: {name: data.rol}
                        });
                    }
                    await db.User.create({
                        id: uuidv4(),
                        document: data.documento,
                        name: data.nombre,
                        last_name: data.apellido,
                        roles_id: rol.id
                    });
                    return result={
                        status: true,
                        msg: "El usuario fue creado con éxito."
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
    listOfUsers: async(id)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    const users=await db.User.findAll();
                    return result={
                        status: true,
                        users
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
    destroyUser: async(id,userToDelete)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    const userDeleted=await db.User.findByPk(userToDelete.usuarioId);
                    await db.User.destroy({
                        where: {id: userToDelete.usuarioId}
                    });
                    return result={
                        status: true,
                        msg: "El usuario "+userDeleted.name+" "+userDeleted.last_name+ " fue eliminado con éxito."
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
    changeUserRol: async(id,userToUpdate)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    let rol;
                    if(userToUpdate.rol==='employee') {
                        rol=await db.Role.findOne({
                            where: {name: userToUpdate.rol}
                        });
                    }else{
                        rol=await db.Role.findOne({
                            where: {name: userToUpdate.rol}
                        });
                    }
                    await db.User.update(
                        {
                            roles_id: rol.id
                        },
                        {
                        where: {id: userToUpdate.usuario}
                    });
                    return result={
                        status: true,
                        msg: "Se reasignó el rol al usuario con éxito."
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
    createRole: async(id,data)=>{
        try {
            const user=await db.User.findByPk(id);
            if (user) {
                const role=await db.Role.findByPk(user.roles_id);
                if (role.name==='admin') {
                    await db.Role.create({
                        id: uuidv4(),
                        name: data.rol
                    });
                    return result={
                        status: true,
                        msg: "Se creó el rol con éxito."
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
    }
}

module.exports=usersModel;