const { Router } = require('express')
const categoryController = require('../controllers/category.controller')

const router = Router()
router.post('/admin/',categoryController.addCategory)
router.patch('/admin/:id',categoryController.updateCategory)
router.get('/admin/',categoryController.getCategory)
router.delete('/admin/:id',categoryController.deleteCategory)





module.exports = router