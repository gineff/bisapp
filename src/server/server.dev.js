/**
 * Created by Andrey on 01.07.2016.
 */
import express from 'express';
import path from 'path';

import http from 'http';
import React from 'react';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev'
const compiler = webpack(webpackConfig);
import SocketIo from 'socket.io';

const app = express();
var io  = SocketIo();
var db = new (require('bb-db'))({models: path.join(__dirname, '../../models'), emitter: io});

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
app.use('/db', db);
app.use('/', function (req,res) {
  res.sendFile(path.join(__dirname,'../../static/index.html'))
});

