import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/validationHandler';
import { UserController } from './Controller';
import validation from './validation';

const express = require('express');
const router = express.Router();
const userController = new UserController();

router.route('/login')
.post(validationHandler(validation.login),userController.login)
export default router;
