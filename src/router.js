import { traineerouter } from "./controllers/trainee/index";
//import router from "./controllers/trainee/routes";
import { userrouter } from "./controllers/user/index"
const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/trainee',traineerouter);
mainRouter.use('/login',userrouter);

export default mainRouter;
