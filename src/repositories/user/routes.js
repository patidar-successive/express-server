import UserRepository  from "./UserRepository";
import { seed } from "../../libs/seedData";
const express = require('express');
const routers = express.Router();
routers.route('/create')
.post(seed,UserRepository.create)
routers.route('/')
.get(UserRepository.find)
routers.route('/:id')
.put(UserRepository.update)
.delete(UserRepository.delete)
.get(UserRepository.find)
export default routers;
