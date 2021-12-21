import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/validationHandler';
import { UserController } from './Controller';
import validation from './validation';

const express = require('express');
const router = express.Router();
const userController = new UserController();

router.route('/')
.post(validationHandler(validation.login),userController.login,authMiddleWare('getUsers','all'))
export default router;
