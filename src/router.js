import { traineerouter } from "./controllers/trainee/index";

const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/trainee',traineerouter);

export default mainRouter;