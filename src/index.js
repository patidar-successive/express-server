const Server = require("./server");
const configuration = require('./config/configuration');
const myserver = new Server(configuration);
myserver.bootstrap();
