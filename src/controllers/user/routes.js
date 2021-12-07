import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

const express = require('express');
const router = express.Router();
const userController = new UserController();

router.route('/login')
.post(validationHandler(validation.create),userController.login)
export default router;
