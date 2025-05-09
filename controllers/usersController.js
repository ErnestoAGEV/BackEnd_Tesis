const User = require('../models/user');

module.exports = {

    register(req, res) {

        const user = req.body; //CAPTURAMOS LOS DATOS QUE NOS MANDA EL CLIENTE
        User.create(user, (err,data) => {

            if(err) {
                console.log('ENTRO EN EL ERROR');
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data //EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    }

}