import { parse } from 'dotenv';
import {errorHandler} from './libs/routes/errorHandler';
import {notFound} from './libs/routes/notFoundRoute';
import { default as mainRouter } from './router';
import Database from './libs/Database';
var DbUrl = require('dotenv').config().parsed.MONGO_URL;
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
 
class Server{
    constructor(config){
        console.log(config.configuration.port);
        app.listen(config.configuration.port);
    }
    setupRoutes(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        });
        app.use(mainRouter);
        //app.use(errorHandler);
        app.use(notFound);
    }
    bootstrap(){
        this.run();
        this.setupRoutes();
        this.initBodyParser();
    }
    async run(){
        const res  = await Database.open(DbUrl);
        if (res){
            app.listen(config);
        }
    }
    initBodyParser(){
        app.use(bodyParser.urlencoded({ extended: true }));
    }
}
module.exports = Server;
