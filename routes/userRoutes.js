const userController = require('../controllers/usersController');

module.exports = (app) => {

    
    //GET para obtener datos
    //POST para almacenar datos
    //PUT para actualizar datos
    
    app.post('/api/users/create', userController.register);

}