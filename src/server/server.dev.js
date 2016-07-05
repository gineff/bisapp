/**
 * Created by Andrey on 01.07.2016.
 */
import express from 'express';
import path from 'path';


import http from 'http';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react';
//import configureStore from '../common/store/configureStore'
import { RouterContext, match } from 'react-router';
//import routes from '../common/routes';
import {createLocation} from 'history';
import bodyParser from 'body-parser';
//import DevTools from '../common/containers/DevTools';
//import cors from 'cors';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev'
const compiler = webpack(webpackConfig);
import SocketIo from 'socket.io';
//import User from './models/User.js';
//import passport from 'passport';
//require('../../config/passport')(passport);
//import SocketIo from 'socket.io';

const app = express();
var io  = SocketIo();
var db = new (require('bb-db'))({models: path.join(__dirname, 'models'), emitter: io});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('listening', ()=> console.log('listening'));
io.attach( server );

/*
const server = app.listen(process.env.PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server listening on port: %s', process.env.PORT);
});

const io = new SocketIo(server, {path: '/api/chat'})*/