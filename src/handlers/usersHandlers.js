const {
    login,
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getUsersDeleted,
    restoreUser
} = require('../controllers/usersControllers');

const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUsersHandler = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const postUserHandler = async (req, res) => {
    const userData = req.body;
    try {
        const user = await postUser(userData);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const putUserHandler = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        const user = await putUser(id, userData);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUsersDeletedHandler = async (req, res) => {
    try {
        const users = await getUsersDeleted();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const restoreUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await restoreUser(id);
        res.status(200).json({message: "restore sucess"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    loginHandler,
    getUsersHandler,
    postUserHandler,
    putUserHandler,
    deleteUserHandler,
    getUsersDeletedHandler,
    restoreUserHandler
}