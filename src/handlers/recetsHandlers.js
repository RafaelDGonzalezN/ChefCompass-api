const {getRecets} = require('../controllers/recetsControllers');

const getRecetsHandler = async (req, res) => {
    try {
        const recets = await getRecets();
        res.status(200).json(recets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getRecetsHandler }