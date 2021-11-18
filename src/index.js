import { Server } from './server';
import {configuration} from './config/configuration';
let myserver = new Server(configuration);
myserver.bootstrap();
