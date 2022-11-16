const { Router } = require("express")
const drugController = require("../controllers/drug.controller")


const router = Router()
router.post('/admin/', drugController.addDrug)
router.get('/admin/', drugController.getDrugs)
router.get('/', drugController.getDrugs)
router.get('/byId/:id', drugController.getDrugById)
router.get('/category/:id', drugController.getDrugsByCategory)
router.patch('/admin/:id', drugController.updateDrug)
router.delete('/admin/:id', drugController.deleteDrug)

module.exports = router