const {Recet} = require("../db");
const { Op } = require("sequelize");

const getRecets = async () => {
    const recets = await Recet.findAll();
    return recets
}

const getRecetsById = async (id) => {
    const recet = await Recet.findByPk(id);
    return recet;
}

const postRecets = async (recetsData) => {
    const recet = await Recet.create(recetsData)
    return recet
}

const putRecets = async (id, recetsData) => {

    const recetToUpdate = await Recet.findByPk(id)
    const recetUpdated = await recetToUpdate.update(recetsData)
    return recetUpdated
}

const deleteRecets = async (id) => {
    const recetToDelete = await Recet.findByPk(id)
    const recetDeleted = await recetToDelete.destroy()
    return recetDeleted  
}

const getRecetsDeleted = async () => {
    const recets = await Recet.findAll({ paranoid: false, where: {deletedAt: { [Op.not]: null }}})
    return recets
}

const restoreRecets = async (id) => {
    const recetToRestore = await Recet.findByPk(id, {paranoid: false})
    const recetRestored = await recetToRestore.restore()
    return recetRestored
}

module.exports = {
    getRecets,
    getRecetsById,
    postRecets,
    putRecets,
    deleteRecets,
    getRecetsDeleted,
    restoreRecets
}