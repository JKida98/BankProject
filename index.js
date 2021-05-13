import express from 'express';
import {createSequelizeUserModel} from './database/models/user.js';

const app = express()
const port = 8080;

app.use(express.static('./'))
createSequelizeUserModel();

app.listen(port)