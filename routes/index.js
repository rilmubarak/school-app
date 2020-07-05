const router = require('express').Router()
const HomeController = require('../controllers/HomeControllers')
const studentsRouter = require('./students')
const teachersRouter = require('./teachers')
const subjectsRouter = require('./subjects')

router.get('/', HomeController.getHome)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)
router.use('/students', studentsRouter)
router.get('/*', HomeController.notFound)

module.exports = router 