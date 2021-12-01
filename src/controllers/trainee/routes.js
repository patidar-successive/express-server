import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler'
import validation from './validation';
const express = require('express');
const router = express.Router();
const traineeController = new TraineeController();

router.route('/')
.get(validationHandler(validation.get),traineeController.traineeGetRouter)
.post(validationHandler(validation.create),traineeController.traineePostRouter)
.put(validationHandler(validation.update),traineeController.traineePutRouter)
router.route('/:id')
.delete(validationHandler(validation.delete),traineeController.traineeDeleteRouter)
 
export default router; 
