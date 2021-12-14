import UserRepository  from "./UserRepository";
import { seed } from "../../libs/seedData";
const express = require('express');
const routers = express.Router();
routers.route('/')
.post(seed,UserRepository.create)
export default routers;
