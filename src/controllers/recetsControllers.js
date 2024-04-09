const { recets } = require("../utils/recets");

const getRecets = async () => {
    return recets;
} 

module.exports = {
    getRecets
}