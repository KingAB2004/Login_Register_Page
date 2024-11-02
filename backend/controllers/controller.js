const Task =require('../Models/Model')
const asyncWrapper =require('../middleware/async')
const getTask=asyncWrapper(async(req ,res ,next)=>{
    const {id : taskID } =req.params
    const task =await Task.findOne({_id :taskID})
    if(!task)
    {
        return next(Error);
    }
    res.status(200).json({task})
})
const getAllTask=asyncWrapper(async(req ,res)=>{
    const task =await Task.find({})
    if(!task)
    {
        return next(Error);
    }
    res.status(200).json({task})
})
const createTask =asyncWrapper(async(req ,res)=>{
    const task =await Task.create(req.body)
    res.status(201).json({task});
})
module.exports={
    getTask,
    getAllTask,
    createTask
}