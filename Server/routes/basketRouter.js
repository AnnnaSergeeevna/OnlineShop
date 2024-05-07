const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const checkAuth = require('../middleware/checkAuth');

router.post('/item', checkAuth, basketController.append);
router.post('/', checkAuth, basketController.createBasket);

router.get('/:basketId', checkAuth, basketController.getAll);

router.get('/getone/:basketId', checkAuth, basketController.getOne);


module.exports = router;

