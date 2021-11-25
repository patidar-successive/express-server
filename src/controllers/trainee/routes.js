import { TraineeController } from "./Controller";
const express = require('express');
const router = express.Router();
const trainee_controller = new TraineeController();

router.get('/',trainee_controller.trainee_get_router);
router.post('/',trainee_controller.trainee_get_router);
router.put('/',trainee_controller.trainee_get_router);
router.delete('/',trainee_controller.trainee_get_router);
 
export default router; 
