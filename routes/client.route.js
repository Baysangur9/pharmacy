const { Router } = require('express')
const clientController = require('../controllers/client.controller')


const router = Router()
router.post('/', clientController.addUser)
router.delete('/admin/:id')
router.get('/:id', clientController.getUser)
router.patch('/put/:id', clientController.putToBasket)
router.patch('/pay/:id', clientController.payForBasket)
router.patch('/clear/:id', clientController.clearBasket)
router.patch('/remove/:id', clientController.removeDrugFromBasket)
router.patch('/up/:id', clientController.upBalance)

module.exports = router