const { Router } = require('express');

const router = Router();

router.get('/nombreUsuario/:usuario', (req, res) => {

    // http://localhost:3000/nombreUsuario/Filipe

    const nombre = req.params.usuario
    res.send(nombre);
});

module.exports = router;


