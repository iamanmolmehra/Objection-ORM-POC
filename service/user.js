const Users = require('../model/user');

module.exports = class UserService {
    async create(details) {
        return await Users.query().insert(details);
    }

    async findAll(txn) {
        return await Users.query();
    }

    async findById(id) {
        const userId = await Users.query().findById(id);
        if (userId === undefined) {
            return (`Sorry: User id ${id} not found`);
        }
        return userId;
    }

    async deleteById(del){
        const userDel = await Users.query().deleteById(del);
        if (userDel === undefined) {
            return (`Sorry: User id ${id} not found`);
        }
        return {delete : "Object deleted successfully"}
    }

    async updateById(idd,dataa){
        const userup = await Users.query().update(dataa).where('id', idd)
        if (userup === undefined) {
            return (`Sorry: User id ${id} not found`);
        }
        return {update : "Object updated successfully"}
    }

    async findAll(idp) {
        const userlogin = await Users.query().findById(idp)
        console.log(userlogin);
        // const datapa = {email : req.body.email, password : req.body.password};
        // console.log(datapa);
        // if (userlogin === undefined) {
        //     return (`Sorry User id ${id} not found`);
        // } else {
        //     if (userlogin == datapa)
        //     return {update : "Object login successfully"}
        // }
    }
}