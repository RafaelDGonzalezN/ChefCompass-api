const {User} = require("../db");
const {Op} = require("sequelize");
const {SECRET_KEY} = process.env
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }
    delete user.dataValues.password
    const token = jwt.sign(user.dataValues, SECRET_KEY,{ expiresIn: '1h' });
    return {token, user: user.dataValues}
}

const getUsers = async () => {
    const users = await User.findAll();
    return users
}
const postUser = async (userData) => {
    const {name, last_name, email, password, profile_picture} = userData
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({name, last_name, email, password: passwordHash, profile_picture});
    delete user.dataValues.password
    return user
}

const putUser = async (id, userData) => {
    const userToUpdate = await User.findByPk(id);
    const userUpdated = await userToUpdate.update(userData);
    return userUpdated
}

const deleteUser = async (id) => {
    const userToDelete = await User.findByPk(id);
    const userDeleted = await userToDelete.destroy();
    return userDeleted
}

const getUsersDeleted = async () => {
    const users = await User.findAll({ paranoid: false, where: {deletedAt: { [Op.not]: null }}});
    return users
}

const restoreUser = async (id) => {
    const userToRestore = await User.findByPk(id, {paranoid: false});
    const userRestored = await userToRestore.restore();
    return userRestored
}

module.exports = { 
    login,
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getUsersDeleted,
    restoreUser
    }