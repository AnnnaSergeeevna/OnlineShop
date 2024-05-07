const Router = require('express')
const router = new Router()
const basketItemController = require('../controllers/basketItemController')

router.post('/', basketItemController.create)
router.get('/', basketItemController.getAll)



module.exports = router