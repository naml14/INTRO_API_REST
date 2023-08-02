const express = require('express');
const router = express.Router();
const ApiControllers = require('../controllers/ApiControllers');

router.get('/',ApiControllers.getApi);
router.get('/suma',ApiControllers.getSuma);
router.get('/usuario/:nombre', ApiControllers.getUsuario);
router.get('/swapi/:id', ApiControllers.getSwapi);
router.put('/body', ApiControllers.putBody);
router.post('/suma',ApiControllers.postSuma);
router.delete('/:id', ApiControllers.deleteId);

module.exports = router;