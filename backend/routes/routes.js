const {createTask ,getTask  ,getAllTask} =require('../controllers/controller')
const express=require('express')
const app =express()
const router =express.Router()
router.route('/:id').get(getTask)
router.route('/').post(createTask).get(getAllTask)

module.exports =router