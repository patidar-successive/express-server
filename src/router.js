import { traineerouter } from "./controllers/trainee/index";
import { userrouter } from "./controllers/user/index"
const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/trainee',traineerouter);
mainRouter.use('/user',userrouter);

export default mainRouter;
