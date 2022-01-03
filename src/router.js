import { traineerouter } from "./controllers/trainee/index";
import { userrouter } from "./controllers/user/index"
import routers from "./repositories/user/routes";
const express = require('express');
const mainRouter = express.Router();
mainRouter.use('/trainee',traineerouter);
mainRouter.use('/user',userrouter);
mainRouter.use('/users',routers);

export default mainRouter;
