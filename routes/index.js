const { Router } = require('express')
const categoryRoutes = require('./category.route')
const clientRoutes = require('./client.route')
const drugRoutes = require('./drug.route')

const router = Router()

router.use('/drugs',drugRoutes)
router.use("/categories", categoryRoutes)
router.use('/user', clientRoutes)


module.exports = router