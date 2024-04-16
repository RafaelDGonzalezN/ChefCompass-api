const {
    getRecets,
    getRecetsById,
    postRecets,
    putRecets,
    deleteRecets,
    getRecetsDeleted,
    restoreRecets} = require('../controllers/recetsControllers');

const getRecetsHandler = async (req, res) => {
    const {page, size} = req.query
    const {search} = req.body
    try {
        const recets = await getRecets( page, size, search );
        res.status(200).json(recets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getRecetsByIdHandler = async (req, res) => {
    const {id} = req.params
    try {
        const recet = await getRecetsById(id);
        res.status(200).json(recet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const postRecetsHandler = async (req, res) => {
    const recetsData = req.body
    try {
        const recet = await postRecets( recetsData );
        res.status(200).json(recet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const putRecetsHandler = async (req, res) => {
    const {id} = req.params 
    const recetsData = req.body

    try {
        const recet = await putRecets(id, recetsData);
        res.status(200).json(recet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteRecetsHandler = async (req, res) => {
    const {id} = req.params

    try {
        const recet = await deleteRecets(id);
        res.status(200).json(recet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getRecetsDeletedHandler = async (req, res) => {
    try {
        const recets = await getRecetsDeleted();
        res.status(200).json(recets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const restoreRecetsHandler = async (req, res) => {
    const {id} = req.params

    try {
        const recet = await restoreRecets(id);
        res.status(200).json({message: "restore sucess"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { 
    getRecetsHandler,
    getRecetsByIdHandler,
    postRecetsHandler,
    putRecetsHandler,
    deleteRecetsHandler,
    getRecetsDeletedHandler,
    restoreRecetsHandler
}